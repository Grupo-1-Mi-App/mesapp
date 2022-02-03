<template>
  <div>
    <Navbar />
    <TableWaiter />
    <Footer/>
  </div>
</template>
<script>
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import TableWaiter from '../components/TableWaiter.vue'
  export default {
    name: 'Users',
    components: {
      Navbar, Footer, TableWaiter
    },
  }
</script>

<style scoped>
</style> 