//model
import axios from 'axios'
import { Message } from 'element-ui'
import { options } from 'less'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'
axios.defaults.withCredentials = true

const request = (url, type='GET', data={}) => {
  //每个请求都对应一个闭包为好。配置放入promise中封装

  return new Promise( (resolve, reject) => {
  //GET url=...?key1=val1&key2=val2&..
  //POST PUT PATCH url=...
  //http://axios-js.com/zh-cn/docs/index.html#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE
  //axios()传入对象，是使用axios(configs)
    let option = {
      url,
      method: type
    }
    if(type.toLowerCase() ==='get') {
      option.params = data
    }else if(type.toLowerCase() === 'post') {
      option.data = data
    }
    axios(option).then(res => console.log(res))
  })
}

export default request