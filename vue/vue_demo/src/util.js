/*
  概要：是否基础数据类型
  参数：[value|任意值]
  返回值：[Boolean]
*/
export function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/*
  概要：判断是否是object类型
  参数：[obj|Object]
  返回值：[Boolean]
*/
export function isObject (obj) {
  return obj !== null && typeof obj === 'object'; 
}

/*
  概要：等同于Object.prototype.hasOwnProperty
  参数：[obj|Object, key|string]
  返回值：[Boolean]
*/
export function isOwn (obj, key) {
  return obj.prototype.hasOwnProperty(key);
}

/*
  概要：非undefined,null
  参数：[obj|Object]
  返回值：[Boolean]
*/
export function isDef (obj) {
  return obj !== undefined && obj !== null;
}

/*
  概要：aa-bb-cc -> aaBbCc
  参数：[str|String]
  返回值：[String]
*/
export function Camerlize (str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

/*
  概要：返回obj[key]对象中的tag值
  参数：[obj|Object, key|string]
  返回值：[asset|key的value]
*/
export function resolveAsset (obj, key, tag='') {
  let asset;
  return asset;
}


