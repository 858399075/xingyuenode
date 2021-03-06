import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-145ac574","/blog/","",["/blog/index.html","/blog/README.md"]],
  ["v-74458d05","/css/","CSS世界",["/css/index.html","/css/README.md"]],
  ["v-70bc2959","/algorithm/","",["/algorithm/index.html","/algorithm/README.md"]],
  ["v-9abd5602","/algorithm/%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5.html","",["/algorithm/搜索二维矩阵.html","/algorithm/%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5","/algorithm/搜索二维矩阵.md","/algorithm/%E6%90%9C%E7%B4%A2%E4%BA%8C%E7%BB%B4%E7%9F%A9%E9%98%B5.md"]],
  ["v-18112a9c","/algorithm/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.html","",["/algorithm/斐波那契.html","/algorithm/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91","/algorithm/斐波那契.md","/algorithm/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.md"]],
  ["v-2e531b4c","/algorithm/%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC.html","",["/algorithm/替换空格.html","/algorithm/%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC","/algorithm/替换空格.md","/algorithm/%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC.md"]],
  ["v-15878d38","/algorithm/%E7%AE%97%E6%B3%95%E9%9A%8F%E6%9C%BA.html","",["/algorithm/算法随机.html","/algorithm/%E7%AE%97%E6%B3%95%E9%9A%8F%E6%9C%BA","/algorithm/算法随机.md","/algorithm/%E7%AE%97%E6%B3%95%E9%9A%8F%E6%9C%BA.md"]],
  ["v-79018afa","/blog/browser/1.html","浏览器的基本工作原理",["/blog/browser/1","/blog/browser/1.md"]],
  ["v-7597d9bc","/blog/browser/2.html","浏览器渲染基本原理",["/blog/browser/2","/blog/browser/2.md"]],
  ["v-722e287e","/blog/browser/3.html","走进 Event Loop",["/blog/browser/3","/blog/browser/3.md"]],
  ["v-6ec47740","/blog/browser/4.html","",["/blog/browser/4","/blog/browser/4.md"]],
  ["v-282e8d7b","/blog/browser/hotrank.html","【整活系列】我从CSDN排行榜上发现了惊人的秘密，快进来看看吧～",["/blog/browser/hotrank","/blog/browser/hotrank.md"]],
  ["v-df406b4e","/blog/browser/%E6%B5%8F%E8%A7%88%E5%99%A8.html","",["/blog/browser/浏览器.html","/blog/browser/%E6%B5%8F%E8%A7%88%E5%99%A8","/blog/browser/浏览器.md","/blog/browser/%E6%B5%8F%E8%A7%88%E5%99%A8.md"]],
  ["v-6b51897a","/blog/browser/%E8%B7%A8%E5%9F%9F.html","",["/blog/browser/跨域.html","/blog/browser/%E8%B7%A8%E5%9F%9F","/blog/browser/跨域.md","/blog/browser/%E8%B7%A8%E5%9F%9F.md"]],
  ["v-52dc1263","/blog/es6/1.html","ES6系列（一）let和const",["/blog/es6/1","/blog/es6/1.md"]],
  ["v-08d93e5f","/blog/es6/10.html","proxy",["/blog/es6/10","/blog/es6/10.md"]],
  ["v-0a8e16fe","/blog/es6/11.html","Reflect",["/blog/es6/11","/blog/es6/11.md"]],
  ["v-5490eb02","/blog/es6/2.html","ES6系列（二）变量的解构赋值",["/blog/es6/2","/blog/es6/2.md"]],
  ["v-5645c3a1","/blog/es6/3.html","ES6系列（三）箭头函数",["/blog/es6/3","/blog/es6/3.md"]],
  ["v-57fa9c40","/blog/es6/4.html","ES6系列（四）Iterator（遍历器）和for...of循环",["/blog/es6/4","/blog/es6/4.md"]],
  ["v-15086c3b","/blog/es6/5-1.html","Module 的语法",["/blog/es6/5-1","/blog/es6/5-1.md"]],
  ["v-59af74df","/blog/es6/5.html","ES6系列（五）set",["/blog/es6/5","/blog/es6/5.md"]],
  ["v-5b644d7e","/blog/es6/6.html","ES6 系列（六）Promise 初探",["/blog/es6/6","/blog/es6/6.md"]],
  ["v-5d19261d","/blog/es6/7.html","Generator 生成器",["/blog/es6/7","/blog/es6/7.md"]],
  ["v-5ecdfebc","/blog/es6/8.html","async",["/blog/es6/8","/blog/es6/8.md"]],
  ["v-6082d75b","/blog/es6/9.html","class",["/blog/es6/9","/blog/es6/9.md"]],
  ["v-51aa0735","/blog/javascript/basic-1.html","JavaScript基础（一）this",["/blog/javascript/basic-1","/blog/javascript/basic-1.md"]],
  ["v-386c3866","/blog/javascript/basic-10.html","JavaScript基础（总结）你真的了解Js吗",["/blog/javascript/basic-10","/blog/javascript/basic-10.md"]],
  ["v-35028728","/blog/javascript/basic-11.html","JavaScript基础（番外）学习正则表达式的简单方法",["/blog/javascript/basic-11","/blog/javascript/basic-11.md"]],
  ["v-535edfd4","/blog/javascript/basic-2.html","JavaScript基础（二）从原型到原型链",["/blog/javascript/basic-2","/blog/javascript/basic-2.md"]],
  ["v-5513b873","/blog/javascript/basic-3.html","JavaScript基础（三）作用域",["/blog/javascript/basic-3","/blog/javascript/basic-3.md"]],
  ["v-56c89112","/blog/javascript/basic-4.html","JavaScript基础（四）执行上下文",["/blog/javascript/basic-4","/blog/javascript/basic-4.md"]],
  ["v-587d69b1","/blog/javascript/basic-5.html","JavaScript基础（五）变量对象",["/blog/javascript/basic-5","/blog/javascript/basic-5.md"]],
  ["v-5a324250","/blog/javascript/basic-6.html","JavaScript基础（六）立即调用函数",["/blog/javascript/basic-6","/blog/javascript/basic-6.md"]],
  ["v-5be71aef","/blog/javascript/basic-7.html","JavaScript基础（七）闭包",["/blog/javascript/basic-7","/blog/javascript/basic-7.md"]],
  ["v-5d9bf38e","/blog/javascript/basic-8.html","JavaScript基础（八）参数传递",["/blog/javascript/basic-8","/blog/javascript/basic-8.md"]],
  ["v-5f50cc2d","/blog/javascript/basic-9.html","JavaScript基础（九）基本数据类型",["/blog/javascript/basic-9","/blog/javascript/basic-9.md"]],
  ["v-11cea1d7","/blog/javascript/senior-1.html","JavaScript专题（一）变量与函数提升",["/blog/javascript/senior-1","/blog/javascript/senior-1.md"]],
  ["v-28389d6b","/blog/javascript/senior-10.html","JavaScript专题（十）柯里化浅谈",["/blog/javascript/senior-10","/blog/javascript/senior-10.md"]],
  ["v-29ed760a","/blog/javascript/senior-11.html","",["/blog/javascript/senior-11","/blog/javascript/senior-11.md"]],
  ["v-13837a76","/blog/javascript/senior-2.html","JavaScript专题（二）数组去重",["/blog/javascript/senior-2","/blog/javascript/senior-2.md"]],
  ["v-15385315","/blog/javascript/senior-3.html","JavaScript专题（三）防抖",["/blog/javascript/senior-3","/blog/javascript/senior-3.md"]],
  ["v-16ed2bb4","/blog/javascript/senior-4.html","JavaScript专题（四）节流",["/blog/javascript/senior-4","/blog/javascript/senior-4.md"]],
  ["v-18a20453","/blog/javascript/senior-5.html","JavaScript专题（五）深浅拷贝",["/blog/javascript/senior-5","/blog/javascript/senior-5.md"]],
  ["v-1a56dcf2","/blog/javascript/senior-6.html","JavaScript专题（六）数据类型检测的那些事",["/blog/javascript/senior-6","/blog/javascript/senior-6.md"]],
  ["v-1c0bb591","/blog/javascript/senior-7.html","JavaScript专题（七）让人头疼的类型转换",["/blog/javascript/senior-7","/blog/javascript/senior-7.md"]],
  ["v-1dc08e30","/blog/javascript/senior-8.html","JavaScript专题（八）数组扁平化",["/blog/javascript/senior-8","/blog/javascript/senior-8.md"]],
  ["v-1f7566cf","/blog/javascript/senior-9.html","JavaScript专题（九）数组中查找指定元素",["/blog/javascript/senior-9","/blog/javascript/senior-9.md"]],
  ["v-37a9ee82","/blog/js-basics/1.html","JavaScript基础（一）this",["/blog/js-basics/1","/blog/js-basics/1.md"]],
  ["v-847233c0","/blog/js-basics/10.html","JavaScript基础（总结）你真的了解Js吗",["/blog/js-basics/10","/blog/js-basics/10.md"]],
  ["v-81088282","/blog/js-basics/11.html","JavaScript基础（番外）学习正则表达式的简单方法",["/blog/js-basics/11","/blog/js-basics/11.md"]],
  ["v-395ec721","/blog/js-basics/2.html","JavaScript基础（二）从原型到原型链",["/blog/js-basics/2","/blog/js-basics/2.md"]],
  ["v-3b139fc0","/blog/js-basics/3.html","JavaScript基础（三）作用域",["/blog/js-basics/3","/blog/js-basics/3.md"]],
  ["v-3cc8785f","/blog/js-basics/4.html","JavaScript基础（四）执行上下文",["/blog/js-basics/4","/blog/js-basics/4.md"]],
  ["v-3e7d50fe","/blog/js-basics/5.html","JavaScript基础（五）变量对象",["/blog/js-basics/5","/blog/js-basics/5.md"]],
  ["v-4032299d","/blog/js-basics/6.html","JavaScript基础（六）立即调用函数",["/blog/js-basics/6","/blog/js-basics/6.md"]],
  ["v-41e7023c","/blog/js-basics/7.html","JavaScript基础（七）闭包",["/blog/js-basics/7","/blog/js-basics/7.md"]],
  ["v-439bdadb","/blog/js-basics/8.html","JavaScript基础（八）参数传递",["/blog/js-basics/8","/blog/js-basics/8.md"]],
  ["v-4550b37a","/blog/js-basics/9.html","JavaScript基础（九）基本数据类型",["/blog/js-basics/9","/blog/js-basics/9.md"]],
  ["v-35fe696c","/blog/js-sjms/1.html","设计模式（一）单例模式",["/blog/js-sjms/1","/blog/js-sjms/1.md"]],
  ["v-3294b82e","/blog/js-sjms/2.html","设计模式（二）策略模式（待完善）",["/blog/js-sjms/2","/blog/js-sjms/2.md"]],
  ["v-2f2b06f0","/blog/js-sjms/3.html","设计模式（三）代理模式（待完善）",["/blog/js-sjms/3","/blog/js-sjms/3.md"]],
  ["v-2bc155b2","/blog/js-sjms/4.html","设计模式（四）迭代器模式（待完善）",["/blog/js-sjms/4","/blog/js-sjms/4.md"]],
  ["v-2857a474","/blog/js-sjms/5.html","设计模式（五）发布-订阅模式（待完善）",["/blog/js-sjms/5","/blog/js-sjms/5.md"]],
  ["v-24edf336","/blog/js-sjms/6.html","设计模式（六）命令模式（待完善）",["/blog/js-sjms/6","/blog/js-sjms/6.md"]],
  ["v-218441f8","/blog/js-sjms/7.html","",["/blog/js-sjms/7","/blog/js-sjms/7.md"]],
  ["v-73945b6e","/blog/js-special/1.html","JavaScript专题（一）变量与函数提升",["/blog/js-special/1","/blog/js-special/1.md"]],
  ["v-01abd298","/blog/js-special/10.html","JavaScript专题（十）柯里化浅谈",["/blog/js-special/10","/blog/js-special/10.md"]],
  ["v-00deef53","/blog/js-special/11.html","",["/blog/js-special/11","/blog/js-special/11.md"]],
  ["v-7549340d","/blog/js-special/2.html","JavaScript专题（二）数组去重",["/blog/js-special/2","/blog/js-special/2.md"]],
  ["v-76fe0cac","/blog/js-special/3.html","JavaScript专题（三）防抖",["/blog/js-special/3","/blog/js-special/3.md"]],
  ["v-78b2e54b","/blog/js-special/4.html","JavaScript专题（四）节流",["/blog/js-special/4","/blog/js-special/4.md"]],
  ["v-7a67bdea","/blog/js-special/5.html","JavaScript专题（五）深浅拷贝",["/blog/js-special/5","/blog/js-special/5.md"]],
  ["v-7c1c9689","/blog/js-special/6.html","JavaScript专题（六）数据类型检测的那些事",["/blog/js-special/6","/blog/js-special/6.md"]],
  ["v-7dd16f28","/blog/js-special/7.html","JavaScript专题（七）让人头疼的类型转换",["/blog/js-special/7","/blog/js-special/7.md"]],
  ["v-7f8647c7","/blog/js-special/8.html","JavaScript专题（八）数组扁平化",["/blog/js-special/8","/blog/js-special/8.md"]],
  ["v-fd89bf34","/blog/js-special/9.html","JavaScript专题（九）数组中查找指定元素",["/blog/js-special/9","/blog/js-special/9.md"]],
  ["v-60ca09ba","/blog/something-interesting/1-bank.html","【整活系列】我从CSDN排行榜上发现了惊人的秘密，快进来看看吧～",["/blog/something-interesting/1-bank","/blog/something-interesting/1-bank.md"]],
  ["v-4320d58c","/blog/something-interesting/2-csdn-plugin.html","更懂你，更适合你的CSDN 浏览器插件：一起让我们的浏览器变得更有温度！",["/blog/something-interesting/2-csdn-plugin","/blog/something-interesting/2-csdn-plugin.md"]],
  ["v-e9ca187e","/blog/something-interesting/3-html-taobao.html","",["/blog/something-interesting/3-html-taobao","/blog/something-interesting/3-html-taobao.md"]],
  ["v-4bff29e4","/blog/ts/1.html","【Typescript入门】之基本类型在TypeScript中的应用",["/blog/ts/1","/blog/ts/1.md"]],
  ["v-4db40283","/blog/ts/2.html","【Typescript入门】之引用类型在TypeScript中的应用",["/blog/ts/2","/blog/ts/2.md"]],
  ["v-4f68db22","/blog/ts/3.html","【Typescript入门】之函数类型在 TypeScript 中的应用",["/blog/ts/3","/blog/ts/3.md"]],
  ["v-511db3c1","/blog/ts/4.html","【Typescript专题】之类型进阶",["/blog/ts/4","/blog/ts/4.md"]],
  ["v-52d28c60","/blog/ts/5.html","【TypeScript 专题】之类型断言",["/blog/ts/5","/blog/ts/5.md"]],
  ["v-548764ff","/blog/ts/6.html","【TypeScript 专题】之 Ts 中的类",["/blog/ts/6","/blog/ts/6.md"]],
  ["v-a1acd0c8","/blog/ts/","Ts基础入门（一）基本类型在TypeScript中的应用。",["/blog/ts/index.html","/blog/ts/README.md"]],
  ["v-3fb158ba","/blog/typescript/11.html","",["/blog/typescript/11","/blog/typescript/11.md"]],
  ["v-79598f9a","/blog/typescript/5.html","【Typescript专题】之类型进阶",["/blog/typescript/5","/blog/typescript/5.md"]],
  ["v-7b0e6839","/blog/typescript/6.html","【TypeScript 专题】之类型断言",["/blog/typescript/6","/blog/typescript/6.md"]],
  ["v-7cc340d8","/blog/typescript/7.html","【TypeScript专题】之 TypeScript中的类（class）",["/blog/typescript/7","/blog/typescript/7.md"]],
  ["v-09cbe354","/blog/typescript/","Ts基础入门（一）基本类型在TypeScript中的应用。",["/blog/typescript/index.html","/blog/typescript/README.md"]],
  ["v-27151b1d","/blog/typescript/basic-1.html","【Typescript入门】之基本类型在TypeScript中的应用",["/blog/typescript/basic-1","/blog/typescript/basic-1.md"]],
  ["v-28c9f3bc","/blog/typescript/basic-2.html","【Typescript入门】之引用类型在TypeScript中的应用",["/blog/typescript/basic-2","/blog/typescript/basic-2.md"]],
  ["v-2a7ecc5b","/blog/typescript/basic-3.html","【Typescript入门】之函数类型在 TypeScript 中的应用",["/blog/typescript/basic-3","/blog/typescript/basic-3.md"]],
  ["v-2c33a4fa","/blog/typescript/basic-4.html","【Typescript入门】之什么是元组和枚举",["/blog/typescript/basic-4","/blog/typescript/basic-4.md"]],
  ["v-6f5cedf8","/blog/vue/2.html","【Typescript入门】之引用类型在TypeScript中的应用",["/blog/vue/2","/blog/vue/2.md"]],
  ["v-6bf33cba","/blog/vue/3.html","【Typescript入门】之函数类型在 TypeScript 中的应用",["/blog/vue/3","/blog/vue/3.md"]],
  ["v-68898b7c","/blog/vue/4.html","【Typescript专题】之类型进阶",["/blog/vue/4","/blog/vue/4.md"]],
  ["v-651fda3e","/blog/vue/5.html","【TypeScript 专题】之类型断言",["/blog/vue/5","/blog/vue/5.md"]],
  ["v-d94bad28","/blog/vue/dom-diff.html","Virtual DOM",["/blog/vue/dom-diff","/blog/vue/dom-diff.md"]],
  ["v-fec15708","/blog/vue/mvvm.html","MVVM",["/blog/vue/mvvm","/blog/vue/mvvm.md"]],
  ["v-c3b77ff4","/blog/vue/observer.html","数据监听（响应式）",["/blog/vue/observer","/blog/vue/observer.md"]],
  ["v-eddb2738","/blog/vue/v-model.html","",["/blog/vue/v-model","/blog/vue/v-model.md"]],
  ["v-5d844352","/blog/%E5%88%86%E4%BA%AB/share.html","大多数人喜欢的分享或文章，可能是这样子的",["/blog/分享/share.html","/blog/%E5%88%86%E4%BA%AB/share","/blog/分享/share.md","/blog/%E5%88%86%E4%BA%AB/share.md"]],
  ["v-d48b4e62","/blog/%E7%BD%91%E7%BB%9C/1.html","初识浏览器从输入网址开始",["/blog/网络/1.html","/blog/%E7%BD%91%E7%BB%9C/1","/blog/网络/1.md","/blog/%E7%BD%91%E7%BB%9C/1.md"]],
  ["v-3b52d137","/blog/%E7%BD%91%E7%BB%9C/DNS.html","DNS",["/blog/网络/DNS.html","/blog/%E7%BD%91%E7%BB%9C/DNS","/blog/网络/DNS.md","/blog/%E7%BD%91%E7%BB%9C/DNS.md"]],
  ["v-0cfed9aa","/blog/%E7%BD%91%E7%BB%9C/DNS%E8%A7%A3%E6%9E%90.html","",["/blog/网络/DNS解析.html","/blog/%E7%BD%91%E7%BB%9C/DNS%E8%A7%A3%E6%9E%90","/blog/网络/DNS解析.md","/blog/%E7%BD%91%E7%BB%9C/DNS%E8%A7%A3%E6%9E%90.md"]],
  ["v-732f3313","/blog/%E7%BD%91%E7%BB%9C/HTTP%E6%8A%A5%E6%96%87.html","",["/blog/网络/HTTP报文.html","/blog/%E7%BD%91%E7%BB%9C/HTTP%E6%8A%A5%E6%96%87","/blog/网络/HTTP报文.md","/blog/%E7%BD%91%E7%BB%9C/HTTP%E6%8A%A5%E6%96%87.md"]],
  ["v-e7942e42","/blog/%E7%BD%91%E7%BB%9C/TCP-IP.html","",["/blog/网络/TCP-IP.html","/blog/%E7%BD%91%E7%BB%9C/TCP-IP","/blog/网络/TCP-IP.md","/blog/%E7%BD%91%E7%BB%9C/TCP-IP.md"]],
  ["v-443a832e","/blog/%E7%BD%91%E7%BB%9C/%E5%90%8D%E8%AF%8D-%E9%80%9A%E7%AF%87%E6%80%9D%E8%80%83.html","",["/blog/网络/名词-通篇思考.html","/blog/%E7%BD%91%E7%BB%9C/%E5%90%8D%E8%AF%8D-%E9%80%9A%E7%AF%87%E6%80%9D%E8%80%83","/blog/网络/名词-通篇思考.md","/blog/%E7%BD%91%E7%BB%9C/%E5%90%8D%E8%AF%8D-%E9%80%9A%E7%AF%87%E6%80%9D%E8%80%83.md"]],
  ["v-2a3f9546","/blog/%E7%BD%91%E7%BB%9C/%E5%9B%9B%E5%B1%82%E5%92%8C%E4%B8%83%E5%B1%82.html","",["/blog/网络/四层和七层.html","/blog/%E7%BD%91%E7%BB%9C/%E5%9B%9B%E5%B1%82%E5%92%8C%E4%B8%83%E5%B1%82","/blog/网络/四层和七层.md","/blog/%E7%BD%91%E7%BB%9C/%E5%9B%9B%E5%B1%82%E5%92%8C%E4%B8%83%E5%B1%82.md"]],
  ["v-26df26d8","/blog/%E7%BD%91%E7%BB%9C/%E8%BE%93%E5%85%A5%E7%BD%91%E5%9D%80%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88.html","",["/blog/网络/输入网址发生了什么.html","/blog/%E7%BD%91%E7%BB%9C/%E8%BE%93%E5%85%A5%E7%BD%91%E5%9D%80%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88","/blog/网络/输入网址发生了什么.md","/blog/%E7%BD%91%E7%BB%9C/%E8%BE%93%E5%85%A5%E7%BD%91%E5%9D%80%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88.md"]],
  ["v-109f6385","/css/code/1.html","选择器的权重与优先级有什么关系？",["/css/code/1","/css/code/1.md"]],
  ["v-12543c24","/css/code/2.html","简述 CSS 盒模型",["/css/code/2","/css/code/2.md"]],
  ["v-140914c3","/css/code/3.html","浅谈position",["/css/code/3","/css/code/3.md"]],
  ["v-15bded62","/css/code/4.html","CSS的上下文之BFC",["/css/code/4","/css/code/4.md"]],
  ["v-1772c601","/css/code/5.html","CSS的上下文之层叠上下文",["/css/code/5","/css/code/5.md"]],
  ["v-19279ea0","/css/code/6.html","CSS进阶：弹性盒子（flex）及其基本属性",["/css/code/6","/css/code/6.md"]],
  ["v-1adc773f","/css/code/7.html","CSS 进阶：网格布局（Grid）及其基本属性",["/css/code/7","/css/code/7.md"]],
  ["v-6604d10b","/css/code/code-1.html","代码简洁之道",["/css/code/code-1","/css/code/code-1.md"]],
  ["v-3ca42350","/algorithm/array/1431-%E6%8B%A5%E6%9C%89%E6%9C%80%E5%A4%9A%E7%B3%96%E6%9E%9C%E7%9A%84%E5%AD%A9%E5%AD%90.html","1431. 拥有最多糖果的孩子",["/algorithm/array/1431-拥有最多糖果的孩子.html","/algorithm/array/1431-%E6%8B%A5%E6%9C%89%E6%9C%80%E5%A4%9A%E7%B3%96%E6%9E%9C%E7%9A%84%E5%AD%A9%E5%AD%90","/algorithm/array/1431-拥有最多糖果的孩子.md","/algorithm/array/1431-%E6%8B%A5%E6%9C%89%E6%9C%80%E5%A4%9A%E7%B3%96%E6%9E%9C%E7%9A%84%E5%AD%A9%E5%AD%90.md"]],
  ["v-78e8f05a","/algorithm/array/1470-%E9%87%8D%E6%96%B0%E6%8E%92%E5%88%97%E6%95%B0%E7%BB%84.html","重新排列数组",["/algorithm/array/1470-重新排列数组.html","/algorithm/array/1470-%E9%87%8D%E6%96%B0%E6%8E%92%E5%88%97%E6%95%B0%E7%BB%84","/algorithm/array/1470-重新排列数组.md","/algorithm/array/1470-%E9%87%8D%E6%96%B0%E6%8E%92%E5%88%97%E6%95%B0%E7%BB%84.md"]],
  ["v-677b96f0","/algorithm/array/1480-%E4%B8%80%E7%BB%B4%E6%95%B0%E7%BB%84%E7%9A%84%E5%8A%A8%E6%80%81%E5%92%8C.html","1480. 一维数组的动态和",["/algorithm/array/1480-一维数组的动态和.html","/algorithm/array/1480-%E4%B8%80%E7%BB%B4%E6%95%B0%E7%BB%84%E7%9A%84%E5%8A%A8%E6%80%81%E5%92%8C","/algorithm/array/1480-一维数组的动态和.md","/algorithm/array/1480-%E4%B8%80%E7%BB%B4%E6%95%B0%E7%BB%84%E7%9A%84%E5%8A%A8%E6%80%81%E5%92%8C.md"]],
  ["v-5cadf8d8","/algorithm/array/154.html","剑指 Offer 11. 旋转数组的最小数字",["/algorithm/array/154","/algorithm/array/154.md"]],
  ["v-507e9746","/algorithm/array/1662-%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E7%BB%84%E6%98%AF%E5%90%A6%E7%9B%B8%E7%AD%89.html","1662.检查两个字符串数组是否相等",["/algorithm/array/1662-检查两个字符串数组是否相等.html","/algorithm/array/1662-%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E7%BB%84%E6%98%AF%E5%90%A6%E7%9B%B8%E7%AD%89","/algorithm/array/1662-检查两个字符串数组是否相等.md","/algorithm/array/1662-%E6%A3%80%E6%9F%A5%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E7%BB%84%E6%98%AF%E5%90%A6%E7%9B%B8%E7%AD%89.md"]],
  ["v-2f04ce9b","/algorithm/array/1672-%E6%9C%80%E5%AF%8C%E6%9C%89%E5%AE%A2%E6%88%B7%E7%9A%84%E8%B5%84%E4%BA%A7%E6%80%BB%E9%87%8F.html","1672. 最富有客户的资产总量",["/algorithm/array/1672-最富有客户的资产总量.html","/algorithm/array/1672-%E6%9C%80%E5%AF%8C%E6%9C%89%E5%AE%A2%E6%88%B7%E7%9A%84%E8%B5%84%E4%BA%A7%E6%80%BB%E9%87%8F","/algorithm/array/1672-最富有客户的资产总量.md","/algorithm/array/1672-%E6%9C%80%E5%AF%8C%E6%9C%89%E5%AE%A2%E6%88%B7%E7%9A%84%E8%B5%84%E4%BA%A7%E6%80%BB%E9%87%8F.md"]],
  ["v-69c99e92","/algorithm/array/1678-%E8%AE%BE%E8%AE%A1Goal%E8%A7%A3%E6%9E%90%E5%99%A8.html","1678. 设计 Goal 解析器",["/algorithm/array/1678-设计Goal解析器.html","/algorithm/array/1678-%E8%AE%BE%E8%AE%A1Goal%E8%A7%A3%E6%9E%90%E5%99%A8","/algorithm/array/1678-设计Goal解析器.md","/algorithm/array/1678-%E8%AE%BE%E8%AE%A1Goal%E8%A7%A3%E6%9E%90%E5%99%A8.md"]],
  ["v-492173be","/algorithm/array/1684.%20%E7%BB%9F%E8%AE%A1%E4%B8%80%E8%87%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%95%B0%E7%9B%AE.html","1684. 统计一致字符串的数目",["/algorithm/array/1684. 统计一致字符串的数目.html","/algorithm/array/1684.%20%E7%BB%9F%E8%AE%A1%E4%B8%80%E8%87%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%95%B0%E7%9B%AE","/algorithm/array/1684. 统计一致字符串的数目.md","/algorithm/array/1684.%20%E7%BB%9F%E8%AE%A1%E4%B8%80%E8%87%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%95%B0%E7%9B%AE.md"]],
  ["v-03e8e5b6","/algorithm/array/189.html","旋转数组（easy）",["/algorithm/array/189","/algorithm/array/189.md"]],
  ["v-2d42544f","/algorithm/array/724.html","寻找数组的中心索引（easy）",["/algorithm/array/724","/algorithm/array/724.md"]],
  ["v-397448e2","/algorithm/array/","数组",["/algorithm/array/index.html","/algorithm/array/README.md"]],
  ["v-de180180","/algorithm/dichotomy/1-1.html","1.二分查找（easy）",["/algorithm/dichotomy/1-1","/algorithm/dichotomy/1-1.md"]],
  ["v-daae5042","/algorithm/dichotomy/1-2.html","2.搜索插入的位置（easy）",["/algorithm/dichotomy/1-2","/algorithm/dichotomy/1-2.md"]],
  ["v-d7449f04","/algorithm/dichotomy/1-3.html","3.x的平方根（easy）",["/algorithm/dichotomy/1-3","/algorithm/dichotomy/1-3.md"]],
  ["v-d3daedc6","/algorithm/dichotomy/1-4.html","4.猜数字大小（easy）",["/algorithm/dichotomy/1-4","/algorithm/dichotomy/1-4.md"]],
  ["v-d0713c88","/algorithm/dichotomy/1-5.html","5.搜索旋转排序数组（middle）",["/algorithm/dichotomy/1-5","/algorithm/dichotomy/1-5.md"]],
  ["v-0e55a7c2","/algorithm/dichotomy/2-1.html","1.第一个错误的版本（easy）",["/algorithm/dichotomy/2-1","/algorithm/dichotomy/2-1.md"]],
  ["v-0aebf684","/algorithm/dichotomy/2-2.html","2.寻找峰值（middle）",["/algorithm/dichotomy/2-2","/algorithm/dichotomy/2-2.md"]],
  ["v-07824546","/algorithm/dichotomy/2-3.html","3.寻找旋转排序数组中的最小值（middle）",["/algorithm/dichotomy/2-3","/algorithm/dichotomy/2-3.md"]],
  ["v-04189408","/algorithm/dichotomy/2-4.html","4.输入有序数组",["/algorithm/dichotomy/2-4","/algorithm/dichotomy/2-4.md"]],
  ["v-00aee2ca","/algorithm/dichotomy/2-5.html","模版 II - 寻找旋转排序数组中的最小值 II（hard）",["/algorithm/dichotomy/2-5","/algorithm/dichotomy/2-5.md"]],
  ["v-60b658fe","/algorithm/dichotomy/3-1.html","1.在排序数组中查找元素的第一个和最后一个位置（middle）",["/algorithm/dichotomy/3-1","/algorithm/dichotomy/3-1.md"]],
  ["v-626b319d","/algorithm/dichotomy/3-2.html","2.找到 K 个最接近的元素（middle）",["/algorithm/dichotomy/3-2","/algorithm/dichotomy/3-2.md"]],
  ["v-6ed0f446","/algorithm/dichotomy/4-1.html","pow(x, n)",["/algorithm/dichotomy/4-1","/algorithm/dichotomy/4-1.md"]],
  ["v-6b674308","/algorithm/dichotomy/4-2.html","有效的完全平方数",["/algorithm/dichotomy/4-2","/algorithm/dichotomy/4-2.md"]],
  ["v-67fd91ca","/algorithm/dichotomy/4-3.html","寻找比目标字母大的最小字母",["/algorithm/dichotomy/4-3","/algorithm/dichotomy/4-3.md"]],
  ["v-6493e08c","/algorithm/dichotomy/4-4.html","统计有序矩阵中的负数",["/algorithm/dichotomy/4-4","/algorithm/dichotomy/4-4.md"]],
  ["v-612a2f4e","/algorithm/dichotomy/4-5.html","矩阵中战斗力最弱的 K 行",["/algorithm/dichotomy/4-5","/algorithm/dichotomy/4-5.md"]],
  ["v-77843a48","/algorithm/dichotomy/","二分法",["/algorithm/dichotomy/index.html","/algorithm/dichotomy/README.md"]],
  ["v-393c2728","/algorithm/hash/","哈希表",["/algorithm/hash/index.html","/algorithm/hash/README.md"]],
  ["v-707c1921","/algorithm/linked/1-1.html","设计链表",["/algorithm/linked/1-1","/algorithm/linked/1-1.md"]],
  ["v-7230f1c0","/algorithm/linked/1-2.html","环形链表",["/algorithm/linked/1-2","/algorithm/linked/1-2.md"]],
  ["v-73e5ca5f","/algorithm/linked/1-3.html","环形链表II",["/algorithm/linked/1-3","/algorithm/linked/1-3.md"]],
  ["v-759aa2fe","/algorithm/linked/1-4.html","",["/algorithm/linked/1-4","/algorithm/linked/1-4.md"]],
  ["v-ecc544c6","/algorithm/linked/21.html","",["/algorithm/linked/21","/algorithm/linked/21.md"]],
  ["v-e5f1e24a","/algorithm/linked/23.html","23. 合并K个升序链表",["/algorithm/linked/23","/algorithm/linked/23.md"]],
  ["v-6e90cc7c","/algorithm/linked/82.html","82. 删除排序链表中的重复元素 II",["/algorithm/linked/82","/algorithm/linked/82.md"]],
  ["v-60ea0784","/algorithm/linked/86.html","86. 分隔链表",["/algorithm/linked/86","/algorithm/linked/86.md"]],
  ["v-886b2486","/algorithm/linked/","链表",["/algorithm/linked/index.html","/algorithm/linked/README.md"]],
  ["v-ba8cac40","/algorithm/more-array/240.html","240.二维数组的查找（medium）",["/algorithm/more-array/240","/algorithm/more-array/240.md"]],
  ["v-6d8c15c3","/algorithm/more-array/56.html","合并区间",["/algorithm/more-array/56","/algorithm/more-array/56.md"]],
  ["v-6e054375","/algorithm/more-array/","多维数组",["/algorithm/more-array/index.html","/algorithm/more-array/README.md"]],
  ["v-23f0091c","/algorithm/offer/3.html","剑指 Offer 03. 数组中重复的数字",["/algorithm/offer/3","/algorithm/offer/3.md"]],
  ["v-095166fc","/algorithm/tree/1-1.html","",["/algorithm/tree/1-1","/algorithm/tree/1-1.md"]],
  ["v-39ecc698","/algorithm/tree/","树",["/algorithm/tree/index.html","/algorithm/tree/README.md"]],
  ["v-76f66267","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/33.html","模版 I - 搜索旋转排序数组（middle）",["/algorithm/动态规划/33.html","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/33","/algorithm/动态规划/33.md","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/33.md"]],
  ["v-48264617","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/873.html","",["/algorithm/动态规划/873.html","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/873","/algorithm/动态规划/873.md","/algorithm/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/873.md"]],
  ["v-1c71c498","/interview/www.zhihu.com/question/330654696/js.html","",["/interview/www.zhihu.com/question/330654696/js","/interview/www.zhihu.com/question/330654696/js.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
