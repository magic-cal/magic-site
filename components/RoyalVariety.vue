<template>
  <v-sheet class="pb-6 text-center"  color="white">
    <v-container>
      <v-row>
        <v-col>
          <!-- <v-card
          color="white"
            class="pricing-card mx-auto mb-16"
            elevation="0"
          >       -->
          <v-row>
                         <v-col :cols="3">

          <v-img :src="require('@/static/laurel-left.png')"></v-img>

            </v-col>
            <v-col :cols="6" align="center" justify="center">
          <v-img :src="require('@/static/royal-variety.png')"></v-img>

            </v-col>
            <v-col :cols="3">
          <v-img :src="require('@/static/laurel-right.png')"></v-img>

            </v-col>
            </v-row>    
          <!-- </v-card> -->
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>

</template>
