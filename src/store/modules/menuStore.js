import axios from 'axios'
export default {
  state: {
    menuData: [],
    menuList: [],
    loadingMenu: false,
    loadingMenuList: false,
    limitList: 6,
    sumDataListMenu: 0,
    totalDataListMenu: 0
  },
  mutations: {
    setMenu(state, payload) {
      state.menuData = payload.data
    },
    setMenuList(state, payload) {
      state.menuList = payload.data
      state.sumDataListMenu = payload.data.length
      state.totalDataListMenu = payload.data.length - 6
    },
    setLimitListMenu(state) {
      if (state.totalDataListMenu > state.limitList) {
        state.limitList += 3
        state.totalDataListMenu -= 3
      } else if (state.totalDataListMenu <= 3) {
        state.limitList += state.totalDataListMenu
        state.totalDataListMenu -= state.totalDataListMenu
      }
    },
    restartLimitListMenu(state) {
      state.limitList = 6
    }
  },
  actions: {
    menuData(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}menu/${payload}`)
          .then(res => {
            context.state.loadingMenu = true
            context.commit('setMenu', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    menuList(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}menu/resto/${payload}`)
          .then(res => {
            context.state.loadingMenuList = true
            context.commit('setMenuList', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getMenu(state) {
      return state.menuData
    },
    getLoadingMenu(state) {
      return state.loadingMenu
    },
    getMenuList(state) {
      return state.menuList
    },
    getLoadingMenuList(state) {
      return state.loadingMenuList
    },
    getLimitListMenu(state) {
      return state.limitList
    },
    getTotalDataListMenu(state) {
      return state.totalDataListMenu
    },
    getSumDataListMenu(state) {
      return state.sumDataListMenu
    }
  }
}
