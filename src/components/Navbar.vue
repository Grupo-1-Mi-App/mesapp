<template>
  <div>
    <v-app-bar dark>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="auth"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link to="/" class="text-decoration-none title"
          >mesapp</router-link
        ></v-toolbar-title
      >

      <v-toolbar-items class="ml-5 hidden-sm-and-down" v-if="auth">
        <v-btn to="/qr" plain elevation="0">Generar código QR</v-btn>
        <v-btn
          id="userMenuOption"
          to="/users"
          plain
          elevation="0"
          v-if="userRole == 'Administrador' || cypress"
          >Usuarios</v-btn
        >
        <v-btn
          to="/admin_menu"
          plain
          elevation="0"
          v-if="userRole == 'Administrador' || cypress"
          >Menú</v-btn
        >
        <v-btn
          id="cocinaMenuOption"
          to="/kitchen"
          plain
          elevation="0"
          v-if="userRole == 'Cocina' || userRole == 'Administrador' || cypress"
          >Cocina</v-btn
        >
        <v-btn
          id="garzonMenuOption"
          to="/waiter"
          plain
          elevation="0"
          v-if="userRole == 'Garzon' || userRole == 'Administrador' || cypress"
          >Garzón</v-btn
        >
      </v-toolbar-items>

      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-toolbar-items v-if="auth" class="hidden-sm-and-down">
        <v-btn
          v-if="cypress"
          id="logOutBtn"
          @click="logout"
          plain
          elevation="0"
        >
          {{ userEmail }} ({{ userRole }}) | Salir
          <v-icon right dark> mdi-logout </v-icon>
        </v-btn>
        <v-btn 
          v-else 
          id="logOutBtn" 
          @click="logout" 
          plain elevation="0"
        >
          {{ userEmail }} ({{ userRole }}) | Salir
          <v-icon right dark> mdi-logout </v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute left temporary>

      <v-btn
          v-if="cypress"
          id="logOutBtn"
          @click="logout"
          plain
          elevation="0"
        >
          {{ userEmail }} ({{ userRole }}) | Salir
          <v-icon right dark> mdi-logout </v-icon>
        </v-btn>
          <p class="ml-5 mt-5">
            {{ userEmail }}<br/>({{ userRole }})
          </p>
        
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="grey-darken-3--text text--accent-4"
          v-if="auth"
        >
          <v-list-item>
            <v-list-item-title >
              <router-link to="/qr" class="link">Generar código QR</router-link>
            </v-list-item-title>
          </v-list-item>

          <v-list-item v-if="userRole == 'Administrador' || cypress">
            <v-list-item-title
              ><router-link to="/users" class="link" 
                >Usuarios</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item v-if="userRole == 'Administrador' || cypress">
            <v-list-item-title
              ><router-link to="/admin_menu" class="link" 
                >Menú</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item v-if="userRole == 'Cocina' || userRole == 'Administrador' || cypress">
            <v-list-item-title
              ><router-link to="/kitchen" class="link" 
                >Cocina</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item v-if="userRole == 'Garzon' || userRole == 'Administrador' || cypress">
            <v-list-item-title
              ><router-link to="/waiter" class="link" 
                >Garzón</router-link
              ></v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title
              >
            <a
              @click="logout" 
              class="link"
            >
              Salir
            </a>
            </v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { logout } from "../firebase/auth.js";
export default {
  data: () => ({
    drawer: false,
    group: null,
    auth: false,
    role: "",
  }),
  methods: {
    logout() {
      logout();
      this.$store.commit("eraseEmail");
      this.$swal(
        "Te has deslogeado correctamente",
        "Nos vemos la próxima vez",
        "success"
      );
    },
    setAuthState() {
      if (this.userEmail == "") {
        this.auth = false;
      } else {
        this.auth = true;
      }
    },
  },

  computed: {
    userEmail() {
      return this.$store.state.email;
    },
    userRole() {
      return this.$store.state.role;
    },

    cypress() {
      if (window.Cypress) {
        return true;
      }
      return false;
    },
  },

  watch: {
    userEmail() {
      this.setAuthState();
    },
  },

  mounted() {
    this.setAuthState();
  },
};
</script>

<style scoped>
.theme--dark.v-app-bar.v-toolbar.v-sheet {
  background: #31302e;
}
.v-btn.v-size--default {
  text-transform: initial !important;
  font-weight: 300;
}
.title {
  color: white;
}
.link {
  color: black;
  text-decoration: none;
}
</style>
