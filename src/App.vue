<template>
  <div id="app">
    <v-app>
      <div class="loader" :class="{ show: $root.loading }">
        <v-progress-circular indeterminate color="amber"></v-progress-circular>
      </div>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap");
body .v-application {
  font-family: "Open Sans", sans-serif;
}
.swal2-styled.swal2-confirm,
.swal2-title,
.swal2-html-container {
  color: black !important;
  font-family: "Open Sans", sans-serif !important;
}
.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background: #fff;
  transition: all 0.3s;
  visibility: hidden;
  opacity: 0;
}

.loader.show {
  opacity: 1;
  visibility: visible;
}
</style>
