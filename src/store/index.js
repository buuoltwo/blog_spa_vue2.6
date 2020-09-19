import Vue from 'vue'
import Vuex from 'vuex'
import AuthStore from './modules/AuthStore'
import BlogStore from './modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    AuthStore,
    BlogStore
  }
})
