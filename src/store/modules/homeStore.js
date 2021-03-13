import axios from 'axios'
export default {
  state: {
    bestResto: [],
    newMenu: [],
    turnOn: false
  },
  mutations: {
    setBestResto(state, payload) {
      state.bestResto = payload.data
    },
    setNewMenu(state, payload) {
      state.newMenu = payload.data
    }
  },
  actions: {
    BestResto(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}resto/top`)
          .then(res => {
            context.commit('setBestResto', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    newMenus(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}menu/new`)
          .then(res => {
            context.state.turnOn = true
            context.commit('setNewMenu', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getBestResto(state) {
      return state.bestResto
    },
    getNewMenu(state) {
      return state.newMenu
    },
    turnOnSlider(state) {
      return state.turnOn
    }
  }
}
