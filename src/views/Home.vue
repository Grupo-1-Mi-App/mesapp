<template>
  <div>
    <Navbar />
    <Footer />
  </div>
</template>

<script>
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer'

  export default {
    name: 'Home',

    components: {
      Navbar, Footer
    },
  }
</script>
