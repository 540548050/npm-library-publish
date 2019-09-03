//数字转化为金额 212014 -> 212,014
export const thousandNum = (num, sign = ',') =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sign);
//获取url参数
// string: ?id=2ae05244cb15409f811711f01fe0beea name:id
// return 2ae05244cb15409f811711f01fe0beea
export function getParams(string, name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  let result = string.substring(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}
//限制输入的为len的小数 在表单getValueFromEvent里面使用
//getValueFromEvent:e=>limitFloat(e,2)
export function limitFloat(e, len) {
  let obj = {};
  if (typeof e === 'number' || typeof e === 'string') {
    obj.value = e + '';
  } else {
    obj = e.target;
  }
  if (obj.value !== '' && obj.value.substr(0, 1) === '.') {
    // obj.value = '';
    return '';
  }
  obj.value = obj.value.replace(/^0*(0\.|[1-9])/, '$1'); //解决 粘贴不生效
  obj.value = obj.value.replace(/[^\d.]/g, ''); //清除“数字”和“.”以外的字符
  obj.value = obj.value.replace(/\.{2,}/g, '.'); //只保留第一个. 清除多余的
  obj.value = obj.value
    .replace('.', '$#$')
    .replace(/\./g, '')
    .replace('$#$', '.');
  len = len ? len : 2;
  let par = '';
  for (let i = 0; i < len; i++) {
    par += '\\d';
  }
  let reg = new RegExp(`^(\\-)*(\\d+)\\.(${par}).*$`);
  obj.value = obj.value.replace(reg, '$1$2.$3'); //只能输入两个小数
  if (obj.value.indexOf('.') < 0 && obj.value !== '') {
    //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
    if (obj.value.substr(0, 1) === '0' && obj.value.length === 2) {
      obj.value = obj.value.substr(1, obj.value.length);
      return obj.value;
    }
  }
  return obj.value;
}
/**
 * formatNumber 用于表单中纯数字的输入格式化
 */
export function formatNumber(e) {
  let obj = {};
  if (typeof e === 'number' || typeof e === 'string') {
    obj.value = e + '';
  } else {
    obj = e.target;
  }
  const value = obj.value;
  return value.replace(/[^0-9]/gi, '');
}
