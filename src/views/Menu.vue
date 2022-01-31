<template>
    <div>
        <div class="header">
            <h1>mesapp</h1>
        </div>
        <div class="section" v-for="(index) in cateogiries" :key="index">
            <img src="/img/destacados.png" alt="Destacados" class="bg">
            <v-container>
                <h2>Destacados</h2>
                <v-row class="cards">
                    <v-col cols="12" lg="6" v-for="(index) in plates" :key="index" :align-self="index == 1 ? 'stretch' : ''">
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni sint explicabo.
                                </v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

        </div>
    </div>
</template>

<script>
export default {
    data() {
      return{
          cateogiries: [1,2,3],
          plates: [1,2,3,4,5,6,7,8]
      }  
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
.v-main{
    overflow-x: hidden;
}
.header{
    background-image: url('/img/bg-coffee.jpg');
    background-size: cover;
    background-position: center;
    height: 300px;
    display: flex;
    align-items: flex-end;
    color: white;
}
.header h1{
    padding: 1em;
}
h2{
    font-family: 'Satisfy', cursive;
    font-size: 3em;
    background-image: url('/img/bg-titles.png');
    background-repeat: no-repeat;
    padding-left: 1em;
    margin: 1em 0;
}
.section {
    position: relative;
}
.section .bg{
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
}
.v-sheet.v-card{
    border-radius: 10px !important;
    border-color: #8A5D3B;
}
.v-card__title{
    color: #8A5D3B;
    justify-content: space-between;
}
.v-card__title .price{
    background: #8A5D3B;
    color: white;
    border-radius: 8px;
    padding: 0 10px;
}
.theme--light.v-image{
    height: 100%;
    -webkit-border-top-left-radius: 10px;
    -webkit-border-bottom-left-radius: 10px;
    -moz-border-radius-topleft: 10px;
    -moz-border-radius-bottomleft: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
@media (max-width: 480px){
    .header{
        height: 200px;
    }
    .section .bg{
        width: 45%;
        right: -10%;
        top: 2%;
    }
    h2{
        padding-left: 0.6em;
    }
    .v-card__title{
        justify-content: flex-end;
    }
}
</style>