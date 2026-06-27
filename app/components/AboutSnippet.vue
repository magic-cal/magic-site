<template>
  <v-sheet class="pb-6 pt-12 text-center" color="white">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-h4 mb-1 text-accent">
            "The Best Magician I Have Ever Seen"
          </div>
          <div class="mb-1">BBC Surrey</div>
        </v-col>
        <v-col cols="12">
          <div class="about-text">
            Callum is a Multi-Award winning Magician with over a decade of
            performing experience. Since starting professionally at the age of
            13, he amazed and amused thousands. His speciality lies in
            performing close-up magic at Weddings, Dinners, Balls and Parties of
            all kinds. His unique style combines professional personal
            entertainment to get people talking and outstanding sleight of hand
            to make them go crazy. From years of refining his skills in
            performing to small parties and all the way to multi-national
            corporate events, he can bring a sense of magic to any occasion.
          </div>
        </v-col>
        <v-col cols="12" class="text-center">
          <v-btn size="large" variant="outlined" color="accent" @click="goToContact">
            Check Availability and Contact
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
const goToContact = () => {
  const element = document.getElementById('contact')
  element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}
</script>

<style lang="scss" scoped>
.about-text {
  color: black;
}
</style>
