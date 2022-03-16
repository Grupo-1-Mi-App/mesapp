<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap');
  body .v-application{
    font-family: 'Open Sans', sans-serif;
  }
  .swal2-styled.swal2-confirm,
  .swal2-title,
  .swal2-html-container{
    color: black !important;
    font-family: 'Open Sans', sans-serif !important;
  }
</style>
