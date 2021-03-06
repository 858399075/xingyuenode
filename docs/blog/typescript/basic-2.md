# 【Typescript入门】之引用类型在TypeScript中的应用

> 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

上一篇文章[《基本类型在 TypeScript 中的应用》](https://webbj97.github.io/summary/blog/ts/1.html)地址在这里，本篇文章将继续聊一聊“复杂”类型是如果定义的。

> 系列文章，收藏不走丢哦

## 一、对象的类型（接口）

TypeScript 的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。简单的说，接口就是对**对象形状**的描述。

### 1.1 使用接口

来看下面一段代码：

```ts
function getName(obj: { name: string; age: number }): void {
  console.log(obj.name);
  console.log(obj.age);
}

const res = getName({ name: "余光", age: 100 });
console.log(res);
```

不难理解，我们将参数 obj 内部的属性进行了类型注释，并在之后检查对应的类型。

再来看看下面的代码：

```ts
interface Person {
  name: string;
  age: number;
}

function getName(person: Person): void {
  console.log(person.name);
  console.log(person.age);
}
const person1 = { name: "余光1", age: 100 };
const person2 = { name: "余光2", age: 200 };

getName(person1); // 余光1 100
getName(person2); // 余光2 200
```

开头我们提到过Ts的鸭式辨型法——像鸭子一样走路并且嘎嘎叫的就叫鸭子，在这里只要在结构（形状）是和接口Person一致的，就会通过类型检查。当然接口不仅仅只能这样使用，我们继续～

**注意：**

1. 定义的变量比接口少了一些属性是不允许的
2. 多一些属性也是不允许的

举例：

```ts
interface Person {
    name: string,
    age: number
}

// 缺少属性
const aa: Person = {
    name: '余光'
} // 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Person" 中需要该属性。

// 多属性
const aa: Person = {
    name: '余光',
    age: 100,
    height: 200
}
// 不能将类型“{ name: string; age: number; height: number; }”分配给类型“Person”。
// 对象文字可以只指定已知属性，并且“height”不在类型“Person”中。
```

### 1.2 可选属性

在1.1小节的最后我们知道，必须和接口的形状一模一样，但有时我们希望不要100%相似，这时就需要用到**可选属性**了

```js
interface Person {
    name: string;
    age?: number;
}

let person1: Person = {
    name: '余光'
};
```

注意可选属性可以不存在，但仍然不允许添加**未定义**的属性。

### 1.3 任意属性

有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let yuguang: Person = {
    name: '余光',
};
```

**注意：**一旦定义了任意属性，那么确定属性和可选属性的类型都**必须是它的类型的子集**：例如：

```ts
interface Person {
    name: string; // 类型“string”的属性“name”不能赋给字符串索引类型“number”
    age?: number; // 类型“number”的属性“age”不能赋给字符串索引类型“boolean”
    [propName: string]: boolean;
}

let yuguang: Person = {
    name: '余光',
    age: 100
};
```

**任意属性可以添加联合类型**

不难理解，任意属性的确定，是优先级最高的，确定的属性和可选属性会进行类型检测，所以才会有上面例子的检测错误，而想要避免这样的检测错误，可以给任意属性可以添加联合类

```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}
```

### 1.4 只读属性

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用`readonly`定义只读属性：

```ts
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let yuguang: Person = {
    id: 1,
    name: '余光',
    gender: 'male'
};

yuguang.id = 9527; // 无法分配到 "id" ，因为它是只读属性。
```

注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：

```ts
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let yuguang: Person = {
    name: '余光',
    gender: 'male'
}; // 类型 "{ name: string; gender: string; }" 中缺少属性 "id"，但类型 "Person" 中需要该属性

yuguang.id = 9527; // 无法分配到 "id" ，因为它是只读属性。
```

你会发现：

1. 创建对象yuguang时应该被赋值的id属性不存在，会报错
2. id赋值的时会报错，因为这个属性是只读的

## 二、数组的类型

在TypeScript中，数组类型有多种定义方式，比较灵活。


### 2.1 类型 + 方括号

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5]; // 此时数组内每个元素都会进行类型检测
```

数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：

```ts
let fibonacci: number[] = [1, 1, 2, 3, 5];
fibonacci.push('8'); // 类型“string”的参数不能赋给类型“number”的参数。
```

### 2.2 数组泛型

> 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

我们可以使用数组泛型（Array Generic） `Array<elemType>` 来表示数组：


```ts
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

其实两者非常相似～

### 2.3 用接口表示数组

接口也可以用来描述数组：

NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。

```ts
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```

看到接口有一种恍然大明白的感觉，数字也是特殊的对象，对象的属性是字符串类型，而数组的下标是数字类型，嗯没毛病

当然我们一般不会这么做，因为这种方式比前两种方式复杂多了。

不过有一种情况例外，那就是它常用来表示类数组。

### 2.4 类数组

类数组（Array-like Object）不是数组类型，比如 arguments：

```ts
function sum() {
    let args: number[] = arguments;
}

// 类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 24 项
```

上例中，arguments实际上是一个类数组，不能用普通的数组的方式来描述，所以类型检测会提示缺少数组上的方法等等

而应该用接口：

```ts
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```

在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 length 和 callee 两个属性。

事实上常用的类数组都有自己的接口定义，如`IArguments`, `NodeList`,`HTMLCollection` 等：

```ts
function sum() {
    let args: IArguments = arguments;
}
```

其中IArguments是TypeScript中定义好了的类型，它实际上就是：

```ts
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
```

### 2.5 any 在数组中的应用

一个比较常见的做法是，用 any 表示数组中允许出现任意类型：

```ts
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
```

对于any约束的数字，其实就是主动放弃了类型检测～


## 写在最后

本篇文章是《Typescript基础入门》第二篇，到这里就结束了，主要带大家了解一下引用类型在Ts中的表现，下一篇文章我们来聊一聊函数类型在Ts中是怎么被“约束”的～

系列文章传送门：

1. [《Typescript入门手册之基本类型在TypeScript中的应用》](https://yuguang.blog.csdn.net/article/details/119137707)
2. 本篇

### 关于我

- 花名：余光
- WX：j565017805
- 邮箱：webbj97@163.com

### 其他沉淀

- [Github: Js版LeetCode题解](https://webbj97.github.io/leetCode-Js/)
- [前端进阶笔记](https://webbj97.github.io/summary/)
- [CSDN博客汇总](https://yuguang.blog.csdn.net/)

<p align=center>
	<img src="https://hlgcdn.oss-cn-hangzhou.aliyuncs.com/hlg-ui/1607504321645897/yuguang-vue-bottom.gif" width="100%"/>
</p>
