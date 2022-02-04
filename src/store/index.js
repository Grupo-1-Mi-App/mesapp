import Vue from "vue";
import Vuex from "vuex";
//import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  //plugins: [createPersistedState()],
  state: {
    email: "",
    pedido:[],
    products: [
      {
        id: 0,
        NombreProducto: "coffee",
        Descripcion: "coffee with milk",
        Precio: 2000,
        Categoria: "drinks",
        Foto: "https://i.picsum.photos/id/11/10/6",
      },
      {
        id: 1,
        NombreProducto: "El sandwitch de Lina",
        Descripcion: "Haulla con queso muy muy derretido.",
        Precio: 2000,
        Categoria: "sandwitch",
        Foto: "img/productos/pan1.png",
      },
      {
        id: 2,
        NombreProducto: "A la Lucas",
        Descripcion:
          "Marraqueta con tomate, lechuga, 1 lámina de queso, mostaza y mayo",
        Precio: 2000,
        Categoria: "sandwitch",
        Foto: "img/productos/pan2.png",
      },
      {
        id: 3,
        NombreProducto: "Dulce dulson",
        Descripcion: "Torta de triple chocolate",
        Precio: 2000,
        Categoria: "postre",
        Foto: "img/productos/pan3.png",
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
