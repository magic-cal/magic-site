<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" pa-0>
       <v-parallax id="dim"  :src="require('@/static/shuffle-cropped1.jpg')">
       <v-row align="center">
         <v-col align="center">
           <div class="display-4">
                Callum McClure
             </div>
             <div class="display-1">Multi-Award Winning Magician</div>
             <div class="display-5">Member of The Magic Circle</div>
                </v-col></v-row>
                </v-parallax>
                <v-row>
<v-col align="center" class="magic-circle-logo">

             <v-img height="100px" width="100px" :src="require('@/static/the-magic-circle.png')"></v-img>
</v-col>
                </v-row>

                <royal-variety></royal-variety>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </v-col>
  </v-row>
</template>
<style scoped>

.v-parallax {
  transform: none !important;
  width: 100% !important;
  object-fit: cover;
  height: 100vh !important;
}

.v-parallax__image{
  margin: -100px 0px 0px -180px !important;
 }

>>> .v-parallax__content {
  background: linear-gradient(45deg, black, transparent) !important;
}

.magic-circle-logo{
  margin-top: -50px
}
</style>