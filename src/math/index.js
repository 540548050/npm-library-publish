//乘法
export function Multiply(...args) {
  if (args.length < 2) return args[0];
  try {
    let m = 0;
    let items = [];
    for (let i = 0; i < args.length; i++) {
      let item = args[i].toString();
      item.split('.')[1] && (m += item.split('.')[1].length);
      items.push(item.replace('.', ''));
    }
    return items.reduce((prev, curr) => prev * curr) / 10 ** m;
  } catch (e) {}
}
//除法
export function Divide(...args) {
  if (args.length < 2) return args[0];
  return args.reduce((prev, curr) => {
    let p = `${prev}`;
    let c = `${curr}`;
    let r1 = p.split('.')[1] ? p.split('.')[1].length : 0;
    let r2 = c.split('.')[1] ? c.split('.')[1].length : 0;
    let m = p.replace('.', '') / c.replace('.', '');
    let n = r2 - r1;
    return Multiply(m, 10 ** n);
  });
}
//加法
export function Add(...args) {
  if (args.length < 2) return args[0];

  try {
    let decimals = [];
    let items = [];
    for (let i = 0; i < args.length; i++) {
      if (typeof Number(args[i]) === 'number') {
        items.push(args[i]);
        let decimal = args[i].toString().split('.')[1];
        decimals.push(decimal ? decimal.length : 0);
      }
    }
    let m = 10 ** Math.max(...decimals);
    return (
      items.reduce((prev, curr) => Multiply(prev, m) + Multiply(curr, m)) / m
    );
  } catch (e) {}
}
//减法
export function Subtr(...args) {
  if (args.length < 2) return args[0];
  return args.reduce((prev, curr) => {
    let p = `${prev}`;
    let c = `${curr}`;
    let r1 = p.split('.')[1] ? p.split('.')[1].length : 0;
    let r2 = c.split('.')[1] ? c.split('.')[1].length : 0;
    let decimal = Math.max(r2, r1);
    let m = Multiply(p, 10 ** decimal) - Multiply(c, 10 ** decimal);
    return Divide(m, 10 ** decimal);
  });
}
//四舍五入  保留N位小数
export const RoundNum = (num, decimal) => {
  let num_1 = Multiply(num, 10 ** decimal);
  let num_2 = Divide(Math.round(num_1), 10 ** decimal);
  return num_2;
};
//获取大等于min 小等于max 的随机数
export const RandomNum = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
