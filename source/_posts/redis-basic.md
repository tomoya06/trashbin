---
title: Redis 基础
date: 2019-09-24 10:09:01
categories:
- Java
- 后端
- Redis
---

> Redis入门

<!-- more -->

### 简介

* key-value存储系统，非关系数据库
* 高性能，单线程机制（没有并发问题，这一点可以被充分利用）

## 基本指令

````
SET <PARAM> "STRING"
GET <PARAM>
INCR <PARAM>
INCRBY <PARAM> 10
DECR <PARAM>
DECRBY <PARAM> 10

// for list
LPUSH <ARR> XX
RPUSH <ARR> XX
LEN <ARR>
LPOP <ARR>
RPOP <ARR>
LRANGE <ARR> 0 -1

// for set
SADD <SET> XX
SREM <SET> XX
SISMEMBER <SET> XX
SMEMBERS <SET>
SUNION <SET1> <SET2>

// for sorted set / zset
ZADD <ZET> 
ZRANGE <ZET> 0 -1

// for hashes (Object in JS)
HSET <HASH> <KEY> <VALUE>
HGETALL <HASH>
HMSET <HASH> <KEY> <VALUE> <KEY> <VALUE> <KEY> <VALUE> ...
HGET <HASH> <KEY>
HINCRBY
HDEL
````

### 数据类型

### 注意

* 指令不分大小写，参数名/HASH KEY分