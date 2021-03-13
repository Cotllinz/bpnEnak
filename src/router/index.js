import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bppSearch from '../views/bppSearch.vue'

import fooDetails from '../views/foodDetails.vue'
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
