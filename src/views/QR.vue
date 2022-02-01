<template>
  <div>
    <Navbar />
    <v-container class="text-center">
      <h1 class="mb-5">QR Menú completo</h1>
      <v-layout justify-center align-center class="mt-5 mb-5">
          <v-flex shrink class="mt-5 mb-5">
            <v-img
            max-height="300"
            max-width="300"
            :src="qrimage"
            v-if="qrimage"
            ></v-img>
            <div class="generando" v-else>
              <v-progress-circular
              indeterminate
              color="amber"
            ></v-progress-circular>
            </div>
          </v-flex>
      </v-layout>
      <div class="text-center mt-5">
        <v-btn
          color="#FFC107"
          class="mb-2 me-3 text-capitalize"
          @click="imprimir"
        >
          Imprimir
        </v-btn>
        <v-btn
          color="#FFC107"
          class="mb-2 me-3 text-capitalize"
          @click="descargar"
        >
          Guardar
        </v-btn>
        <p class="creado">Creado con mesapp</p>
      </div>
    </v-container>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Users",
   data() {
    return {
        url: 'https://www.mesapp.cl',
        qrimage: '',
        label: 'codigo_qr_mesapp.png'
    };
  },
  components: {
    Navbar,
    Footer,
  },
  created() {
    this.initialize();
  },
  methods: {
    async initialize(){
        await fetch( `https://api.qrserver.com/v1/create-qr-code/?data=${this.url}&amp;size=300x300` )
            .then( response => response.blob() )
            .then( imageBlob => {
                const imageObjectURL = URL.createObjectURL( imageBlob );
                this.qrimage = imageObjectURL
            })
    },
    imprimir() {
      window.print()
    },
   async descargar() {
       await fetch( `https://api.qrserver.com/v1/create-qr-code/?data=${this.url}&amp;size=400x400` )
            .then( response => response.blob() )
            .then( imageBlob => {
                const imageObjectURL = URL.createObjectURL( imageBlob );
                const link = document.createElement("a");
                link.href = imageObjectURL;
                link.download = this.label;
                link.click();
                URL.revokeObjectURL(link.href);
            })
        
    },
  },
};
</script>

<style>
    p.creado{
        display: none;
    }
    .generando{
        height: 235px;
        display: flex;
        align-items: center;
    }
    @media print {
        body {
            margin: 0;
            color: #000;
            background-color: #fff;
        }
        .theme--dark.v-app-bar.v-toolbar.v-sheet,
        h1,
        .theme--light.v-btn.v-btn--has-bg,
        .v-footer.v-sheet.theme--dark
        {
            display: none !important;
        }
        p.creado{
            display: inline-block !important;
            color: #666;
        }
        
    }
</style> 