---
title: Redis 基础
date: 2019-09-24 10:09:01
tags:
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

### 规范

> 以下来自[StackOverflow](https://stackoverflow.com/a/6971415/8356786)

> What are the normal naming convention for keys in redis? I've seen values separated by : but I'm not sure what the normal convention is, or why.

Yes, colon sign : is a convention when naming keys. In this tutorial on redis website is stated: Try to stick with a schema. For instance "object-type:id:field" can be a nice idea, like in "user:1000:password". I like to use dots for multi-words fields, like in "comment:1234:reply.to".

> Are you able to query for just the beginning of the key to return all users?

If you mean someting like directly querying for all keys which starts with user: there is a keys command for that. This command should be however used only for debugging purpose since it's O(N) because it's searching through all keys strored in database.

More appropriate solution for this problem is to create dedicated key, let's name is users, which will store all the users keys, for example, in list or set data structure.