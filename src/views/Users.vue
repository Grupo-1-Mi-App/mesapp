<template>
  <div>
    <Navbar />
    <UserTable :users="users" />
    <Footer/>
  </div>
</template>
<script>
  import Navbar from '../components/Navbar.vue'
  import Footer from '../components/Footer.vue'
  import UserTable from '../components/UserTable.vue'
  export default {
    name: 'Users',
    components: {
      UserTable,  Navbar, Footer
    },

    computed: {
      users() {
        return this.$store.state.users
      }
    },
  }
</script>

<style scoped>
</style> 