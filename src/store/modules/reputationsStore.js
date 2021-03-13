import axios from 'axios'
export default {
  state: {
    reputations: [],
    reputationsLoading: false
  },
  mutations: {
    setReputations(state, payload) {
      state.reputations = payload.data
    }
  },
  actions: {
    reputation(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}reputation/${payload}`)
          .then(res => {
            context.commit('setReputations', res.data)
            context.state.reputationsLoading = true
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getReputations(state) {
      return state.reputations
    },
    getLoadingReputations(state) {
      return state.reputationsLoading
    }
  }
}
