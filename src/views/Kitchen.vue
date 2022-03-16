<template>
  <div>
    <navbarComponent></navbarComponent>
    <v-container fluid class="product">
      <v-row class="mt-5">
        <div class="productos">
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
        </div>
        <div class="resumen detalles" :class="{ active: showmenu }">
          <v-card outlined class="px-4 py-4" elevation="0">
            <div v-if="activeEstado">
              <v-card-title
                >Resumen del Pedido: {{ activeMesa }}</v-card-title
              >
              <div class="btn-up" @click="toggleMenu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/><path d="M12 8l6 6H6z" fill="rgba(99,99,99,1)"/></svg>
                </div>
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
        </div>
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
      activeFecha: "",
      showmenu: false,
    };
  },
  components: {
    navbarComponent,
    footerComponent,
  },
  methods: {
    toggleMenu(){
      this.showmenu = !this.showmenu;
    },
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
      let items = [];
      for(let i in this.$store.state.orders) {
        if(this.$store.state.orders[i].detalles.estado !== "terminado") {
          items.push(this.$store.state.orders[i]);
        }
      }
      return items
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
.btn-up{
  display: none;
}
.contenido {
  display: flex;
  flex-direction: column;
  height: calc(100% - 250px);
  justify-content: space-between;
}
.botones {
  padding: 1rem 0;
}
.productos {
  width: 65%;
  float: left;
}
.detalles {
  width: 34%;
  float: left;
  margin-left: 1%;
}
.btn-editar {
  width: 260px;
  height: 31px;
  background: #31302e 0% 0% no-repeat padding-box;
  border-radius: 2px;
  opacity: 1;
}
.btn-borrar {
  width: 260px;
  height: 31px;
  border: 1px solid #31302e;
  border-radius: 2px;
  opacity: 1;
}
.el-pedido {
  display: flex;
  justify-content: space-between;
  margin: 0 1em;
}
.cantidades {
  display: flex;
  align-items: center;
  width: 90px;
}
.cantidades .v-btn {
  font-size: 1.3em;
  min-width: auto;
  width: 25px;
  height: 25px;
  padding: 0;
}
.cantidades p {
  margin-bottom: 0;
  padding: 0;
  text-align: center;
  width: 30px;
}
.cantidades .v-text-field {
  text-align: center !important;
}
.cantidades .v-text-field input {
  text-align: center !important;
}
.img-producto {
  object-fit: cover;
  width: 100%;
}
.food-card {
  min-height: 120px;
  height: 100%;
}
@media (max-width: 480px) {
  .btn-up{
    display: block;
    position: absolute;
    right: 15px;
    top: 5px;
  }
  .detalles.active .btn-up{
    transform: rotate(180deg);
    top: 10px;
  }
  .btn-borrar,
  .btn-editar {
    width: initial;
  }
  .productos {
    width: 100%;
  }
  .detalles {
    position: fixed;
    right: 0;
    width: 100%;
    bottom: 0;
    z-index: 99;
    height: 18vh;
    background: white;
    transition: all .4s;
  }
  .detalles.active{
    height: 93vh;
  }
  .detalles .v-card {
    padding: 0 10px !important;
    border-radius: 0;
  }
  .food-card {
    min-height: auto;
  }
  .img-producto {
    height: 80px;
  }
  .v-card__text {
    display: none;
  }
  .v-card__title{
    word-break: initial;
    font-size: 0.9em;
    line-height: 1.2em;
  }
  .platos {
    max-height: 53vh;
    overflow-y: scroll;
  }
  .v-input{
    font-size: 0.9em;
    line-height: 1.2em;
  }
  #confirmarPedido{
    margin: 5px auto;
  }
  .v-text-field--outlined > .v-input__control > .v-input__slot{
    min-height: auto;
  }
  .titulo{
    justify-content: center;
    font-size: 1.25em;
  }
}

@media (max-width: 992px) {
  .btn-borrar,
  .btn-editar {
    width: initial;
  }
}
</style>