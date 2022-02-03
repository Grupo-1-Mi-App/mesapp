import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    email: "",

    products: [
      {
        NombreProducto: "coffee",
        Descripcion: "coffee with milk",
        Precio: 2000,
        Categoria: "drinks",
        Foto: "../../public/ProductosImg/Cafe1.png",
      },
      {
        NombreProducto: "El sandwitch de Lina",
        Descripcion: "Haulla con queso muy muy derretido.",
        Precio: 2000,
        Categoria: "sandwitch",
        Foto: "../../public/ProductosImg/pancito1.png",
      },
      {
        NombreProducto: "A la Lucas",
        Descripcion:
          "Marraqueta con tomate, lechuga, 1 lámina de queso, mostaza y mayo",
        Precio: 2000,
        Categoria: "sandwitch",
        Foto: "../../public/ProductosImg/pancito2.png",
      },
      {
        NombreProducto: "Dulce dulson",
        Descripcion: "Torta de triple chocolate",
        Precio: 2000,
        Categoria: "postre",
        Foto: "../../public/ProductosImg/pancito3.png",
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

    
  },
  actions: {
    addProduct(context, data) {
      context.commit("addProduct", data);
    }
   
  },
  modules: {},
});
