function friendlyDate(datsStr) {
  let dateObj = typeof datsStr === 'object' ? datsStr : new Date(datsStr)
  let time = dateObj.getTime()
  let now = Date.now()
  let space = now - time
  let str = ''

  switch (true) {
    case space < 60000:
      str = '刚刚'
      break
    case space < 1000*3600:
      str = Math.floor(space/60000) + '分钟前'
      break
    case space < 1000*3600*24:
      str = Math.floor(space/(1000*3600)) + '小时前'
      break
    default:
      str = Math.floor(space/(1000*3600*24)) + '天前'
  }
  return str
}

// 开发插件 https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6

const Util = {
  install: function(Vue, options){
    Vue.prototype.$friendlyDate = friendlyDate
  }
}

export default Util