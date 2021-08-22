<template>
  <v-sheet class="pb-6 pt-12 text-center" color="white">
    <v-container>
      <v-row>
        <v-col :cols="12">
          <v-row>
            <v-col :cols="12" class="d-flex" style="flex-direction: column">
              <div class="display-1 mb-1 flex-grow-1 accent--text">
                "The Best Magician I Have Ever Seen"
              </div>
              <div class="mb-1 flex-grow-1">BBC Surrey</div>
            </v-col>
          </v-row>
        </v-col>
        <v-col :cols="12">
          <div>
            Callum is a Multi-Award winning Magician with over a decade of
            performing experience. Since starting professionally at the age of
            13, he amazed and amused thousands. His speciality lies in
            performing close-up magic at Weddings, Dinners, Balls and Parties of
            all kinds. His unique style combines professional personal
            entertainment to get people talking and outstanding slight of hand
            to make them go crazy. From years of refining his skills in
            performing to small parties and all the way to multi-national
            corporate events, he can bring a sence of magic to any occasion.
          </div>
        </v-col>
        <v-col :cols="12" align="center">
          <v-btn large outlined color="accent" @click="goToContact">
            Check Availability and Contact
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const goToContact = () => {
      const element = document.getElementById('contact')
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }
    }
    return {
      goToContact,
    }
  },
})
</script>

<style lang="scss" scoped>
div {
  color: black;
}
</style>
