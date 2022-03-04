<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="products"
      sort-by="productName"
      class="elevation-0 mt-5"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="#FFC107"
                class="mb-2 text-capitalize"
                v-bind="attrs"
                v-on="on"
              >
                Agregar producto
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.productName"
                        label="Nombre del producto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-autocomplete
                        outlined
                        v-model="editedItem.category"
                        :items="category"
                        label="Categoría del producto"
                        placeholder="Seleccionar..."
                      ></v-autocomplete>
                      <!-- <v-text-field
                        v-model="editedItem.category"
                        label="Categoría del producto"
                      ></v-text-field> -->
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.price"
                        label="price del producto"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.image"
                        label="URL image"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <v-text-field
                        v-model="editedItem.description"
                        label="Descripción"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#31302E"
                  dark
                  outlined
                  class="mr-4 my-3"
                  elevation="2"
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="#FFC107"
                  class="mr-4 my-3"
                  elevation="2"
                  @click="save"
                >
                  {{ textoBoton }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >¿Desea eliminar este producto?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancelar</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >Eliminar</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <div class="justify-end d-lg-flex d-md-flex">
          <v-btn
            class="btn-editar mr-5"
            color="#31302E"
            small
            dark
            @click="editItem(item)"
          >
            Editar
          </v-btn>
          <v-btn
            class="btn-borrar"
            color="#31302E"
            small
            dark
            outlined
            @click="deleteItem(item)"
          >
            Borrar
          </v-btn>
        </div>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "../firebase/firestore.js";
export default {
  props: ["products"],
  data() {
    return {
      category: [
        "Tortas",
        "Postres",
        "Sandwiches",
        "Helados",
        "Cafetería",
        "Bebestibles",
      ],
      dialog: false,
      dialogDelete: false,

      headers: [
        { text: "Producto", value: "productName" },
        { text: "Precio", value: "price" },
        { text: "Categoría", value: "category" },
        {
          text: "Acciones",
          value: "actions",
          sortable: false,
          class: "text-end",
        },
      ],
      editedIndex: -1,
      editedItem: {
        productName: "",
        description: "",
        price: 0,
        category: "",
        image: "",
      },
      defaultItem: {
        productName: "",
        description: "",
        price: 0,
        category: "",
        image: "",
      },
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Producto" : "Editar Producto";
    },

    textoBoton() {
      return this.formTitle === "Nuevo Producto"
        ? "Crear Producto"
        : "Editar Producto";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
    this.$store.dispatch("getProducts");
  },

  methods: {
    initialize() {},

    deleteProduct(id) {
      this.$store.dispatch("deleteProduct", id);
    },

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(this.editedItem);
    },

    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.products.splice(this.editedIndex, 1);
      deleteProduct(this.editedItem.id, this.deleteProduct);
      this.$store.dispatch("getProducts");
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    saveProductCallback() {
      alert("Producto creado con éxito");
      this.editedItem.productName = "";
      this.editedItem.description = "";
      this.editedItem.price = "";
      this.editedItem.number_signup = "";
      this.editedItem.category = "";
      this.editedItem.image = "";
    },

    save() {
      if (this.formTitle == "Nuevo Producto") {
        // Craear producto
        this.products.push(this.editedItem);
        addProduct(this.editedItem, this.saveProductCallback);
      } else {
        // Codigo para actualizar producto
        this.editProduct();
      }
      this.close();
    },

    editProduct() {
      updateProduct(this.editedItem.id, this.editedItem);
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
@media (max-width: 480px) {
  .btn-borrar,
  .btn-editar {
    width: initial;
  }
}

@media (max-width: 992px) {
  .btn-borrar,
  .btn-editar {
    width: initial;
  }
}
</style>
