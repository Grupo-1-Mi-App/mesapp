<template>
  <div>
    <Navbar />
    <TablaKitchen />
    <Footer/>
  </div>
</template>
<script>
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import TablaKitchen from '../components/TablaKitchen.vue'
  export default {
    name: 'Users',
    components: {
      Navbar, Footer, TablaKitchen
    },
  }
</script>

<style scoped>
</style> 