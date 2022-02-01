<template>
  <div class="login-page">
    <navbarComponent></navbarComponent>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" class="izquierda">
          <img src="../../public/img/login.png" alt="" />
        </v-col>
        <v-col cols="12" lg="6" md="6" sm="12" class="derecha">
          <v-container>
            <formularioLogin></formularioLogin>
          </v-container>
        </v-col>
        <footerComponent></footerComponent>
      </v-row>
  </div>
</template>

<script>
import navbarComponent from "../components/Navbar.vue";
import formularioLogin from "../components/LoginForm.vue";
import footerComponent from "../components/Footer.vue";
export default {
  components: {
    navbarComponent,
    footerComponent,
    formularioLogin,
  },
};
</script>

<style>
.derecha {
  display: flex;
  align-items: center;
}

img {
  width: 100%;
}
</style>
