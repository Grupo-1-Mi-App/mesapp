import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    email:"",
    users: [
      {
        id: 1,
        name: "Juan Juanito",
        role: "Admin",
      },
      {
        id: 2,
        name: "Pablo Wixtamante",
        role: "Garzon",
      },
      {
        id: 3,
        name: "Jose Pepe",
        role: "Garzon",
      },
      {
        id: 4,
        name: "Pedro Perez",
        role: "Admin",
      },
      {
        id: 5,
        name: "Jerry",
        role: "Garzon",
      },
    ],
  },
  getters: {
    filtrarUser: (state) => (id) => {
      return state.users[id]
    },
  },
  mutations: {
    setEmail(state, data) {
      state.email = data;
    },

    eraseEmail(state) {
      state.email = "";
    },

    deleteUser(state, id) {
      state.users.splice(id, 1);
    },

    upadateUser(state, data) {
      state.users[data.index] = data.user;
    }
  },
  actions: {
  },
  modules: {
  }
})
