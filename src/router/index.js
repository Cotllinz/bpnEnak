import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import bppSearch from '../views/bppSearch.vue'
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
