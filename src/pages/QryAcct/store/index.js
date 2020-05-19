import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 6,
    userInfo: {},
    initInfo: {}
  },
  mutations: {
    updateUserInfo(state, infos) {
      state.userInfo = infos
    },
    setInit(state, res) {
      state.initInfo = res;
    }
  },
  actions: {
    init({commit}) {
      AlipayJSBridge_call('rpc',
        {
          operationType: 'login.do',
          requestData: {
            requestData: {param: "param"}
          }
        },
        function (res) {
          console.log('init成功:' + JSON.stringify(res));
          commit('setInit', res);
        },
        function (msg) {
        });
    }
  }
})
