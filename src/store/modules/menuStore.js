import axios from 'axios'
export default {
  state: {
    menuData: [],
    menuList: [],
    loadingMenu: false
  },
  mutations: {
    setMenu(state, payload) {
      state.menuData = payload.data
    },
    setMenuList(state, payload) {
      state.menuList = payload.data
      console.log(state.menuList)
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
    }
  }
}
