import Auth from '../../api/auth'

const state = {
  user:null,
  isLogin: false
}
const getters = {
  user: state => state.user,
  isLogin: state => state.isLogin
}

const mutations = {
  setUser(state, payload) {
    state.user = payload.user
  },
  setLogin(state, payload) {
    state.isLogin = payload.isLogin
  }
}

const actions = {
  login({commit}, {username, password}) {
    return Auth.login({username,password})
      .then( res => {
        console.log(res)
        commit("setUser",{user: res.data})
        commit("setLogin",{isLogin: true})
      })
  },
  async register({commit}, {username, password}) {
    let res = await Auth.register({username,password})
    console.log(res)
    commit("setUser",{user: res.data})
    commit("setLogin",{isLogin: true})
    return res.data
  },
  async logout({commit}){
    // let res = await Auth.logout()
    // console.log(res)
    await Auth.logout()
    commit('setUser', {user: null})
    commit('setLogin', {isLogin: false})
  },
  async checkLogin({commit, state}){
    if(state.isLogin) return true
    // console.log("excuted??")
    let res = await Auth.getInfo()
    // console.log("excuted??")
    // console.log(res.isLogin)
    commit('setLogin', { isLogin: res.isLogin})
    if(!res.isLogin) return false
    commit('setUser', { user: res.data })
    // console.log("excuted??")
    return true
      // if(state.isLogin) return true
      // return false
  }
}

const AuthStore = {
  state,
  getters,
  mutations,
  actions
}
export default AuthStore
//在page/login/template.js测试login 发现store没有变化，跳转header没有改变