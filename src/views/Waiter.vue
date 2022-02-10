<template>
  <div>
    <Navbar />
    <TableWaiter :products="products"/>
    <Footer/>
  </div>
</template>
<script>
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import TableWaiter from '../components/TableWaiter.vue'
  export default {
    name: 'Kitchen',
    components: {
      Navbar, Footer, TableWaiter
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