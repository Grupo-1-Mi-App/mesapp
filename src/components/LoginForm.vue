<template>
  <div class="formulario">
    <h1>Iniciar Sesión</h1>
    <v-text-field
      label="Usuario"
      outlined
      placeholder="Correo electrónico"
    ></v-text-field>
    <v-text-field label="Contraseña" outlined></v-text-field>
    <v-btn elevation="2" class="">Iniciar Sesión</v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style>
button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.elevation-2.v-size--default {
  background-color: #ffc107;
}

.formulario {
  margin: auto;
  width: 60%;
}

h1 {
  font-family: "Open Sans", sans-serif;
  margin: 20px 0;
}

@media screen and (max-width: 600px) {
  button.v-btn.v-btn--is-elevated.v-btn--has-bg.theme--light.elevation-2.v-size--default {
    width: 100%;
    margin-bottom: 25px;
  }

  .formulario {
    width: 95%;
  }
}
</style>
