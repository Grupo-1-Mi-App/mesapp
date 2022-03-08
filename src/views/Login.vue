<template>
  <div class="login-page">
    <img src="../../public/img/login.png" class="bglogin" />
    <navbarComponent></navbarComponent>
      <v-row>
        <v-col cols="12" lg="6" md="6" sm="12" class="izquierda">
          
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

<style scoped>
.derecha {
  display: flex;
  align-items: center;
  height: 80vh;
}
.bglogin{
  width: 50%;
  position: absolute;
  height: 100%;
  object-fit: cover;
}
img {
  width: 100%;
}
@media(max-width:960px){
  .bglogin{
    display: none;
  }
}
</style>
