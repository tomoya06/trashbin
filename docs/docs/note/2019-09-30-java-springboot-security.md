---
date: 2019-09-30 16:03:22
id: java-springboot-security
tags:
- Java
- SpringBoot
- 后端
title: SpringBoot Security 配置方案
---

> 梳理一下 Springboot Security 的配置方案

<!-- more -->

## 配置结构

这个配置结合了jwt认证，见 SecurityConfig.java

````
- class SecurityConfig extends WebSecurityConfigurerAdapter
  - void configure(HttpSecurity httpSecurity)
    - httpSecurity.csrf() ...       // 路径权限配置
    - httpSecurity.addFilterBefore : jwtAuthenticationTokenFilter
    - httpSecurity.exceptionHandling
      - accessDeniedHandler
      - authenticationEntryPoint
  - void configure(AuthenticationManagerBuilder auth)
    - auth.userDetailsService : userDetailsService
    - auth.passwordEncoder
````

## 具体说明

### ``public UserDetailsService userDetailsService() ``

SpringSecurity定义的核心接口，用于根据用户名获取用户信息UserDetails。这个UserDetails需要自行实现

### ``class JwtAuthenticationTokenFilter extends OncePerRequestFilter``

GenericFilterBean基类，相当于中间件。这里加了一个处理Jwt的filter，可以为每个request的SecurityContextHolder上下文处理Jwt授权信息，