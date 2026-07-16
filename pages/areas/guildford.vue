<template>
  <div>
    <page-hero src="/perf3.jpg">
          <div>
            <h1 class="display-2 mb-4 white--text">Magician in Guildford</h1>
            <p class="headline mb-6 white--text">
              Award-winning close-up magic for Guildford weddings, corporate events
              and parties. Magic Circle member.
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
              I'm Callum McClure - an award-winning close-up magician and Magic Circle
              member. Guildford is where my story started: I grew up in the area, I
              learned my craft here, and one of my first major bookings was performing
              at the Mayor's ball at <strong>Loseley Park</strong>.
            </p>
            <p class="body-1 black--text">
              That local connection has never left. I know Guildford's venues well and
              I perform at events across the GU postcode areas regularly, bringing
              close-up magic that happens inches from your guests' eyes, in their own
              hands.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Guildford venues I know well</h2>
            <p class="body-1 black--text">
              I've performed across Guildford's best-loved settings - from the Tithe
              Barn and walled garden at <strong>Loseley Park</strong> just south of town,
              to the <strong>Harbour Hotel</strong> and <strong>Mandolay Hotel</strong>
              in the centre, <strong>Barnett Hill</strong> in its 26 acres of gardens,
              and country settings like <strong>Gate Street Barn</strong> and
              <strong>De Vere Horsley Estate</strong> nearby.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Magic for any Guildford occasion</h2>
            <v-row>
              <v-col v-for="svc in services" :key="svc.title" cols="12" sm="4" class="text-center">
                <v-card flat class="pa-4">
                  <v-icon color="accent" large>{{ svc.icon }}</v-icon>
                  <p class="black--text font-weight-bold mt-2 mb-1">{{ svc.title }}</p>
                  <p class="black--text body-2 mb-2">{{ svc.detail }}</p>
                  <nuxt-link :to="svc.link">Learn more</nuxt-link>
                </v-card>
              </v-col>
            </v-row>
            <div class="text-center mt-8">
              <v-btn large color="accent" dark nuxt to="/contact">
                Check My Availability for Your Guildford Event
              </v-btn>
            </div>
            <p class="body-1 black--text mt-6">
              Also performing across <nuxt-link to="/areas/surrey">all of Surrey</nuxt-link>
              and <nuxt-link to="/areas/london">London</nuxt-link>.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { buildHead } from '~/utils/seo'
import { localBusiness, breadcrumb } from '~/utils/schema'

const services = [
  {
    icon: 'mdi-ring',
    title: 'Weddings',
    detail: 'Close-up magic for drinks receptions, wedding breakfasts and evening receptions.',
    link: '/wedding-magician',
  },
  {
    icon: 'mdi-briefcase',
    title: 'Corporate Events',
    detail: 'Conferences, trade shows and Christmas parties across Guildford.',
    link: '/corporate-magician',
  },
  {
    icon: 'mdi-party-popper',
    title: 'Parties',
    detail: 'Birthdays, anniversaries and private celebrations in the GU area.',
    link: '/party-magician',
  },
]

export default defineComponent({
  setup() {
    return { services }
  },
  head() {
    return buildHead({
      title: 'Magician in Guildford | Award-Winning Close-Up Magic',
      description:
        'Local Guildford magician for weddings, corporate events & parties. Magic Circle member with roots in the GU area. Award-winning close-up magic - get a quote.',
      path: '/areas/guildford',
      jsonLd: [
        localBusiness({ areaServed: 'Guildford', idSuffix: 'guildford' }),
        breadcrumb([
          { name: 'Surrey', item: '/areas/surrey' },
          { name: 'Guildford', item: '/areas/guildford' },
        ]),
      ],
    })
  },
})
</script>
