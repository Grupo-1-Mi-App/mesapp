<template>
  <v-data-table
    :headers="headers"
    :items="menuProductos"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Item
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
                      v-model="editedItem.NombreProducto"
                      label="Nombre del producto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.calories"
                      label="Categoría del producto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.fat"
                      label="Precio del producto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.carbs"
                      label="URL Foto"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field
                      v-model="editedItem.protein"
                      label="Descripción"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Crear producto
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn small class="mr-2" @click="editItem(item)" color="#31302E" dark
        >Editar</v-btn
      >
      <v-btn small @click="deleteItem(item)" color="white">Borrar </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Producto", value: "NombreProducto" },
      { text: "Precio", value: "Precio" },
      { text: "Categoría", value: "Categoria" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    menuProductos: [],
    editedIndex: -1,
    editedItem: {
      NombreProducto: "",
      Descripcion: "",
      Precio: 0,
      Categoria: "",
      Foto: "",
    },
    defaultItem: {
      NombreProducto: "",
      Descripcion: "",
      Precio: 0,
      Categoria: "",
      Foto: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
  },

  methods: {
    initialize() {
      this.menuProductos = [
        {
          NombreProducto: "coffee",
          Descripcion: "coffee with milk",
          Precio: 2000,
          Categoria: "drinks",
          Foto: "../../public/ProductosImg/Cafe1.png",
        },
        {
          NombreProducto: "El sandwitch de Lina",
          Descripcion: "Haulla con queso muy muy derretido.",
          Precio: 2000,
          Categoria: "sandwitch",
          Foto: "../../public/ProductosImg/pancito1.png",
        },
        {
          NombreProducto: "A la Lucas",
          Descripcion:
            "Marraqueta con tomate, lechuga, 1 lámina de queso, mostaza y mayo",
          Precio: 2000,
          Categoria: "sandwitch",
          Foto: "../../public/ProductosImg/pancito2.png",
        },
        {
          NombreProducto: "Dulce dulson",
          Descripcion: "Torta de triple chocolate",
          Precio: 2000,
          Categoria: "postre",
          Foto: "../../public/ProductosImg/pancito3.png",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.menuProductos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.menuProductos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.menuProductos.splice(this.editedIndex, 1);
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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.menuProductos[this.editedIndex], this.editedItem);
      } else {
        this.menuProductos.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
