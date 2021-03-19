import axios from 'axios'
export default {
  state: {
    foods: [],
    searchParams: {
      searchName: '',
      price: '',
      district: '',
      type: ''
    },
    errorSearch: false,
    sumData: 0,
    totalData: 0,
    limitData: 6,
    caseMobile: 0
  },
  mutations: {
    setFood(state, payload) {
      state.foods = payload.data
      state.sumData = payload.data.length
      state.totalData = payload.data.length - 6
    },

    restartLimit(state) {
      state.limitData = 6
    },
    resetOnSearch(state, payload) {
      state.searchParams = {
        searchName: '',
        price: '',
        type: '',
        district: ''
      }
      state.searchParams.searchName = payload
    },
    resetOnDistrict(state, payload) {
      state.searchParams = {
        searchName: '',
        price: '',
        type: '',
        district: ''
      }
      state.searchParams.district = payload
    },
    setLimit(state) {
      if (state.totalData > state.limitData) {
        state.limitData += 6
        state.totalData -= 6
      } else if (state.totalData <= 6) {
        state.limitData += state.totalData
        state.totalData -= state.totalData
      }
    },
    setErrorFood(state, payload) {
      if (payload === true) {
        state.errorSearch = payload
        state.foods = []
      } else {
        state.errorSearch = payload
      }
    },
    setCase(state, payload) {
      state.caseMobile = payload
    }
  },
  actions: {
    sortingFoods(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}menu?type=${context.state.searchParams.type}&price=${context.state.searchParams.price}&kecamatan=${context.state.searchParams.district}&search=${context.state.searchParams.searchName}`
          )
          .then(res => {
            context.dispatch('getForLimit')
            context.commit('setFood', res.data)
            resolve(res)
            console.clear()
          })
          .catch(err => {
            console.clear()
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getParams(state) {
      return state.searchParams
    },
    getFoods(state) {
      return state.foods
    },
    getErrorSearch(state) {
      return state.errorSearch
    },
    getTotalData(state) {
      return state.totalData
    },
    getSumData(state) {
      return state.sumData
    },
    getLimit(state) {
      return state.limitData
    },
    getCase(state) {
      return state.caseMobile
    }
  }
}
