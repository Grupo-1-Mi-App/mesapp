import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { importUsers, importProducts, importOrders } from "../firebase/firestore.js";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    email: "",
    pedido: [],
    products: [],
    users: [],
    orders: []
  },

  getters: {
    filtrarUser: (state) => (id) => {
      return state.users[id];
    },

    filterProduct: (state) => (id) => {
      return state.products[id]
    },
 
  },
  mutations: {
    setEmail(state, data) {
      state.email = data;
    },

    getUsers(state, data) {
      state.users = data;
    },

    getProducts(state, data) {
      state.products = data;
      console.log(data)
    },

    getOrders(state, data) {
      state.orders = data;
      console.log(data)
    },

    eraseEmail(state) {
      state.email = "";
    },

    deleteUser(state, id) {
      state.users.splice(id, 1);
    },

    upadateUser(state, data) {
      state.users[data.index] = data.user;
    },

    updateProduct(state, data) {
      state.products[data.index] = data.product;
    },

    addProduct(state, data) {
      const index = state.pedido.findIndex(fid => fid.id === data.id);
      console.log('index:', index)
      if (index == -1) {
        data.count = 1
        state.pedido.push(data)
      }
      else {
        state.pedido[index].count += 1
      }
      state.pedido = [...state.pedido]
    },
    removeProduct(state, data) {
      const index = state.pedido.findIndex(fid => fid.id === data.id);
      let count = state.pedido[index].count
      if (count > 1) {
        state.pedido[index].count -= 1

      }
      else {
        state.pedido.splice(index, 1)
      }
      state.pedido = [...state.pedido]
    },
    createOrder(state, table){
      //_enfiar a firebase
      console.log(state.pedido, table)
    }, 
    resetOrder(state){
      state.pedido = []
    }

  },
  actions: {
    getUsers(context) {
      console.log('holita profe')
      let saveUsers = ( data ) => {
          context.commit("getUsers", data);
      }
      importUsers(saveUsers);
    },

    getProducts(context) {
      let saveProducts = ( data ) => {
          context.commit("getProducts", data);
      }
      importProducts(saveProducts);
    },
    getOrders(context) {
      let saveOrders = ( data ) => {
          context.commit("getOrders", data);
      }
      importOrders(saveOrders);
    },
    // addProduct(context, data) {
    //   context.commit("addProduct", data);
    // }
  },
  
  modules: {},


});
