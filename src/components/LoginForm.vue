<template>
  <div class="formulario">
    <h1>Iniciar Sesión</h1>
    <v-alert :value="alert" shaped text type="error">{{ msg }}</v-alert>
    <v-form ref="form" lazy-validation class="form">
      <v-text-field
        id="usuarioLabel"
        v-model="email"
        label="Usuario"
        outlined
        required
      ></v-text-field>

      <v-text-field
        id="passwordLabel"
        v-model="password"
        outlined
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Contraseña"
        hint="Ingrese su contraseña de 6 caracteres"
        counter
        @click:append="show1 = !show1"
        @keydown.enter="loginUser"
      ></v-text-field>
      <v-btn id="LogInButton" elevation="2" class="" @click="loginUser">Iniciar Sesión</v-btn>
    </v-form>
  </div>
</template>

<script>
import { login } from "../firebase/auth.js";
import { getUserRole } from "../firebase/firestore.js";
export default {
  data() {
    return {
      alert: false,
      show1: false,
      msg: "",
      email: "",
      password: "",
    };
  },

  methods: {
    reset() {
      this.password = "";
      this.email = "";
    },

    loginIncorrecto(error) {
      switch (error) {
        case "auth/invalid-email":
          this.msg = "El email es incorrecto";
          break;
        case "auth/user-not-found":
          this.msg = "El usuario no es correcto";
          break;
        case "auth/wrong-password":
          this.msg = "La contraseña es incorrecta";
          break;
        default:
          this.msg = "Error desconocido";
          break;
      }
      this.alert = true;
      setTimeout(() => {
        this.msg = "";
        this.alert = false;
      }, 3000);
    },

    saveEmail(email) {
      this.$store.commit("setEmail", email);
    },

    saveRole(role) {
      this.$store.commit("setRole", role);
    },

    loginUser() {
      login(this.email, this.password, this.loginIncorrecto, this.saveEmail);
      getUserRole(this.email, this.saveRole);
    },
  },
};
</script>

<style>
button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.elevation-2.v-size--default {
  background-color: #ffc107;
}

.formulario {
  margin: auto;
  width: 60%;
}

h1 {
  font-family: "Open Sans", sans-serif;
  margin: 20px 0;
}

@media screen and (max-width: 600px) {
  button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.elevation-2.v-size--default {
    width: 100%;
    margin-bottom: 25px;
  }

  .formulario {
    width: 95%;
  }
}
</style>
