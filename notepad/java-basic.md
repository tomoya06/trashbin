---
title: 101-java
date: 2019-02-19 11:45:26
tags:
- Java
- OOP
---

> 还是Java吧。CPP太操蛋了。

<!-- more -->

## 数据类型

Java 是一种强类型的语言，声明变量时必须指明数据类型。变量(variable)的值占据一定的内存空间。不同类型的变量占据不同的大小。

### 基本数据类型

| 类型    | 占位/bit | 默认值 | 说明         |
| ------- | -------- | ------ | ------------ |
| byte    | 8        | 0      | 字节型       |
| short   | 16       | 0      | 短整型       |
| int     | 32       | 0      | 整形         |
| long    | 64       | 0L     | 长整形       |
| float   | 32       | 0.0f   | 单精度浮点型 |
| double  | 64       | 0.0d   | 双精度浮点型 |
| boolean | 1        | false  | 布尔型       |
| char    | 16       |        | 字符型       |

* 常量：`final double PI = 3.14159`
* 类型转换
  * 优先级：byte,short,char < int < long < float < double
  * 低转高不损失精度，浮点转整数直接舍弃小数，直接`long1 = int1`
  * 高转低要强制类型转换，`byte1 = (byte)int1`，丢失精度
  * boolean不能类型转换
* 数组
  * 声明：`int demoArray[]; int[] demoArray;`
  * 定义数组时并不为数组元素分配内存，因此`[]`中无需指定数组长度，对于如上定义的一个数组是不能访问它的任何元素的，我们必须要为它分配内存空间，这时要用到运算符new：`demoArray=new int[3];`
* String字符串
  * 声明：简写方式`String stringName = "string content";`OOP方式：`String stringName = new String("string content");`

> 按照标准的面向对象的语法，在内存使用上存在比较大的浪费。例如String str = new String(“abc”);实际上创建了两个String对象，一个是”abc”对象，存储在常量空间中，一个是使用new关键字为对象str申请的空间。

  * StringBuffer：在进行字符串处理时，不生成新的对象，在内存使用上要优于String。StringBuffer 默认分配16字节长度的缓冲区，当字符串超过该大小时，会自动增加缓冲区长度，而不是生成新的对象：`StringBuffer str2 = =new StringBuffer(512);  // 分配512个字节长度的缓冲区`
  * StringBuilder：与StringBuffer功能类似，但StringBuilder线程安全，后者不线程安全。

### 包装类、拆箱和装箱

* 问题：暂时还没遇到过，可[参考](http://www.weixueyuan.net/view/5990.html)

| 基本数据类型 | 对应的包装类 |
| ------------ | ------------ |
| byte         | Byte         |
| short        | Short        |
| int          | Integer      |
| long         | Long         |
| char         | Character    |
| float        | Float        |
| double       | Double       |
| boolean      | Boolean      |

* 装箱：由基本类型向对应的包装类转换称为装箱，例如把 int 包装成 Integer 类的对象
* 拆箱：包装类向对应的基本类型转换称为拆箱，例如把 Integer 类的对象重新简化为 int
* Java 1.5 之后可以自动拆箱装箱，也就是在进行基本数据类型和对应的包装类转换时，系统将自动进行

### 变量类型

* 类变量/静态变量
  * 在类中以static关键字声明，但必须在方法构造方法和语句块之外
  * 无论一个类创建了多少个对象，类只拥有类变量的一份拷贝。
  * 静态变量除了被声明为常量外很少使用。常量是指声明为public/private，final和static类型的变量。常量初始化后不可改变。
* 实例变量
  * 声明在一个类中，但在方法、构造方法和语句块之外；
  * 实例变量具有默认值
  * 实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：`ObejectReference.VariableName`。
* 局部变量
  * 声明在方法、构造方法或者语句块中；
  * 局部变量没有默认值，所以局部变量被声明后，必须经过初始化，才可以使用。

````
public class Employee{
   // 这个实例变量对子类可见
   public String name;
   // 私有变量，仅在该类可见
   private double salary;
   //在构造器中对name赋值
   public Employee (String empName){
      // 局部变量age
      // int age; 会报错
      int age = 10
      age = age + 7;
      name = empName;
   }
}
````

### 变量作用域

在Java中，变量的作用域分为四个级别：类级、对象实例级、方法级、块级。

* 类级变量/全局级变量/静态变量，需要使用`static`关键字修饰，在类定义后就已经存在，占用内存空间，可以通过类名来访问，不需要实例化。

* 对象实例级变量/成员变量，实例化后才会分配内存空间，才能访问。

* 方法级变量/局部变量，就是在方法内部定义的变量。

* 块级变量，就是定义在一个块（由大括号包围的代码）内部的变量，变量的生存周期就是这个块。

### this

this 关键字用来表示当前对象本身，或当前类的一个实例，通过 this 可以调用本对象的所有方法和属性

* 也可作为方法名来初始化对象：`this(args)`，也就是相当于调用本类的其它构造方法，它必须作为构造方法的第一句。

````
    public Demo(){
        this("微学苑", 3);
    }
  
    public Demo(String name, int age){
        this.name = name;
        this.age = age;
    }
````

## 修饰符

### 访问修饰符

public / private / (default) / private

| 修饰符    | 说明                                     |
| --------- | ---------------------------------------- |
| public    | 共有的，对所有类可见。                   |
| protected | 受保护的，对同一包内的类和所有子类可见。 |
| private   | 私有的，在同一类内可见。                 |
| (default) | 在同一包内可见。默认不使用任何修饰符。   |

* 父类中声明为 public 的方法在子类中也必须为 public。
* 父类中声明为 protected 的方法在子类中要么声明为 protected，要么声明为 public，不能声明为 private。
* 父类中声明为 private 的方法，不能够被继承。

### 非访问修饰符

| 修饰符   | 说明   |
| -------- | ------ |
| static   | 静态   |
| final    | 终态   |
| abstract | 抽象类 |

  * static 修饰符，用来修饰类方法和类变量，不需要创建一个类的对象来访问该类的静态成员，编译器只为整个类创建了一个静态变量的副本，所有实例共享该内存
  * final 修饰符，用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。
  * abstract 修饰符，用来创建抽象类和抽象方法。
  * synchronized 和 volatile 修饰符，主要用于线程的编程。


## 基本语法

都差不多的

* 增强for：

````
public class Test {
   public static void main(String args[]){
      int [] numbers = {10, 20, 30, 40, 50};
 
      for(int x : numbers ){
         System.out.print( x );
         System.out.print(",");
      }
````

* switch：必须break

