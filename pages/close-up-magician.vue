<template>
  <div>
    <page-hero
      src="/reception-card-trick.jpg"
      alt="Magician Callum McClure performing a card trick for a circle of guests at a drinks reception" position="center 30%">
          <div>
            <h1 class="display-2 mb-4 white--text">Close-Up Magician for Hire</h1>
            <p class="headline mb-6 white--text">
              The most powerful magic in the world - happening inches from your eyes,
              in your own hands. Member of The Magic Circle. Award-winning. London &amp; Surrey.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact">
              Check Availability
            </v-btn>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              Close-up magic - also called table magic, walkaround magic or mix-and-mingle
              magic - is magic that happens right there in front of you. No stage, no
              smoke, no distance. Cards, coins and borrowed objects do impossible things
              in your own hands, seconds after you've inspected them.
            </p>
            <p class="body-1 black--text">
              I'm Callum McClure, a <strong>close-up magician for hire</strong> across
              London and Surrey. I'm a member of <strong>The Magic Circle</strong> and a
              multi-award winner, and I've spent over a decade refining a style that
              combines classic sleight of hand with a modern, technological twist that
              audiences consistently describe as unlike anything they've seen before.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Why close-up magic works so well at events</h2>
            <v-list color="transparent">
              <v-list-item v-for="point in points" :key="point.title">
                <v-list-item-icon><v-icon color="accent">{{ mdiCheckCircle }}</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ point.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ point.detail }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Where close-up magic works best</h2>
            <p class="body-1 black--text">
              Close-up magic is uniquely versatile because it needs nothing but guests:
            </p>
            <v-row class="mt-2">
              <v-col
                v-for="use in useCases"
                :key="use.title"
                cols="12"
                sm="6"
              >
                <v-card outlined class="pa-4 h-100">
                  <p class="black--text font-weight-bold mb-1">{{ use.title }}</p>
                  <p class="black--text body-2 mb-2">{{ use.detail }}</p>
                  <nuxt-link :to="use.link">{{ use.linkText }}</nuxt-link>
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
          <v-col cols="12" md="8" class="text-center">
            <h2 class="display-1 mb-4 black--text">Hire a close-up magician</h2>
            <p class="body-1 black--text">
              Based in London and performing across Surrey, Guildford and the South East.
              Available for weddings, corporate events, parties and private celebrations.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact" class="mt-4">
              Get a No-Obligation Quote
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mdiCheckCircle } from '@mdi/js'
import { buildHead } from '~/utils/seo'
import { service, breadcrumb } from '~/utils/schema'

const points = [
  {
    title: 'No setup required',
    detail:
      'I carry everything in my pockets. No stage, no AV, no setup time - I can start within moments of arriving.',
  },
  {
    title: 'Scales to any group size',
    detail:
      'I move between tables and groups of 3–10 people, so it works just as well for 30 guests as for 300.',
  },
  {
    title: 'Interactive and personal',
    detail:
      'The magic happens in your guests\' hands, with their own objects. That intimacy is impossible on a stage.',
  },
  {
    title: 'Breaks the ice instantly',
    detail:
      'Shared astonishment is one of the fastest ways to get strangers talking - better than a name badge.',
  },
]

const useCases = [
  {
    title: 'Weddings',
    detail:
      'Drinks receptions, wedding breakfasts and evening receptions - fills every gap in your day.',
    link: '/wedding-magician',
    linkText: 'Wedding magician',
  },
  {
    title: 'Corporate events',
    detail:
      'Conferences, trade shows, Christmas parties and gala dinners.',
    link: '/corporate-magician',
    linkText: 'Corporate magician',
  },
  {
    title: 'Private parties',
    detail:
      'Birthdays, anniversaries, dinner parties, garden parties.',
    link: '/party-magician',
    linkText: 'Party magician',
  },
  {
    title: 'Across London & Surrey',
    detail:
      'Based in London, performing across Surrey, Guildford and the South East.',
    link: '/areas/london',
    linkText: 'Areas covered',
  },
]

export default defineComponent({
  setup() {
    return { points, useCases, mdiCheckCircle }
  },
  head() {
    return buildHead({
      title: 'Close-Up Magician for Hire | Callum McClure',
      description:
        'Hire an award-winning close-up magician in London & Surrey. Magic Circle member, 10+ years. Table magic, walkaround and mix-and-mingle for any event. Get a quote.',
      path: '/close-up-magician',
      jsonLd: [
        service(
          'Close-Up Magician',
          'Close-Up Magician for Hire',
          '/close-up-magician'
        ),
        breadcrumb([{ name: 'Close-Up Magician', item: '/close-up-magician' }]),
      ],
    })
  },
})
</script>
