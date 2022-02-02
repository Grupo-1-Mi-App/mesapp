<template>
  <div>
    <div class="header">
      <h1>mesapp</h1>
      <v-flex class="menu">
        <a href="#id-1" v-smooth-scroll="{ duration: 500, offset: -125 }"
          >Categoría</a
        >
        <a href="#id-2" v-smooth-scroll="{ duration: 500, offset: -125 }"
          >Categoría</a
        >
        <a href="#id-3" v-smooth-scroll="{ duration: 500, offset: -125 }"
          >Categoría</a
        >
        <a href="#id-4" v-smooth-scroll="{ duration: 500, offset: -125 }"
          >Categoría</a
        >
      </v-flex>
    </div>

    <span class="separator"></span>
    <div class="section" v-for="index in cateogiries" :key="index">
      <img src="/img/destacados.png" alt="Destacados" class="bg" />
      <div class="container" :id="`id-${index}`">
        <h2>Destacados</h2>
        <v-row class="cards">
          <v-col cols="12" lg="6" v-for="index in plates" :key="index">
            <v-card elevation="0" outlined>
              <v-layout>
                <v-flex xs4>
                  <v-img src="/img/sandwich.jpg"></v-img>
                </v-flex>
                <v-flex xs8>
                  <v-card-title primary-title>
                    Text on the right
                    <span class="price">$9.990</span>
                  </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil magni sint explicabo.
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cateogiries: [1, 2, 3],
      plates: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");
.v-main {
  overflow-x: hidden;
}
.menu {
  width: 100%;
  background: white;
  overflow-x: scroll;
  display: flex;
  box-shadow: 0px 5px 12px -5px #000000;
  height: 60px;
}
.menu::-webkit-scrollbar {
  display: none;
}
.menu a {
  padding: 10px 18px;
  text-decoration: none;
  color: #555;
  font-size: 1.2em;
}
.header {
  background-image: url("/img/bg-coffee.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: flex-start;
  color: white;
  flex-direction: column;
  display: block;
  z-index: 9;
  position: fixed;
}
.header h1 {
  padding: 3em 1em;
}
.separator {
    height: 300px;
    display: block;
  }
h2 {
  font-family: "Satisfy", cursive;
  font-size: 3em;
  background-image: url("/img/bg-titles.png");
  background-repeat: no-repeat;
  padding-left: 1em;
  margin: 1em 0;
}
.section {
  position: relative;
}
.section .bg {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}
.v-sheet.v-card {
  border-radius: 10px !important;
  border-color: #8a5d3b;
}
.v-card__title {
  color: #8a5d3b;
  justify-content: space-between;
}
.v-card__title .price {
  background: #8a5d3b;
  color: white;
  border-radius: 8px;
  padding: 0 10px;
}
.theme--light.v-image {
  height: 100%;
  -webkit-border-top-left-radius: 10px;
  -webkit-border-bottom-left-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-bottomleft: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
@media (max-width: 480px) {
  .header {
    height: 150px;
    width: 100%;
    display: block;
    z-index: 9;
    position: fixed;
  }
  .header h1 {
    padding: 1em;
}
  .separator {
    height: 150px;
    display: block;
  }
  .section .bg {
    width: 45%;
    right: -10%;
    top: 2%;
  }
  h2 {
    padding-left: 0.6em;
  }
  .v-card__title {
    justify-content: flex-end;
  }
}
</style>