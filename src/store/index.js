import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import homeStore from './modules/homeStore'
import searchStore from './modules/searchStore'
import menuStore from './modules/menuStore'
import restoStore from './modules/restoStore'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { homeStore, searchStore, menuStore, restoStore },
  plugins: [
    createPersistedState({
      paths: ['searchStore.searchParams']
    })
  ]
})
