<template>
  <div>
    <navbarComponent></navbarComponent>
    <menuTable></menuTable>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import navbarComponent from "../components/Navbar.vue";
import menuTable from "../components/MenuTable.vue";
import footerComponent from "../components/Footer.vue";
export default {
  components: {
    navbarComponent,
    menuTable,
    footerComponent,
  },
};
</script>

<style></style>
