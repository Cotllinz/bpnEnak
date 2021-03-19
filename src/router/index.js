import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bppSearch from '../views/bppSearch.vue'

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
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/reset/:key',
    name: 'reset',
    component: reset
  },
  {
    path: '/forgot',
    name: 'forgot',
    component: forgot
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

export default router
