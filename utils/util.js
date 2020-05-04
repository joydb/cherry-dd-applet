const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
//判断字符串是否空白
const isBlank = (str) => {
  if (str === undefined || str === null) return true;
  if (typeof str === 'number') return false;
  return str.length === 0;
}
//判断是否手机号
const isPhone = (str) => {
  return /^1([3456789])\d{9}$/.test(str);
}

// url 拼接
const encodeSearchParams = (obj) => {
  let params = [];
  Object.keys(obj).forEach((key) => {
    let value = obj[key]
    if (value === undefined) {
      value = ''
    }
    // 对于需要编码的文本（比如说中文）我们要进行编码
    params.push([key, encodeURIComponent(value)].join('='))
  })
  return params.join('&');
}

module.exports = {
  formatTime: formatTime,
  isBlank: isBlank,
  isPhone: isPhone,
  encodeSearchParams: encodeSearchParams,
}