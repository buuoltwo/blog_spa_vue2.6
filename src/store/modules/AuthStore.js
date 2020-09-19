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
    console.log(">>>>")
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