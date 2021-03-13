import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bppSearch from '../views/bppSearch.vue'
import restoDetails from '../views/restoDetails.vue'
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
    component: restoDetails
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
