import Vue from 'vue'
import App from './App2.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/element-#009900/index.css';
import Util from './helpers/util'

// import './helpers/request.test';
// import './api/blog.test';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Util);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
