---
date: 2019-09-03 14:30:32
id: git-common
tags:
- git
- 开发
- 前端
title: Git常用指令记录
---

收集git的常用指令

<!-- more -->

## Git小知识

### fetch vs pull 

In a word: git pull = git fetch + git merge

[INFERENCE](https://blog.csdn.net/riddle1981/article/details/74938111)

## Git常用指令记录

### 撤销commit

````
git reset --soft HEAD^
// HEAD^的意思是上一个版本，也可以写成HEAD~1
// 如果你进行了2次commit，想都撤回，可以使用HEAD~2
````

#### 参数

--mixed

意思是：不删除工作空间改动代码，撤销commit，并且撤销git add . 操作

这个为默认参数,git reset --mixed HEAD^ 和 git reset HEAD^ 效果是一样的。

--soft  

不删除工作空间改动代码，撤销commit，不撤销git add . 

--hard

删除工作空间改动代码，撤销commit，撤销git add .

注意完成这个操作后，就恢复到了上一次的commit状态。

[INFERENCE](https://blog.csdn.net/w958796636/article/details/53611133)

### 修改commit描述

````
git commit --amend
````

[INFERENCE](https://blog.csdn.net/w958796636/article/details/53611133)

### 合并前n次commit 

````
git rebase -i HEAD~3
git rebase -i 3a4226b
// 请注意3a4226b这个版本是不参与合并的，可以把它当做一个坐标
````

[INFERENCE](https://www.jianshu.com/p/964de879904a)

### 使用本地commit覆盖远程commit

````
git push --force
````

一般经历前面合并n次commit之后会用到这条

### 拉取远程commit覆盖本地，即将本地分支与远程同步

````
# fetch from the default remote, origin
git fetch
# reset your current branch (master) to origin's master
git reset --hard origin/master
````

[INFERENCE](https://stackoverflow.com/a/4787356/8356786)