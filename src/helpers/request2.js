//model
import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://blog-server.hunger-valley.com'

const request = (url, type='GET', data={}) => {
  return new Promise( (resolve, reject) => {
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
    //-----------
    if(localStorage.token) {
      axios.defaults.headers.common['Authorization']  = localStorage.token
    }
    axios(option).then(res => {
      // console.log(res.data)
      //---------
      if(res.data.status === 'ok') {
        if(res.data.token) {
          localStorage.token = res.data.token
        }
        resolve(res.data)
      }else{
        console.log("这里是request2..")
        Message.error(res.data.msg)
        reject(res.data)
      }
    })
  })
}

export default request