---
date: 2019-09-18 14:53:29
id: java-frameworks
tags: null
title: 一个完整的Java SpringBoot项目中会用到的框架
---

> 列举一个Springboot项目中各个框架的作用。以[macrozheng/mall](https://github.com/macrozheng/mall)项目为参考。

<!-- more -->

## 基本：SpringBoot

SpringBoot可以让你快速构建基于Spring的Web应用程序，内置多种Web容器(如Tomcat)，通过启动入口程序的main函数即可运行。

## MyBatis

对JDBC(Java Database Connectivity)的封装。方便进行CRUD操作。类似的库有Hibernate。

### MyBatis Generator

在使用MyBatis的时候需要新建DAO、建立所需的查询语句mapper，接口很多的时候，可以使用MBG来自动生成。

## Swagger-UI

可以动态生成在线API文档，需要手动添加注解。

## Redis

高性能键值对数据库，可用于数据缓存，主要用于处理大量数据的高访问负载。

在参考项目中，作者使用Redis存储手机验证码，可以设置存储时效，从而有效校检验证码。

## SpringSecurity

SpringSecurity是一个强大的可高度定制的认证和授权框架，对于Spring应用来说它是一套Web安全标准。

## JWT

全称JSON WEB TOKEN。一种可以安全传输的的JSON对象，由于使用了数字签名，所以是可信任和安全的。

### JWT实现认证和授权的原理

* 用户调用登录接口，登录成功后获取到JWT的token；
* 之后用户每次调用接口都在http的header中添加一个叫Authorization的头，值为JWT的token；
* 后台程序通过对Authorization头中信息的解码及数字签名校验来获取其中的用户信息，从而实现认证和授权。

## Elastic Search

Elasticsearch 是一个分布式、可扩展、实时的搜索与数据分析引擎。 它能从项目一开始就赋予你的数据以搜索、分析和探索的能力，可用于实现全文搜索和实时数据统计。

## RabbitMQ

RabbitMQ是一个被广泛使用的开源消息队列。它是轻量级且易于部署的，它能支持多种消息协议。RabbitMQ可以部署在分布式和联合配置中，以满足高规模、高可用性的需求。

在参考项目中，作者使用RabbitMQ发送延迟消息来取消超时订单。业务实现原理：

* 用户进行下单操作（会有锁定商品库存、使用优惠券、积分一系列的操作）；
* 生成订单，获取订单的id；
* 获取到设置的订单超时时间（假设设置的为60分钟不支付取消订单）；
* 按订单超时时间发送一个延迟消息给RabbitMQ，让它在订单超时后触发取消订单的操作；
* 如果用户没有支付，进行取消订单操作（释放锁定商品库存、返还优惠券、返回积分一系列操作）。

## Lombok

不用再为实体类手写getter/setter等方法，通过一个注解即可拥有。