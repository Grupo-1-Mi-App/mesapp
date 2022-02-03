<template>
  <div>
    <Navbar />
    <TableNew :products="products"/>
    <Footer/>
  </div>
</template>
<script>
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import TableNew from '../components/TableNew.vue'
  export default {
    name: 'Kitchen',
    components: {
      Navbar, Footer, TableNew
    },
    computed: {
      products() {
        return this.$store.state.products
      }
    },
  }
</script>

<style scoped>
</style> 