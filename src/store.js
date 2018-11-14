import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      detaile : false,
      datas:'',
  },
  mutations: {
      opendetails (state,data) {
          state.detaile = true
          state.datas = data
          return
      },
      closedetails (state) {
          state.detaile = false
          return
      },
  },
  actions: {

  }
})
