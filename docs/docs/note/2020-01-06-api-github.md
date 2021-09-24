---
categories: null
date: 2020-01-06 15:25:37
title: API使用指南-GitHub
---

## 常见错误解决

### 403/请求次数超出限制

参考[这里](https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications)，在请求地址加上`client_id`与`client_secret`即可。

这两个东西去[这里](https://github.com/settings/developers)申请即可。