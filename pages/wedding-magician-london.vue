<template>
  <div>
    <page-hero
      src="/wedding-card-reveal.jpg"
      alt="Magician Callum McClure revealing a playing card to two seated guests at an outdoor wedding reception" position="center 35%">
          <div>
            <h1 class="display-2 mb-4 white--text">Wedding Magician in London</h1>
            <p class="headline mb-6 white--text">
              Award-winning close-up magic for London weddings - drinks receptions,
              wedding breakfasts and evening entertainment. Magic Circle member.
              Based in London.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact">
              Check My Availability
            </v-btn>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              I'm Callum McClure - a London-based close-up magician and member of
              <strong>The Magic Circle</strong>. London is where I live and where I
              perform regularly, and I've been making London weddings more magical for
              over a decade - from Georgian ballrooms in Kensington to industrial
              conversions in Bermondsey and rooftop venues above the City.
            </p>
            <p class="body-1 black--text">
              My <strong>London wedding magic</strong> is entirely close-up and
              mix-and-mingle: I weave between your guests during the drinks reception
              and photos, perform at tables during the wedding breakfast, and keep
              the energy going as the evening begins. No stage. No microphone. Just
              astonishing sleight of hand that happens inches from your guests' eyes,
              in their own hands, with their own rings.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">London wedding venues I perform at</h2>
            <p class="body-1 black--text">
              London has an extraordinary range of wedding venues, and close-up magic
              suits all of them - from grand hotel ballrooms to intimate warehouse
              spaces. Some of the London venue types and areas I cover regularly:
            </p>
            <v-list color="transparent">
              <v-list-item v-for="venue in venues" :key="venue.area">
                <v-list-item-icon><v-icon color="accent">mdi-map-marker</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ venue.area }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ venue.detail }}</v-list-item-subtitle>
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
            <h2 class="display-1 mb-6 black--text">What I do at a London wedding</h2>
            <v-list color="transparent">
              <v-list-item v-for="slot in slots" :key="slot.title">
                <v-list-item-icon><v-icon color="accent">mdi-ring</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ slot.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ slot.detail }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-4 black--text">Why London couples book me</h2>
            <v-list color="transparent">
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-star</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Member of The Magic Circle</strong> - the world's most
                    prestigious magic society. No travel fees for London venues.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-trophy</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Multi-award-winning</strong>, including recognition as a
                    runner-up in The Magic Circle's close-up magic competition, the
                    Mark Leveridge Cup.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-calendar-check</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>10+ years performing</strong> in London - at everything from
                    intimate city weddings to the Royal Variety Performance after-show party.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <p class="body-1 black--text mt-4">
              See also:
              <nuxt-link to="/wedding-magician">Wedding magician (full page)</nuxt-link>,
              <nuxt-link to="/areas/london">magician in London</nuxt-link>,
              <nuxt-link to="/wedding-magician-surrey">wedding magician Surrey</nuxt-link>.
            </p>
            <div class="text-center mt-6">
              <v-btn large color="accent" dark nuxt to="/contact">
                Tell Me About Your London Wedding
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { buildHead } from '~/utils/seo'
import { service, localBusiness, breadcrumb } from '~/utils/schema'

const venues = [
  {
    area: 'Mayfair & Kensington',
    detail:
      'Grand hotel ballrooms and private members clubs - The Dorchester, Claridges, The Milestone.',
  },
  {
    area: 'Southbank & Bankside',
    detail:
      'Industrial-chic and riverside venues - Tate Modern, Oxo Tower, Sea Containers.',
  },
  {
    area: 'City of London',
    detail:
      'Georgian livery halls, rooftop spaces and converted commercial buildings across EC1–EC4.',
  },
  {
    area: 'East London',
    detail:
      'Warehouse conversions and creative spaces in Shoreditch, Hackney and Dalston.',
  },
  {
    area: 'North & West London',
    detail:
      'Country-house hotels, private estates and garden venues in Hampstead, Richmond and Chiswick.',
  },
  {
    area: 'South London',
    detail:
      'Brixton, Peckham and Greenwich venues as well as the Royal Arsenal and Cutty Sark.',
  },
]

const slots = [
  {
    title: 'Drinks reception & photos',
    detail:
      "The most popular slot - while you're having portraits taken, I keep your guests entertained and the room warm.",
  },
  {
    title: 'Wedding breakfast',
    detail:
      'Table-to-table magic between courses and speeches.',
  },
  {
    title: 'Evening reception',
    detail:
      'As evening guests arrive, I help the room find its feet again - perfect for the gap before the band or DJ.',
  },
]

export default defineComponent({
  setup() {
    return { venues, slots }
  },
  head() {
    return buildHead({
      title: 'Wedding Magician London | Close-Up Magic | Callum McClure',
      description:
        'London-based close-up wedding magician for drinks receptions, wedding breakfasts and evening entertainment. Magic Circle member. 10+ years at London venues. Get a quote.',
      path: '/wedding-magician-london',
      jsonLd: [
        service(
          'Wedding Magician London',
          'Wedding Magician in London',
          '/wedding-magician-london'
        ),
        localBusiness({ areaServed: 'London', idSuffix: 'wedding-london' }),
        breadcrumb([
          { name: 'Wedding Magician London', item: '/wedding-magician-london' },
        ]),
      ],
    })
  },
})
</script>
