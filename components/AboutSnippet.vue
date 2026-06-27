<template>
  <v-sheet class="pb-12 pt-16 text-center" color="white">
    <v-container class="about-container">
      <v-row justify="center">
        <v-col :cols="12">
          <v-icon size="36" color="rgb(228, 186, 93)">mdi-format-quote-open</v-icon>
          <blockquote class="pull-quote">
            The Best Magician I Have Ever Seen
          </blockquote>
          <div class="quote-attribution">BBC Surrey</div>
        </v-col>
        <v-col :cols="12" md="10">
          <p class="about-body">
            Callum is a multi-award winning magician with over a decade of
            performing experience. Since starting professionally at the age of
            13, he has amazed and amused thousands. His speciality lies in
            performing close-up magic at weddings, dinners, balls and parties of
            all kinds. His unique style combines professional, personal
            entertainment to get people talking with outstanding sleight of hand
            that leaves them spellbound. From small parties to multi-national
            corporate events, he brings a genuine sense of magic to any
            occasion.
          </p>
        </v-col>
        <v-col :cols="12" align="center">
          <v-btn large outlined color="accent" @click="goToContact">
            Check Availability &amp; Contact
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
.about-container {
  max-width: 880px;
}

.pull-quote {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  font-style: italic;
  font-size: clamp(1.6rem, 4.5vw, 2.6rem);
  line-height: 1.25;
  color: #1c1c22;
  margin: 0.25rem 0 0.75rem;
}

.quote-attribution {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgb(228, 186, 93);
  margin-bottom: 2rem;
}

.about-body {
  color: rgba(0, 0, 0, 0.72);
  font-size: 1.08rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}
</style>
