import axios from 'axios'
export default {
  state: {
    restoData: [],
    restoLoading: false
  },
  mutations: {
    setResto(state, payload) {
      state.restoData = payload.data
    }
  },
  actions: {
    restoData(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}resto/${payload}`)
          .then(res => {
            context.state.restoLoading = true
            context.commit('setResto', res.data)
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getResto(state) {
      return state.restoData
    },
    getLoadingResto(state) {
      return state.restoLoading
    }
  }
}
