<template>
  <div>
    <page-hero
      src="/wedding-astonished-reaction.jpg"
      alt="A bride and groom reacting in astonishment to close-up magic at their wedding reception" position="center 32%" height="560">
          <div>
            <h1 class="display-2 mb-4 white--text">Reviews &amp; Testimonials</h1>
            <p class="headline mb-4 white--text">
              What clients say about Callum McClure - award-winning close-up magician,
              Magic Circle member.
            </p>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col v-reveal cols="12" md="8" class="reveal">
            <v-row>
              <v-col
                v-for="(review, i) in reviews"
                :key="review.source"
                v-reveal
                cols="12"
                md="6"
                :class="`reveal reveal--d${(i % 2) + 1}`"
              >
                <v-card outlined class="pa-6 h-100">
                  <v-icon color="accent" large class="mb-2">{{ mdiFormatQuoteOpen }}</v-icon>
                  <p class="body-1 black--text font-italic mb-4">{{ review.quote }}</p>
                  <p class="body-2 grey--text text--darken-1 mb-0">
                    - <strong>{{ review.source }}</strong><span v-if="review.event">, {{ review.event }}</span>
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col v-reveal cols="12" md="8" class="text-center reveal">
            <h2 class="display-1 mb-4 black--text">Ready to create your own moment?</h2>
            <p class="body-1 black--text mb-6">
              I perform at
              <nuxt-link to="/wedding-magician">weddings</nuxt-link>,
              <nuxt-link to="/corporate-magician">corporate events</nuxt-link> and
              <nuxt-link to="/party-magician">private parties</nuxt-link>
              across <nuxt-link to="/areas/surrey">Surrey</nuxt-link> and
              <nuxt-link to="/areas/london">London</nuxt-link>.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact">
              Check My Availability
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mdiFormatQuoteOpen } from '@mdi/js'
import { buildHead } from '~/utils/seo'
import { breadcrumb } from '~/utils/schema'

const reviews = [
  {
    quote: 'The best magician I have ever seen.',
    source: 'BBC Surrey',
    event: '',
  },
  {
    quote:
      'Callum performed at our wedding drinks reception and was absolutely brilliant - he had everyone amazed and talking all evening.',
    source: 'Wedding Client',
    event: 'Surrey Wedding',
  },
  {
    quote:
      'We booked Callum for our company Christmas party and he was the highlight of the evening. Guests are still talking about it.',
    source: 'Corporate Client',
    event: 'Christmas Party',
  },
]

export default defineComponent({
  setup() {
    return { reviews, mdiFormatQuoteOpen }
  },
  head() {
    return buildHead({
      title: 'Reviews & Testimonials | Callum McClure Magician',
      description:
        "Read what clients say about Callum McClure - award-winning Magic Circle magician for weddings, corporate events and parties across Surrey & London.",
      path: '/testimonials',
      jsonLd: [breadcrumb([{ name: 'Testimonials', item: '/testimonials' }])],
    })
  },
})
</script>
