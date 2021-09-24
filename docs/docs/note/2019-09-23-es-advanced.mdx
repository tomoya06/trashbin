---
date: 2019-09-23 17:18:11
id: es-advanced
tags:
- Java
- ElasticSearch
- 后端
title: ElasticSearch 进阶
---

> ES进阶

<!-- more -->

## 集群健康

````
curl -X GET "localhost:9200/_cluster/health?pretty"

````

> 更多关于分布式集群的介绍直接去看[权威指南：集群内的原理](https://www.elastic.co/guide/cn/elasticsearch/guide/current/distributed-cluster.html)

## 文档

### 文档元数据

三个必须的元数据元素如下：

* _index：索引，一个索引应该是因共同的特性被分组到一起的文档集合。
* _type：文档表示的对象类别，子分区
* _id：文档唯一标识。创建一个新的文档，要么提供自己的 _id ，要么让 Elasticsearch 帮你生成。

### 处理冲突

同样有乐观锁和悲观锁两种处理概念。权威指南介绍了乐观锁：

* 乐观并发控制

````
curl -X PUT "localhost:9200/website/blog/1?version=1&pretty" -H 'Content-Type: application/json' -d'
{
  "title": "My first blog entry",
  "text":  "Starting to get the hang of this..."
}
'
````

* 通过外部系统使用版本控制

<!-- TODO: 有实践经验之后完善这篇 -->
使用其它数据库作为主要的数据存储，使用 Elasticsearch 做数据检索。

### 文档部分更新

````
curl -X POST "localhost:9200/website/blog/1/_update?pretty" -H 'Content-Type: application/json' -d'
{
   "doc" : {
      "tags" : [ "testing" ],
      "views": 0
   }
}
'
````

此外还可以用Groovy脚本更新、设置初始值upsert等。

### 多个文档

* mget
* bulk