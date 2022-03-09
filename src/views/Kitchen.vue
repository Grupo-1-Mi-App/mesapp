<template>
  <div>
    <navbarComponent></navbarComponent>
    <v-container fluid class="product">
      <v-row class="mt-5">
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
            <template v-slot:item.estado="{ item }" >
              <span class="ficha-estado mr-5" :class="item.detalles.estado" v-show="item.detalles.estado !== 'terminado'">
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
              <div>Cantidad: </div>
              <p v-for="(plato, index) in activePlatos" :key="index">
                <span>{{ plato.count }}</span>
                <span>{{ plato.productName }}</span>
              </p>
              <v-btn color="#FFC107" class="text-capitalize" @click="changeOrder('finalizado')" v-if="this.activeEstado !== 'finalizado' && this.activeEstado !== 'terminado'">
                Finalizar pedido
              </v-btn>
              <v-btn color="#FFC107" class="text-capitalize" @click="changeOrder('terminado')" v-if="this.activeEstado == 'finalizado' && this.activeEstado !== 'terminado'">
                Eliminar
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
import { updateOrder } from "../firebase/firestore.js";

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
      activePlatos: "",
      activeMesa: "",
      activeEstado: "",
      activeID: "",
      activeFecha: ""
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
      this.activeFecha = item.detalles.fecha;
      this.activeID = item.id;
    },
    changeOrder(estado){
      let data = {
        "estado": estado,
        "fecha": this.activeFecha,
        "mesa": this.activeMesa
      }
      updateOrder(this.activeID, data)
      this.$store.dispatch("getOrders");
      this.activePlatos = ""
      this.activeMesa = ""
      this.activeEstado = ""
      this.activeFecha = ""
      this.activeID = ""
    },
    deleteOrder(){
      console.log(this.activeID)
    }
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
.finalizado {
  background: green !important;
  color: white;
}
.pendiente {
  background: orange;
}
.terminado {
  background: red;
  color: white;
}
.resumen p {
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
}
</style>