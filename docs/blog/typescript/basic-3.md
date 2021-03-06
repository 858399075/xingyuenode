# 【Typescript入门】之函数类型在 TypeScript 中的应用

> 函数是 JavaScript 中的一等公民

> 系列文章，收藏不走丢哦

## 一、函数声明

在 JavaScript 中，有两种常见的定义函数的方式——函数声明和函数表达式：

```ts
// 函数声明（Function Declaration）
function sum(x, y) {
  return x + y;
}

// 函数表达式（Function Expression）
const mySum = function(x, y) {
  return x + y;
};
```

### 1.1 函数声明

一个函数有输入和输出，要在 TypeScript 中对其进行约束，两者都要考虑到，其中函数声明的类型定义较简单：

```ts
function sum(x: number, y: number): number {
  return x + y;
}
```

**输入多余的（或者少于要求的）参数，是不被允许的：**

```ts
function sum(x: number, y: number): number {
  return x + y;
}

sum(1);
// 应有 2 个参数，但获得 1 个。ts(2554)
// index.ts(1, 25): 未提供 "y" 的自变量。

sum(1, 2, 3); // 应有 2 个参数，但获得 3 个
```

### 1.2 函数表达式

如果要我们现在写一个对函数表达式定义它的输入输出，应该是怎么样的呢？

```ts
let mySum1 = function(x: number, y: number): number {
  return x + y;
};
```

这段代码不会报错，也是正确的，而还有一种函数表达式的定义是这样的:

```ts
let mySum2: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
```

注意：此箭头，并不是 ES6 中我们熟知的箭头函数哦～

两者的区别是 mySum1 的类型是推导出来的，而 mySum2 是直接定义的，但两者其实一样，不需要深究。

### 1.3 用接口定义函数的形状

我们也可以使用接口的方式来定义一个函数需要符合的形状：之前我们都是用接口来定义对象和数组，自然函数也可以定义“形状”

```ts
interface expFunc {
  (x: number, y: number): number;
}

let mySum1: expFunc;
let mySum2: expFunc;
mySum1 = function(x: number, y: number) {
  return x + y;
};
mySum2 = function(x, y) {
  return x + y;
};
```

这样可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

### 1.4 可选参数

前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？

与接口中的可选属性类似，我们用`?`表示可选的参数：

```ts
function hello(name1: string, name2?: string): void {
  console.log(`hello! ${name1} ${name2 ? "and" + " " + name2 : ""}`);
}

hello("余光1", "余光2"); // hello! 余光1 and 余光2
hello("余光"); // hello! 余光
```

需要注意的是，可选参数必须接在必需参数后面。换句话说，可选参数后面**不允许**再出现必需参数了：

### 1.5 参数默认值

在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：

```ts
function hello(name1: string = "余光", name2: string = "yuguang"): void {
  console.log(`hello! ${name1} ${name2 ? "and" + " " + name2 : ""}`);
}

hello(); // hello! 余光 and yuguang
hello("小明"); // hello! 小明 and yuguang
```

是不是又拉回到了我们熟悉的领域？

### 1.6 剩余参数

ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：

```ts
function func(a, ...arg) {
  console.log(a);
  console.log(arg);
}

func(1, 2, 3, 4); // 1, [2, 3, 4]
```

**注意：**rest参数只能是最后一个参数

## 写在最后

本篇文章是《Typescript基础入门》第三篇，到这里就结束了，主要带大家了解一下函数Ts中的表现，其实到这里有关一门语言中基础部分——类型相关的知识已经聊得差不多了（未来我们会讲到更多的进阶类型知识，例如泛型、别名、约束等），下一篇文章我们来聊一聊Ts中特殊的，或者说会让我们“陌生”的概念，希望大家通过这三篇文章能打消对Ts的抵触和迷茫，一起加油～

系列文章传送门：

1. [【Typescript入门手册】之基本类型在TypeScript中的应用](https://yuguang.blog.csdn.net/article/details/119137707)
2. [【Typescript入门手册】之引用类型在TypeScript中的应用](https://yuguang.blog.csdn.net/article/details/119220029)
3. 本篇

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