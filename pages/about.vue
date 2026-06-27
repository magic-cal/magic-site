<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12" pa-0>
      <heading-section title="About Callum" subtitle="A little bit about Callum" />

      <v-sheet color="white" class="py-16">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="5">
              <v-img
                class="elevated-img"
                :src="require('@/static/performanceTedx.jpg')"
                alt="Callum McClure performing"
              />
            </v-col>
            <v-col cols="12" md="6" offset-md="1">
              <div class="eyebrow">The Magician</div>
              <h2 class="section-title mb-4">
                A decade of astonishment, in the palm of your hand
              </h2>
              <p class="about-text">
                Callum is a multi-award winning magician with over a decade of
                performing experience. Since starting professionally at the age
                of 13, he has amazed and amused thousands of guests across the
                UK's most prestigious venues.
              </p>
              <p class="about-text">
                His speciality lies in performing close-up magic at weddings,
                dinners, balls and parties of all kinds. His unique style
                combines warm, personal entertainment that gets people talking
                with outstanding sleight of hand that leaves them stunned.
              </p>
              <p class="about-text">
                From intimate gatherings to multi-national corporate events, and
                from the Edinburgh Fringe to the Royal Variety Performance
                aftershow, Callum brings a genuine sense of magic to any
                occasion.
              </p>
              <v-btn large color="accent" depressed to="/contact" nuxt>
                Check Availability
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <royal-variety />

      <v-sheet color="#f7f7f9" class="py-16">
        <v-container>
          <v-row>
            <v-col
              v-for="item in highlights"
              :key="item.title"
              cols="6"
              md="3"
              class="text-center"
            >
              <v-icon size="40" color="accent">{{ item.icon }}</v-icon>
              <div class="highlight-title">{{ item.title }}</div>
              <div class="highlight-text">{{ item.text }}</div>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const highlights = [
      {
        icon: 'mdi-trophy-variant',
        title: 'Multi-Award Winning',
        text: 'Recognised for excellence in close-up magic',
      },
      {
        icon: 'mdi-auto-fix',
        title: 'The Magic Circle',
        text: 'A proud member of the prestigious society',
      },
      {
        icon: 'mdi-presentation',
        title: 'TEDx Performer',
        text: 'Sharing the stage with leading speakers',
      },
      {
        icon: 'mdi-star-circle',
        title: '10+ Years',
        text: 'Performing professionally since age 13',
      },
    ]
    return { highlights }
  },
})
</script>

<style lang="scss" scoped>
.about-text {
  color: rgba(0, 0, 0, 0.72);
  font-size: 1.05rem;
  line-height: 1.75;
  margin-bottom: 1rem;
}
.highlight-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: #1c1c22;
  margin-top: 0.75rem;
}
.highlight-text {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-top: 0.25rem;
}
</style>
