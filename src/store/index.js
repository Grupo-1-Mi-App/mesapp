import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    email: "",
    pedido:[],
    products: [
      {
        id: 0,
        productName: "coffee",
        description: "coffee with milk",
        price: 2000,
        category: "drinks",
        image: "img/productos/coffee1.png",
      },
      {
        id: 1,
        productName: "El sandwitch de Lina",
        description: "Haulla con queso muy muy derretido.",
        price: 2000,
        category: "destacados",
        image: "img/productos/pan1.png",
      },
      {
        id: 2,
        productName: "A la Lucas",
        description:
          "Marraqueta con tomate, lechuga, 1 lámina de queso, mostaza y mayo",
        price: 2000,
        category: "sandwitch",
        image: "img/productos/pan2.png",
      },
      {
        id: 3,
        productName: "Dulce dulson",
        description: "Torta de triple chocolate",
        price: 2000,
        category: "postre",
        image: "img/productos/pan3.png",
      },
    ],

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
      return state.users[id];
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
    },

    addProduct(state, data) {
      const index = state.pedido.findIndex(fid => fid.id === data.id);
      if(index == -1){
        data.count = 1
        state.pedido.push(data)
      }
      else{
        state.pedido[index].count += 1
      }
      state.pedido = [...state.pedido]
    },
    removeProduct(state, data) {
      const index = state.pedido.findIndex(fid => fid.id === data.id);
      let count = state.pedido[index].count
      if(count > 1){
        state.pedido[index].count -= 1
        
      }
      else{
        state.pedido.splice(index, 1)
      }
      state.pedido = [...state.pedido]
    }
    
  },
  actions: {
    // addProduct(context, data) {
    //   context.commit("addProduct", data);
    // }
   
  },
  modules: {},
});
