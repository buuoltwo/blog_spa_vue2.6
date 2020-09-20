import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '../api/auth'
import AuthStore from './modules/AuthStore'
// import BlogStore from './modules/blog'

Vue.use(Vuex)

let store = new Vuex.Store({

  modules: {
    AuthStore,
    // BlogStore
  }
})
// window.store = store
export default store