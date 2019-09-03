//删除 数据为"" null undefined 的key
export function filterObj(val) {
  if (getValueType(val) === 'object') {
    for (let key in val) {
      if (!val[key] && val[key] !== 0) {
        delete val[key];
      }
    }
  }
  return val;
}
//获取数据类型 （小写）
export function getValueType(val) {
  return Object.prototype.toString
    .call(val)
    .slice(8, -1)
    .toLowerCase();
}
//合并多个函数
// 将 fn(gn(123)) -> Kn = compose(fn,gn); kn(123)
export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
//数据深拷贝
export function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) return obj;
  let newObj = new obj.constructor();
  for (let key in Object.getOwnPropertyDescriptors(obj)) {
    newObj[key] = deepClone(obj[key]);
  }
  return newObj;
}
