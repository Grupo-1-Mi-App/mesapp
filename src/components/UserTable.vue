<template>
  <div>
    <v-container>
      <v-row class="mt-5">
        <v-col cols="12">
          <v-card class="px-4 py-4" elevation="0">
            <v-data-table
              :headers="headers"
              :items="users"
              sort-by="name"
              class="elevation-0"
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
                        Crear usuario
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-text-field
                                outlined
                                dense
                                v-model="editedItem.name"
                                label="Nombre"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                label="E-mail"
                                outlined
                                dense
                                v-model="editedItem.email"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                outlined
                                dense
                                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show1 ? 'text' : 'password'"
                                name="input-10-1"
                                label="Password"
                                hint="Ingrese su contraseña de 6 caracteres"
                                counter
                                @click:append="show1 = !show1"
                                v-model="editedItem.password"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-autocomplete
                                outlined
                                v-model="editedItem.role"
                                :items="roles"
                                label="Rol"
                                placeholder="Select..."
                              ></v-autocomplete>
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
                          Editar Usuario
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="text-h5"
                        >¿Desea eliminar este usuario?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                          >Cancelar</v-btn
                        >
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="deleteItemConfirm"
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
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import Users from "../../users.js"
export default {
  props:['users'],
  data() {
    return {
      roles: [
        "Administrador",
        "Garzon",
        "Cocina"
      ],
      show1: false,
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Rol", value: "role" },
        { text: "Acciones", value: "actions", sortable: false, class: "text-end" },
      ],
      // Usuarios: Users,
      editedIndex: -1,
      editedItem: {
        name: "",
        email: "",
        password: "",
        role: "",
      },
      defaultItem: {
        name: "",
        email: "",
        password: "",
        role: "",
      },
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Crear Usuario" : "Editar Usuario";
    },

    traerId(){
      return this.$route.params.id
    },

    filtrarUser() {
      return this.$store.getters.filterCourse(this.traerId);

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
      
      
    },
    editItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.users.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.users.splice(this.editedIndex, 1);
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
        Object.assign(this.users[this.editedIndex], this.editedItem);
      } else {
        this.users.push(this.editedItem);
      }
      this.close();
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