<!--
 * @Author: busyzz
 * @Date: 2019-09-03 15:29:10
 * @Description:
 -->

## Install

```shell
yarn add busyzz-lib
# or
npm install busyzz-lib --save
```

## Modules 所有模块

## （math,string,fns）

## math

用于 number 计算，处理浮点数运算精度问题

```js
import { math } from 'busyzz-lib';
let res = math.Multiply(20, 30);
```

#### Multiply 计算多个 number 的乘积

```js
let res = math.Multiply(1.1, 2.2, 3.3);
res === 5, 5;
```

#### Divide 除法

```js
let res = math.Divide(10, 2, 5);
res === 1;
```

#### Add 加法

```js
let res = math.Divide(1, 2, 1.2);
res === 4.2;
```

#### Subtr 减法

```js
let res = math.Divide(5.4, 2, 2);
res === 1.4;
```

#### RoundNum 四舍五入 保留 N 位小数

```js
let res = math.RoundNum(12.887, 2);
res === 12.89;
```

#### RandomNum 获取大等于 min 小等于 max 的随机整数

```js
math.RandomNum(min, max);
let res = math.RandomNum(2, 10);
res === 7;
```

## string

用于常用的字符串处理

```js
import { string } from 'busyzz-lib';
```

#### thousandNum 数字转换为金额

```js
string.thousandNum(num:number,sign?:string = ',')
let res = string.thousandNum(212014)
res === '212,014'
```

#### getParams 获取 url 参数

```js
string.getParams(search:string,name:string)
let res = string.getParams('?id=2','id')
res === '2'
```

#### limitFloat 限制输入的为 len 的小数

##### 在表单 getValueFromEvent 里面使用 getValueFromEvent:e=>limitFloat(e,2)

##### e 为表单事件对象（下同）

```js
string.limitFloat(target:number|string|e,len:number)
let res = string.limitFloat(1.234,2);
res === 1.23
```

#### formatNumber 限制输入为数字

##### 在表单 getValueFromEvent 里面使用 getValueFromEvent:e=>formatNumber(e)

```js
string.formatNumber(target:number|string|e)
let res = string.limitFloat('1.');
res === '1';
```

## fns

常用的工具函数

#### filterObj 删除 数据为"" null undefined 的 key

```js
fns.filterObj(obj:object);
let res = fns.filterObj({name:'',age:23})
res === {age:23}
```

#### getValueType 获取数据类型 （小写）

```js
fns.getValueType(value:any);
let res = fns.getValueType('busyzz')
res === 'string'
let res = fns.getValueType(['busyzz'])
res === 'array'
let res = fns.getValueType({name:'busyzz',age:23})
res === 'object'
```

#### compose 合并多个函数

##### 将 fn(gn(123)) -> Kn = compose(fn,gn); kn(123)

```js
解决函数嵌套问题
react 里面使用案列
withRouter(HOC(Component))
fns.compose(withRouter,HOC)(Component)
```

#### deepClone 数据深拷贝

```js
fns.deepClone(value:any)
```
