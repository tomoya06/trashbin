---
title: 因特网五层协议笔记
date: 2018-12-22 12:32:21
categories:
- 上课
- 前端
tags:
- 计算机网络
- 作业
- 前端
---

就是笔记了

<!-- more -->

<!-- TODO: 补充因特网总结 -->

## 应用层

* 数据单位：报文(message)

### 要点

* 应用程序体系结构：CS结构/P2P结构
* 进程通信：socket
* 服务分类：可靠数据传输，吞吐量，定时，安全性
  * 持续链接和非持续连接
  * 使用的运输层协议：TCP vs UDP
  * SSL

### 协议和应用

#### web 和 HTTP

* 带流水线的持续连接
  * 关键词：TCP，RTT，80端口，CS结构
* 报文格式
  * 关键词：请求行，首部行，实体体
  * 常用状态码：200 301 304 400 404 500 
* 无状态协议
  * cookie
* web缓存
  * 代理服务器（web缓存器）
  * 条件GET方法："If-Modified-Since""Last-Modified"首部行

#### DNS：因特网的目录服务

* 解决的问题：主机名到IP地址的转换
  * 关键字：UDP，53端口，CS结构
* 分布式设计
  * 层次：根/顶级域(TLD)/权威/本地DNS服务器
  * 递归查询 vs 迭代查询
  * DNS缓存

#### P2P

* 文件分发
  * 分发时间计算，下界
* 分布式散列表（P2P数据库）（DHT）
  * 关键字：散列函数，
  * 实现：环形DHT，具有捷径的环形DHT，


#### socket编程

## 传输层

* 数据单位：报文段(segment)
* 为运行在不同主机的应用进程之间提供了逻辑通信
* 在端系统中实现而非在路由器
* 报文段格式：源端口号字段、目的端口号字段

### 协议

#### TCP

* 关键词：可靠数据传输协议，拥塞控制，面向连接
* 多路复用和多路分解
  * 多路分解：将运输层报文段中的数据交付到正确的socket
  * 多路复用：将不同socket的数据块封装好生成报文段，传播到网络层
* socket标识：四元组（源IP+源端口号+目的IP+目的端口号）
* socket分配：每个连接都建立一个新socket
* 报文段结构

##### 可靠数据传输原理

* 有限状态机(Finite-State Machine, FSM)
* 自动重传请求(ARQ)协议：差错检测+接收方反馈+重传
* 额外的问题与解决
  * ACK/NAK本身受损：添加分组序号
  * 丢包：倒计数计时器
  * 链路利用率低：流水线技术
  * 流水线技术差错恢复：回退N步(GO-Back-N, GBN)、选择重传(Selective Repeat, SR)
* 拥塞控制

##### TCP实现

* 连接管理
  * 建立连接：三次握手
  * 关闭连接
* TCP拥塞算法：加性增、乘性减(Additive-Increase Multiplicative-Decrease, AIMD)
  * 参数：cwnd/ssthresh
  * 慢启动：cwnd×2 ~ ssthreash=cwnd_t/2, cwnd=1,cwnd×2
  * 拥塞避免：cwnd++ ~ ssthresh=cwnd_t/2, cwnd=1
  * 快速恢复（非必须）

#### UDP

* 关键词：不可靠，无连接
* socket标识：二元组（目的IP地址+目的端口号）
* socket分配：到达同IP和端口的报文段共用同一个socket
* 传输准备：无需准备即可进行数据传输
* 检验和：差错检测功能

## 网络层

* 主要功能：
  * 转发（单一路由器的出入选择），
  * 路由选择（多个路由器间的路径选择），
  * 建立连接

### 路由器工作原理

* 数据单位：数据报(datagram)
* 转发表：前缀-链路接口，最长前缀匹配规则
* 结构：输入端口（使用转发表），交换结构，输出端口，路由选择处理器
* 分组队列，排队
  * 线路前部阻塞(Head-Of-the-Line, HOL)
* 数据报格式
* 因特网网络层的主要组件：IP协议，因特网路由选择协议，因特网控制报文协议(ICMP)

### IP协议

* 关键词：尽力而为交付服务，不可靠服务
* IPv4
  * 编址：32比特/4字节
  * 子网，子网掩码，
    * 无类别域间路由选择(Classless Interdomain Routing, CIDR)：a.b.c.d/x
  * 动态主机配置协议(Dynamic Host Configuration, DHCP)：自动分配新IP地址的过程
  * 网络地址转换(Network Address Translation. NAT)：管理IP地址的典型方法 
* IPv6
  * 编址：128比特
  * v4迁移到v6：双站，建隧道

### ICMP

* ping：ICMP类型0

### 路由选择算法

* 解决问题：从源路由器到目的路由器的路由选择问题
* 分类：
  * 全局式路由选择算法/链路状态算法(Link State, LS)：
    * 网络拓扑和链路费用均已知
    * eg：Dijkstra算法
  * 分散式路由选择算法/距离向量算法(Distance Vector, DV)：
    * 迭代、异步、分布式算法
    * 原理：Bellman-Ford方程：$d_{x}(y)=min_{v}{c(x, v)+d_{v}(y)}$_，其中v是y的邻居之一
    * 链路费用发生变化、链路故障引起的距离向量变化过程：”好消息传得快，坏消息传得慢“
  * 层次路由选择：自治系统(Autonomous System, AS) + 自治系统内部路由选择协议(intra-autonomous system routing protocol) + 自治系统间路由选择协议(inter-autonomous system routing protocol)
    * 因特网中的自治系统内部的路由选择：路由选择信息协议(Routing Information Protocol, RIP)，开放最短路优先(Open Shortest Path First, OSPF)
    * 自治间的路由选择：边界网关协议(Border Gateway Protocol, BGP) <-- "绝对至关重要的协议！"“将所有的东西粘合在一起了”
