<template>
  <v-container fluid class="product">
    <v-row class="mt-5">
      <v-col cols="8">
        <v-row>
          <v-col cols="3" v-for="(product, index) in products" :key="index">
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
                :src="baseRoutes(product.image)"
              />
              <v-card-title>{{ product.productName }}</v-card-title>
              <v-card-text>
                <div>{{ product.description }}</div>
                <div class="my-4 text-subtitle-1">${{ product.price }}</div>
              </v-card-text>

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
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4" class="detalles">
        <v-card outlined class="px-4 py-4" elevation="0">
          <v-card-title>Resumen del Pedido</v-card-title>
          <v-select :items="mesas" label="Mesa" outlined></v-select>
          <v-list three-line v-for="(product, index) in pedido" :key="index">
            <v-row class="el-pedido">
              <div>
                <v-list-item-title>{{ product.productName }}</v-list-item-title>
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
                <v-btn color="#FFC107" dark x-small @click="addProduct(product)"
                  >+
                </v-btn>
              </div>
            </v-row>
            <v-divider></v-divider>
          </v-list>
          <v-btn color="#FFC107" class="text-capitalize"> Crear pedido </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ["products"],
  data() {
    return {
      productName: "",
      description: "",
      price: 0,
      category: "",
      image: "",
      mesas: ["Mesa 1", "Mesa 2", "Mesa 3", "Mesa 4"],
      inputpescao: 0,
    };
  },
  methods: {
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
  },
  computed: {
    pedido() {
      return this.$store.state.pedido;
    },
  },
};
</script>

<style scoped>
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
  min-height: 520px;
}
@media (max-width: 480px) {
  .btn-borrar,
  .btn-editar {
    width: initial;
  }
  .detalles{
    position: fixed;
    right: 0;
  }
}

@media (max-width: 992px) {
  .btn-borrar,
  .btn-editar {
    width: initial;
  }
}
</style> 