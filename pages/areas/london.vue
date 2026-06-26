<template>
  <div>
    <v-sheet color="grey darken-4" dark class="py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="display-2 mb-4">Magician in London</h1>
            <p class="headline mb-6">
              Award-winning London close-up magician for weddings, corporate events
              and private parties. Magic Circle member. 10+ years.
            </p>
            <v-btn x-large color="accent" dark nuxt to="/contact">
              Enquire About Your London Event
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              I'm Callum McClure — an award-winning Magic Circle magician based in
              London. The capital is where I live and where I perform regularly, from
              private members' clubs and hotel ballrooms to trade show floors and
              riverside venues.
            </p>
            <p class="body-1 black--text">
              My London highlights include performing at the
              <strong>Royal Variety Performance after-show party</strong> and a feature
              for <strong>BBC News</strong>, alongside corporate events for multi-national
              companies across the city.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">London weddings, corporate events &amp; parties</h2>
            <p class="body-1 black--text">
              Close-up magic suits London events perfectly — it needs no stage or setup,
              just guests to amaze. I perform at city venues, hotels and private members'
              spaces for all kinds of events:
            </p>
            <v-list color="transparent">
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-ring</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>London weddings</strong> — drinks receptions, wedding
                    breakfasts and evening entertainment.
                    <nuxt-link to="/wedding-magician">Wedding magician →</nuxt-link>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-briefcase</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Corporate events</strong> — conferences, product launches,
                    trade shows and Christmas parties.
                    <nuxt-link to="/corporate-magician">Corporate magician →</nuxt-link>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-party-popper</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Private parties</strong> — birthdays, anniversaries and
                    private celebrations in London venues and homes.
                    <nuxt-link to="/party-magician">Party magician →</nuxt-link>
                  </v-list-item-subtitle>
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
            <h2 class="display-1 mb-4 black--text">A modern act for a modern city</h2>
            <p class="body-1 black--text">
              My blend of classic sleight of hand and a technological twist lands
              especially well with London corporate audiences, and I can tailor branded
              routines for trade shows and product launches.
              <nuxt-link to="/corporate-magician">Learn more about corporate magic →</nuxt-link>
            </p>
            <p class="body-1 black--text">
              Also covering <nuxt-link to="/areas/surrey">Surrey</nuxt-link> and
              <nuxt-link to="/areas/guildford">Guildford</nuxt-link> regularly.
            </p>
            <div class="text-center mt-8">
              <v-btn x-large color="accent" dark nuxt to="/contact">
                Enquire About Your London Event
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
import { localBusiness, breadcrumb } from '~/utils/schema'

const londonSchema = () => {
  const base = localBusiness()
  return {
    ...base,
    areaServed: 'London',
    '@id': 'https://www.magic-cal.co.uk/#business-london',
  }
}

export default defineComponent({
  setup() {
    return {}
  },
  head() {
    return buildHead({
      title: 'Magician in London | Award-Winning Close-Up Magic for Hire',
      description:
        'London close-up magician for weddings, corporate events and parties. Magic Circle member, performed for BBC News & the Royal Variety after-show party. Get a quote.',
      path: '/areas/london',
      jsonLd: [
        londonSchema(),
        breadcrumb([{ name: 'London', item: '/areas/london' }]),
      ],
    })
  },
})
</script>
