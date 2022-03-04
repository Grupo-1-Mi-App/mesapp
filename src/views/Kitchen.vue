<template>
  <div>
    <navbarComponent></navbarComponent>
    <v-container fluid class="product">
      <v-row>
        <v-col cols="8">
          <v-data-table
            :headers="headers"
            :items="pedidos"
            sort-by="productName"
            class="elevation-0 mt-5"
          >
            <template v-slot:item.orden="{ item }">
                {{ pedidos.indexOf(item) + 1 }}
            </template>
            <template v-slot:item.actions="{ item }">
              <div class="justify-end d-lg-flex d-md-flex">
                <v-btn
                  class="btn-editar mr-5"
                  color="#31302E"
                  small
                  dark
                  @click="showDetails(item)"
                >
                  Detalles
                </v-btn>
              </div>
            </template>
            <template v-slot:item.estado="{ item }">
              <span class="ficha-estado mr-5" :class="item.detalles.estado">
                {{ item.detalles.estado }}
              </span>
            </template>
            <template v-slot:item.fecha="{ item }">
                {{ item.detalles.fecha }}
            </template>
            <template v-slot:item.mesa="{ item }">
                {{ item.detalles.mesa }}
            </template>
            <template v-slot:no-data>
              <v-btn color="primary"> Reset </v-btn>
            </template>
          </v-data-table>
        </v-col>
        <v-col cols="4" class="resumen">
          <v-card outlined class="px-4 py-4" elevation="0">
            <div v-if="activeEstado">
              <v-card-title
                >Resumen del Pedido: {{ activeMesa }}</v-card-title
              >
              <div>Estado: {{ activeEstado }}</div>
              <p v-for="(plato, index) in activePlatos" :key="index">
                <span>{{ plato.count }}</span>
                <span>{{ plato.productName }}</span>
              </p>
              <v-btn color="#FFC107" class="text-capitalize">
                Finalizar pedido
              </v-btn>
            </div>
            <div v-else>Selecciona un pedido</div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <footerComponent></footerComponent>
  </div>
</template>
<script>
import navbarComponent from "../components/Navbar.vue";
import footerComponent from "../components/Footer.vue";
export default {
  data() {
    return {
      headers: [
        { text: "Orden", value: "orden" },
        { text: "Mesa", value: "mesa" },
        { text: "H. inicio", value: "fecha" },
        { text: "Estado", value: "estado" },
        { text: "Acciones", value: "actions", sortable: false, class: "text-end"},
      ],
    //  pedidos: [],
      activePlatos: "",
      activeMesa: "",
      activeEstado: "",
    };
  },
  components: {
    navbarComponent,
    footerComponent,
  },
  methods: {
    showDetails(item) {
      this.activePlatos = item.productos;
      this.activeMesa = item.detalles.mesa;
      this.activeEstado = item.detalles.estado;
      console.log(this.activePlatos)
    },
  },
  created() {
    this.$store.dispatch("getOrders");
  },
  computed: {
    pedidos() {
      return this.$store.state.orders
    }
  },
};
</script>
<style scoped>
.ficha-estado {
  border-radius: 12px;
  font-size: 0.8em;
  padding: 5px 10px;
  text-transform: capitalize;
}
.listo {
  background: green !important;
}
.pendiente {
  background: orange;
}
.resumen p {
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
}
</style>