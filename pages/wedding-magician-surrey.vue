<template>
  <div>
    <page-hero src="/wedding-astonished-reaction.jpg" position="center 32%" height="560">
          <div>
            <h1 class="display-2 mb-4 white--text">Wedding Magician in Surrey</h1>
            <p class="headline mb-6 white--text">
              Award-winning close-up magic for Surrey weddings - drinks receptions,
              wedding breakfasts and evening entertainment. I know Surrey's best
              wedding venues inside out. Magic Circle member.
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
              I'm Callum McClure - an award-winning <strong>Surrey wedding magician</strong>
              and member of <strong>The Magic Circle</strong>. I grew up in Surrey,
              began my performing career here, and I know the county's wedding venues
              better than almost any other entertainer in the South East.
            </p>
            <p class="body-1 black--text">
              Surrey has some of England's most beautiful wedding venues,
              <strong>Loseley Park</strong>, <strong>Wotton House</strong>,
              <strong>Pennyhill Park</strong>, <strong>Great Fosters</strong>,
              <strong>Botley Hill Barn</strong> - and I've performed at many of them.
              I perform across the whole county: Guildford, Woking, Farnham, Dorking,
              Epsom, Reigate, Esher and beyond.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Surrey wedding venues I know well</h2>
            <v-list color="transparent">
              <v-list-item v-for="venue in venues" :key="venue.name">
                <v-list-item-icon><v-icon color="accent">mdi-map-marker</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ venue.name }}</v-list-item-title>
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
            <h2 class="display-1 mb-6 black--text">What I do at a Surrey wedding</h2>
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
            <h2 class="display-1 mb-4 black--text">How much does a Surrey wedding magician cost?</h2>
            <p class="body-1 black--text">
              Most professional wedding magicians in Surrey charge between
              <strong>£350 and £1,500</strong> depending on how long you'd like me to
              perform, which parts of the day you want covered, and your date. I'll give
              you a clear, no-obligation quote tailored to your wedding.
            </p>
            <p class="body-1 black--text">
              See also:
              <nuxt-link to="/wedding-magician">Wedding magician (full page)</nuxt-link>,
              <nuxt-link to="/areas/surrey">magician in Surrey</nuxt-link>,
              <nuxt-link to="/areas/guildford">magician in Guildford</nuxt-link>.
            </p>
            <div class="text-center mt-6">
              <v-btn large color="accent" dark nuxt to="/contact">
                Tell Me About Your Surrey Wedding
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
    name: 'Loseley Park, Guildford',
    detail:
      'Elizabethan manor house with walled gardens and a tithe barn - I performed here at a mayoral event and know it well.',
  },
  {
    name: 'Wotton House, Dorking',
    detail:
      'Country house hotel set in 13 acres near the North Downs - Italian gardens make for a stunning drinks reception setting.',
  },
  {
    name: 'Pennyhill Park, Bagshot',
    detail:
      'Five-star country estate near Bagshot - one of Surrey\'s most popular luxury wedding and corporate event venues.',
  },
  {
    name: 'Great Fosters, Egham',
    detail:
      'A Grade I listed Elizabethan manor close to Windsor - period rooms and formal gardens.',
  },
  {
    name: 'Botley Hill Barn, near Warlingham',
    detail:
      'Rustic converted barn on the Surrey Hills escarpment with panoramic views.',
  },
  {
    name: 'Across the county',
    detail:
      'Guildford, Woking, Farnham, Dorking, Epsom, Reigate, Leatherhead, Esher, Cobham and everywhere in between.',
  },
]

const slots = [
  {
    title: 'Drinks reception & photos',
    detail:
      "The most popular slot. While you're having portraits taken, I fill the natural lull - breaking the ice and keeping your guests entertained.",
  },
  {
    title: 'Wedding breakfast',
    detail:
      'Table-to-table magic between courses and around the speeches.',
  },
  {
    title: 'Evening reception',
    detail:
      'As evening guests arrive and the band or DJ warms up, close-up magic helps the room transition and keeps the energy going.',
  },
]

export default defineComponent({
  setup() {
    return { venues, slots }
  },
  head() {
    return buildHead({
      title: 'Wedding Magician Surrey | Hire a Close-Up Wedding Magician in Surrey | Callum McClure',
      description:
        'Award-winning Surrey wedding magician with deep local knowledge - Loseley Park, Wotton House, Pennyhill Park and beyond. Magic Circle member. Get a no-obligation quote.',
      path: '/wedding-magician-surrey',
      jsonLd: [
        service(
          'Wedding Magician Surrey',
          'Wedding Magician in Surrey',
          '/wedding-magician-surrey'
        ),
        localBusiness({ areaServed: 'Surrey', idSuffix: 'wedding-surrey' }),
        breadcrumb([
          { name: 'Wedding Magician Surrey', item: '/wedding-magician-surrey' },
        ]),
      ],
    })
  },
})
</script>
