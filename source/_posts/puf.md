---
title: 基于PUF的IoT设备身份管理模型
date: 2019-02-26 20:13:16
tags:
categories:
- 毕业设计
- 密码学
---

> 来自论文 [Chatterjee U, Govindan V, Sadhukhan R, et al. Building PUF based Authentication and Key Exchange Protocol for IoT without Explicit CRPs in Verifier Database[J]. IEEE Transactions on Dependable and Secure Computing, 2018.](https://ieeexplore.ieee.org/abstract/document/8353301)

> 终端设备与区块链节点（拓展到任意节点好了）进行安全身份交互认证的方案参考：基于PUF的身份管理模型。
> 
> 流程和计算公式比较复杂。设备要求支持PUF，意味着原生树莓派不一定能用，有[方案](https://github.com/Tribler/tribler/issues/3064)说可以外接一个PUF芯片。

<!-- more -->

## 声明

1. 定义一个椭圆曲线，并从曲线上的点生成三组值$G_1,G_2,G_3$，用于定义加密对
2. 加密对$G1 \times G2 \rightarrow G_3$满足
   1. 双线性：$\forall a, b \in F^*_q, \forall P \in G_1, Q \in G_1$: $e(aP, bQ)=e(P, Q)^{ab}$
   2. 非退化性：$e(P, Q) \neq 1$
   3. 可计算性：有高效算法来计算e
3. 定义三个加密哈希函数满足：H1: $\{ 0, 1\}^n \rightarrow G^*_1$, H2: $\{0, 1\}^n \times \{0, 1\}^m \rightarrow G^*_2$, H3: $G_2 \rightarrow \{0, 1\}^n$
4. $BCH_{encoder}$和$BCH_{decoder}$也是需要电路级别支持，理解为一个通用函数，用于计算辅助值。

## 流程

### Enrolment phase 注册阶段

1. Provisioning process：
   1. SCG随机选择一个m比特的密钥$K_s$，存到验证机的内存和KEYDB
   2. 给节点A发送一个随机的challenge $C_a$，节点A计算response $R_a = PUF(C_a)$，返回给SCG
   3. SCG生成辅助值$HLP_a=BCH_{Encoder}(R_a)$，组成元组<$C_a$, $R_a$, $HLP_a$>存到CRPDB，
2. Security Association Generation Process
   1. SCG随机生成一个n比特的challenge $C_s$，计算 $P_s=H2_{Ks}(C_s)$ $P_a=H1(R_a)$
   2. SCG随机从$Z^*_q$选择一个元素$a$并计算：<br>$B=P_a-a \cdot P_s$, <br>$d_1=H3(H1(C_a||C_s||HLP_a||a||H3(P_s))+B)$，<br>组成元组<$C_a$, $C_s$, $HLP_a$, $B$, $d_1$>存到SAP的MAPDB，这样对节点A的注册就完成了
3. 经过上述步骤，验证机只存有密钥$K_s$，

### Authentication & key exchange phase 认证和交换密钥阶段

假设节点A和节点B想要交互：

1. 节点A初始化一个请求<$ID_a$, $ID_b$>，发给验证机，后者转发请求给SAP
2. SAP从MAPDB选择一条<$C_s$, $HLP_a$, $B$, $d_1$>发给验证机
3. 验证机进行计算：$P_s = H2_{Ka}(C_s)$
4. 如果$d1==H3(H1(C_a||C_s||HLP_a||a||H3(P_s))+B)$，计算：$P_a=a \cdot P_s + B$
5. 验证机随机选择一个值$x \in _RZ^*_q$，并计算<br>$Q_a=P_a+x \cdot P_s +H1(ID_a||ID_b)$，<br>$V_a=e(P_a, x \cdot P_s)$，<br>组成元组<$C_a$, $HLP_a$, $Q_a$>发给节点A。
6. 节点A收到之后，
   1. 计算$R_{actural}=PUF_a(C_a)$
   2. 使用$BCH_{Decoder}$，输入$HLP_a$，解析出$R_{corrected}$，与$R_{actural}$比较
   3. 进行计算：<br>$P^`_a=H1(R_{corrected})$<br> $P^`_s=Q_a-P^`_a-H1(ID_a||ID_b)$ <br>$V^`_a=e(P^`_a, P^`_s)$
   4. 节点A随机选择$t \in _RZ^*_q, Y_a \in _RG^*_1$，计算密钥对：$KA_{PUB}=t \cdot Q_a, KA_{PRV}=t \cdot Y_a$, 组成元组<$V^`_a, KA_{PUB}, Y_a, H3(P^`_s+KA_{PUB})||H3(Y_a)$>
7. 如果$V_a=V^`_a$，$H3(P_s+KA_{PUB})||H3(Y_a)=H3(P^`_s+KA_{PUB})||H3(Y_a)$，验证机就认为节点A是已授权设备，并接受他的公钥$KA_{PUB}$
8. 类似地，验证机验证节点B，最后给节点A发送元组<$KB_{PUB}, Q_b, Y_b, H3(H1(P_a)||H1(KB_{PUB})||H1(Q_b)||H1(Y_b))$>
9. 节点A收到之后，若$H3(H1(P_a)||H1(KB_{PUB})||H1(Q_b)||H1(Y_b))=H3(H1(P^`_a)||H1(KB_{PUB})||H1(Q_b)||H1(Y_b))$，说明验证机是已授权的，因为只有验证机能使用$P_s$来解析出$P_a$，并接受节点B的公钥
