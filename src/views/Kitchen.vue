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
              <span class="ficha-estado mr-5" :class="item.estado">
                {{ item.estado }}
              </span>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize"> Reset </v-btn>
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
                <span>{{ plato.cantidad }}</span>
                <span>{{ plato.nombre }}</span>
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
        { text: "H. inicio", value: "inicio" },
        { text: "Estado", value: "estado" },
        {
          text: "Acciones",
          value: "actions",
          sortable: false,
          class: "text-end",
        },
      ],
      pedidos: [
        {
          orden: 1,
          mesa: 5,
          inicio: "21:00:45",
          estado: "pendiente",
          platos: [
            {
              nombre: "Café",
              cantidad: 2,
            },
            {
              nombre: "pan",
              cantidad: 1,
            },
          ],
        },
        {
          orden: 2,
          mesa: 2,
          inicio: "21:00:45",
          estado: "listo",
          platos: [
            {
              nombre: "Pastel",
              cantidad: 1,
            },
            {
              nombre: "Helado",
              cantidad: 3,
            },
          ],
        },
      ],
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
      this.activePlatos = item.platos;
      this.activeMesa = `Mesa N°${item.mesa}`;
      this.activeEstado = item.estado;
    },
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