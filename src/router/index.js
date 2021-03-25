import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bppSearch from '../views/bppSearch.vue'
import store from '../store'
import fooDetails from '../views/foodDetails.vue'
import login from '../views/auth/login.vue'
import signup from '../views/auth/signup.vue'
import reset from '../views/auth/reset.vue'
import forgot from '../views/auth/forgot.vue'
import about from '../views/about.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Bppsearch',
    name: 'bppSearch',
    component: bppSearch
  },
  {
    path: '/restoDetails/:idResto',
    name: 'restoDetails',
    component: () => import('../views/restoDetails.vue')
  },
  {
    path: '/fooDetails/:idFood',
    name: 'fooDetails',
    component: fooDetails
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
    meta: { requiresVisitor: true }
  },
  {
    path: '/reset/:key',
    name: 'reset',
    component: reset,
    meta: { requiresVisitor: true }
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: forgot,
    meta: { requiresVisitor: true }
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: store.getters.getPathHistory
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
