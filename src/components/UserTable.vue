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
                            <v-text-field v-model="editedItem.id" type="hidden">
                            </v-text-field>
                            <v-col cols="12">
                              <v-text-field
                                id="NameLabelUser"
                                outlined
                                dense
                                v-model="editedItem.name"
                                label="Nombre"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                id="emailLabelUser"
                                label="E-mail"
                                outlined
                                dense
                                v-model="editedItem.email"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12">
                              <v-text-field
                                id="passwordLabelUser"
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
                                id="selectLabelUser"
                                outlined
                                v-model="editedItem.role"
                                :items="roles"
                                label="Rol"
                                placeholder="Seleccionar..."
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
                          id="btnCrearUsuario"
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
                        >¿Desea eliminar este usuario?</v-card-title
                      >
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete"
                          >Cancelar</v-btn
                        >
                        <v-btn
                          id="deleteUser"
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
import { registrarUsuario } from "../firebase/auth";
import { deleteUser, updateUser } from "../firebase/firestore";

export default {
  // props:['users'],
  data() {
    return {
      roles: ["Administrador", "Garzon", "Cocina"],
      show1: false,
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: "Nombre", value: "name" },
        { text: "Rol", value: "role" },
        {
          text: "Acciones",
          value: "actions",
          sortable: false,
          class: "text-end",
        },
      ],
      editedIndex: -1,
      editedItem: {
        id: "",
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
    users() {
      return this.$store.state.users;
    },

    textoBoton() {
      return this.formTitle === "Crear Usuario"
        ? "Crear Usuario"
        : "Editar Usuario";
    },

    // traerId(){
    //   return this.$route.params.id
    // },

    // filtrarUser() {
    //   return this.$store.getters.filtrarUser(this.traerId);

    // },
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
    this.$store.dispatch("getUsers");
  },
  methods: {
    initialize() {},

    deleteUser(id) {
      this.$store.dispatch("deleteUser", id);
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
      deleteUser(this.editedItem.id, this.deleteUser);
      this.$store.dispatch("getUsers");
      this.closeDelete();

      // this.$store.commit("deleteUser", this.editedIndex, 1);
      // this.closeDelete();
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

    createUserCallback() {
      // alert("Usuario creado con exito");
      this.$swal("Usuario creado con exito");
      this.editedItem.name = "";
      this.editedItem.email = "";
      this.editedItem.password = "";
      this.editedItem.role = "";
    },

    save() {
      if (this.formTitle == "Crear Usuario") {
        // Crear Usuario
        this.users.push(this.editedItem);
        registrarUsuario(
          this.editedItem.email,
          this.editedItem.password,
          this.editedItem.role,
          this.editedItem.name,
          this.createUserCallback
        );
      } else {
        this.editUser();
      }
      this.close();

      // this.users.push(this.editedItem);
      // registrarUsuario(
      //   this.editedItem.email,
      //   this.editedItem.password,
      //   this.editedItem.role,
      //   this.editedItem.name,
      //   this.createUserCallback
      // );
      // /*
      // } else {
      //   this.users.push(this.editedItem);
      // }
      // */
      // this.close();
    },

    editUser() {
      updateUser(this.editedItem.id, this.editedItem);
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
