---
title: python learning notes - oop
date: 2019-01-24 09:42:18
tags:
categories:
- Python
- 前端
---

## 类和实例

> 面向对象最重要的概念：类（Class）和实例（Instance）

````
class Student(object):
    pass
bart = Student()
# 可以自由地给一个实例变量绑定属性
bart.name = 'Bart Simpson'
````
* 带构造函数的类声明

````
class Student(object):
    def __init__(self, name, score):
        self.name = name
        self.score = score
````

> 注意到__init__方法的第一个参数永远是`self`，但创建实例时不需要为self赋值

* 声明其他方法

````
# Follow last code block
    def print_score(self):
        print('%s: %s' % (self.name, self.score))
````

> 注意到第一个参数还是`self`

## 访问限制

* 通过给属性名添加双下划线的方式，可以将该属性变成私有属性。如：

````
class Student:
    def __init__(self, name, gender):
        self.__name = name
        self.__gender = gender
    def get_gender(self):
        return self.__gender
````

> 注意，私有化的原理是把`__gender`属性对外改成了`_Student__gender`属性，所以实际上还是可以直接通过后者来读写这个属性。当然这是不建议的。
> 若外部直接读写`__gender`属性，将会给该实例新添一个`__gender`属性，与类声明的`__gender`不是同一个指向。
> 私有化全靠自觉= =

## 继承

类声明时，类名后括号引用父类

````
class Animal(Object):
    # ...
````

## 多态

一个实例同时属于多个类。类继承可以引起多态出现。

> Python是动态语言，类型检测采用**鸭子类型**检测。JS也是。
