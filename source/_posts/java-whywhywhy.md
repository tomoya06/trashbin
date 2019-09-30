---
title: Java 到底发生了什么？？
date: 2019-09-25 11:03:54
categories:
- Java
- 后端
---

> 在这里记录一下你在学着玩Java的过程中遇到的疑惑。
> Java的工具太神奇

<!-- more -->

## 【MyBatis】[FIXME:]DAO：怎么实现interface到查询语句的绑定的？

### 问题源码

````
@Mapper
public interface AdminDao {
  @Select("SELECT * FROM admin WHERE id = #{id}")
  Admin findAdminByID(@Param("id") Integer id);
}
````

## 【Springboot】[FIXME:] 这些注解都什么意思？

````
@ResponseBody
@RequestBody
@Autowired
@Bean
````