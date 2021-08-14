<template>
  <v-sheet class="pb-6 text-center" color="white" pt-5>
    <v-container>
      <v-row>
        <v-col>
          <!-- <v-card
          color="white"
            class="pricing-card mx-auto mb-16"
            elevation="0"
          >       -->
          <v-row align="center">
            <v-col :cols="3">
              <v-img :src="require('@/static/laurel-left.png')"></v-img>
            </v-col>
            <v-col :cols="6" align="center" justify="center">
              <v-row>
                <v-col :cols="12">
                  <div class="rvp h2">THE ROYAL VARIETY PERFORMANCE</div>
                </v-col>
                <v-col :cols="12">
                  <div class="rvp subtitle-1">Callum McClure Magician</div>
                  <div class="rvp subtitle-2">Official Aftershow Performer</div>
                </v-col>
              </v-row>
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
<style lang="scss" scoped>
.rvp {
  font-family: 'Open Sans';
  font-weight: normal;
  color: rgb(228, 186, 93);
}
</style>
