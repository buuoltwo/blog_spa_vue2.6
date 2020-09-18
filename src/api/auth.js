import request from '../helpers/request2'

const URL = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  GET_INFO: '/auth'
}

const Auth = {
  register({username,password}) {
    return request(URL.REGISTER, 'POST', {username, password})
  },
  register({username,password}) {
    return request(URL.LOGIN, 'POST', {username, password})
  },
  logout() {
    return request(URL.LOGOUT)
  },
  getInfo() {
    return request(URL.GET_INFO)
  },
}

export default Auth