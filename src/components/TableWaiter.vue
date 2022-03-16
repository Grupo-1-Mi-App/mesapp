<template>
  <div>
    <v-container fluid class="product">
      <v-row class="mt-5">
        <v-col class="12">
          <v-card class="px-4 py-4" elevation="0">
            <div class="productos">
              <v-row>
                <v-col
                  cols="6"
                  md="3"
                  v-for="(product, index) in products"
                  :key="index"
                >
                  <v-card class="mx-auto food-card">
                    <template slot="progress">
                      <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                      ></v-progress-linear>
                    </template>
                    <img
                      height="250"
                      class="img-producto"
                      :src="product.image"
                    />
                    <div class="contenido">
                      <div class="texto">
                        <v-card-title>{{ product.productName }}</v-card-title>
                        <v-card-text>
                          <div>{{ product.description }}</div>
                          <div class="my-4 text-subtitle-1">
                            ${{ product.price }}
                          </div>
                        </v-card-text>
                      </div>

                      <div class="botones">
                        <v-divider class="mx-4"></v-divider>
                        <v-card-actions>
                          <v-btn
                            class="text-capitalize"
                            color="#FFC107"
                            @click="addProduct(product)"
                          >
                            Agregar
                          </v-btn>
                        </v-card-actions>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </div>
            <div class="detalles" :class="{ active: showmenu }">
              <v-card outlined class="px-4 py-4" elevation="0">
                <v-card-title class="titulo">Resumen del Pedido</v-card-title>
                <div class="btn-up" @click="toggleMenu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/><path d="M12 8l6 6H6z" fill="rgba(99,99,99,1)"/></svg>
                </div>
                <v-select
                  id="selectLabelMesa"
                  :items="tables"
                  label="Mesa"
                  outlined
                  v-model="currentTable"
                ></v-select>
                <div class="platos">
                  <v-list
                    three-line
                    v-for="(product, index) in pedido"
                    :key="index"
                  >
                    <v-row class="el-pedido">
                      <div>
                        <v-list-item-title>{{
                          product.productName
                        }}</v-list-item-title>
                      </div>
                      <div class="d-flex cantidades">
                        <v-btn
                          color="#FFC107"
                          dark
                          x-small
                          @click="removeProduct(product)"
                          >-
                        </v-btn>
                        <p>{{ product.count }}</p>
                        <v-btn
                          id="agregarOtro"
                          color="#FFC107"
                          dark
                          x-small
                          @click="addProduct(product)"
                          >+
                        </v-btn>
                      </div>
                    </v-row>
                    <v-divider></v-divider>
                  </v-list>
                </div>
                <v-btn
                  id="confirmarPedido"
                  color="#FFC107"
                  class="text-capitalize"
                  @click="createOrder"
                  :disabled="!currentTable"
                >
                  Crear pedido
                </v-btn>
              </v-card>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { addOrder } from "@/firebase/firestore.js";
export default {
  props: ["products"],
  data() {
    return {
      productName: "",
      description: "",
      price: 0,
      category: "",
      image: "",
      tables: ["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4"],
      currentTable: "",
      showmenu: false,
    };
  },
  methods: {
    toggleMenu(){
      this.showmenu = !this.showmenu;
    },
    add(num) {
      let res = parseInt(this.inputpescao) + parseInt(num);
      this.inputpescao = res;
    },

    addProduct(product) {
      this.$store.commit("addProduct", product);
    },

    removeProduct(product) {
      this.$store.commit("removeProduct", product);
    },

    baseRoutes(img) {
      return `${window.location.origin}/${img}`;
    },
    createOrderCallback() {
      //alert("Pedido creado con éxito");
      this.$swal("Pedido creado con éxito");
      this.currentTable = "";
      this.$store.commit("resetOrder");
    },
    createOrder() {
      // this.$store.commit("createOrder", this.currentTable);
      let date = new Date();
      let base = {
        mesa: this.currentTable,
        estado: "pendiente",
        fecha: date.toLocaleString(),
      };
      //let data = { ...base.concat(this.$store.state.pedido) }
      let data = {
        detalles: base,
        productos: this.$store.state.pedido,
      };
      //data = [...data]
      addOrder(data, this.createOrderCallback);
    },
  },
  computed: {
    pedido() {
      return this.$store.state.pedido;
    },
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
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
    height: 80vh;
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
