import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 6,
    userInfo: {}
  },
  mutations: {
    updateUserInfo(state, infos) {
      state.userInfo = infos
    }
  },
  actions: {}
})