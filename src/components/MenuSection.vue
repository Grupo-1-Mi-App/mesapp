<template>
  <div class="section">
    <img :src="img" alt="Destacados" class="bg" />
    <div class="container" :id="name">
      <h2>{{ name }}</h2>
      <v-row class="cards">
        <v-col
          cols="12"
          lg="6"
          v-for="(product, index) in section"
          :key="index"
        >
          <v-card elevation="0" outlined>
            <v-layout>
              <v-flex xs4>
                <v-img  height="150px" :src="product.image"></v-img>
              </v-flex>
              <v-flex xs8>
                <v-card-title primary-title>
                  {{ product.productName }}
                  <span class="price">${{ product.price }}</span>
                </v-card-title>
                <v-card-text>
                  {{ product.description }}
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
    props: ['section', 'name', 'img']
}
</script>
