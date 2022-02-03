<template>
  <div>
    <Navbar />
    <MenuTable :products="products" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MenuTable from "../components/MenuTable.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Products",

  components: {
    Navbar,
    MenuTable,
    Footer,
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>

<style></style>
