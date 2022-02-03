<template>
  <v-container class="product">
    <v-row class="mt-5">
      <v-col cols="8" md="2" v-for="(product, index) in products" :key="index">
        <v-card
          class="mx-auto "
          max-width="250"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <img
            height="250"
            :src='baseRoutes(product.Foto)'
          >
          <v-card-title>{{baseRoutes(product.Foto)}}</v-card-title>
          <v-card-text>
            <div>{{product.Descripcion}}</div>
            <div class="my-4 text-subtitle-1">
              ${{product.Precio}}
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn
              class="text-capitalize"
              color="#FFC107"
              
              @click="reserve"
            >
              Agregar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
       <v-col cols="4" class="detalles">
          <v-card outlined class="px-4 py-4" elevation="0">
            <v-card-title>Resumen del Pedido</v-card-title>
            <v-select
              :items="mesas"
              label="Mesa"
              outlined
            ></v-select>
            <v-list three-line>
              <v-row class="el-pedido">
                <div>
                  <v-list-item-title>Pescao</v-list-item-title>
                </div>
                <div class="d-flex cantidades">
                  <v-btn
                      color="#FFC107"
                      dark
                      x-small
                      @click="add(-1)" :disabled="inputpescao < 1"
                    >-
                    </v-btn>
                    <v-text-field v-model.number="inputpescao" hide-details></v-text-field>
                    <v-btn
                      color="#FFC107"
                      dark
                      x-small
                      @click="add(+1)"
                    >+
                    </v-btn>
                </div>
              </v-row>
              <v-divider></v-divider>
            </v-list>
            <v-btn
              color="#FFC107"
              class="text-capitalize"
            >
              Crear pedido
            </v-btn>
          </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: ['products'],
  data() {
    return {
      NombreProducto: "",
      Descripcion: "",
      Precio: 0,
      Categoria: "",
      Foto: "",

      mesas:['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4'],
      inputpescao: 0,

    };
   
  },
  methods:{
    add(num) {
      let res = parseInt(this.inputpescao) + parseInt(num);
      this.inputpescao = res;
    },

    addProduct(product){
      this.$store.dispatch('addProduct', product);
    },

    baseRoutes(img){
      return `http://localhost:8080/${img}`

    }
  }
 
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
.el-pedido{
  display: flex;
  justify-content: space-between;
  margin: 0 1em;
}
.cantidades{
  display: flex;
  align-items: center;
  width: 90px;
}
.cantidades .v-btn{
  font-size: 1.3em;
}
.cantidades .v-text-field{
  text-align: center !important;
}
.cantidades .v-text-field input{
  text-align: center !important;
}
@media(max-width: 480px){
  .btn-borrar,
  .btn-editar {
    width: initial;
  }
}

@media( max-width: 992px) {
  .btn-borrar,
  .btn-editar {
    width: initial;
  }
}
</style> 