<template>
  <v-sheet class="py-16" color="white">
    <v-container>
      <v-row align="center">
        <v-col v-reveal cols="12" md="6" offset-md="1" class="reveal">
          <div class="overline accent--text mb-2 font-weight-bold">
            Member of The Magic Circle
          </div>
          <h2 class="display-1 black--text mb-5">About Callum</h2>
          <div class="quote-block mb-6">
            <p class="title font-italic black--text mb-1">
              "The Best Magician I Have Ever Seen"
            </p>
            <p class="caption grey--text text--darken-1">BBC Surrey</p>
          </div>
          <p class="body-1 black--text mb-3">
            Callum is a multi-award winning magician with over a decade of
            professional experience. Since starting his career at 13, he has
            amazed audiences from intimate private parties all the way up to
            multi-national corporate events.
          </p>
          <p class="body-1 black--text mb-6">
            His speciality is close-up sleight of hand, magic that happens
            inches from your eyes, with borrowed objects and no setup at all.
            He performs at weddings, corporate events, gala dinners, and private
            celebrations across Surrey and London.
          </p>
          <v-btn outlined color="accent" nuxt to="/about">
            Learn more about Callum
          </v-btn>
        </v-col>
        <v-col
          v-reveal
          cols="12"
          md="5"
          class="mb-8 mb-md-0 reveal reveal--fade reveal--d2 hover-zoom"
        >
          <v-img
            src="/promo-reaching.jpg"
            height="500"
            cover
            class="about-photo elevation-6"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>

<style scoped>
.about-photo {
  border-radius: 4px;
}
.quote-block {
  border-left: 3px solid #b12827;
  padding-left: 16px;
}
</style>
