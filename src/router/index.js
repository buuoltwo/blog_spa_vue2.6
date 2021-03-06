import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store/index"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../pages/register/template.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/login/template.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../pages/create/create.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/detail/:blogId',
    name: 'detail',
    component: () => import('../pages/detail/detail.vue'),
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../pages/my/my.vue'),
    meta: { requiresAuth: true }
  },
  {
    path:'/fatal',
    name:'fatal',
    component: () => import('../pages/fatal.vue'),
  },
  {
    path:'/user/:id',
    name:'user',
    component: () => import('../pages/User/user.vue'),
  },
  {
    path:'/edit/:blogId',
    name:'edit',
    component: () => import('../pages/Edit/edit.vue'),
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // console.log(store.state.isLogin)
    store.dispatch("checkLogin").then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  }
  else {
    next() // 确保一定要调用 next()
  }
})

export default router
