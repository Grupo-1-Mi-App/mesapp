import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    email:""
  },
  mutations: {
    setEmail(state, data) {
      state.email = data;
    },
    eraseEmail(state) {
      state.email = "";
    },
  },
  actions: {
  },
  modules: {
  }
})
