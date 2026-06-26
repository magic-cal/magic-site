<template>
  <div>
    <v-sheet color="grey darken-4" dark class="py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="display-2 mb-4">Magician in Surrey</h1>
            <p class="headline mb-6">
              Award-winning close-up magic for weddings, corporate events and parties
              across Surrey. Magic Circle member.
            </p>
            <v-btn x-large color="accent" dark nuxt to="/contact">
              Get a Quote for Your Surrey Event
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
              I'm Callum McClure, an award-winning close-up magician and Magic Circle
              member performing right across Surrey and the South East. From the Surrey
              Hills to the county's grand country houses, I bring magic that turns any
              event into one your guests remember.
            </p>
            <p class="body-1 black--text">
              I grew up in the <nuxt-link to="/areas/guildford">Guildford</nuxt-link> area
              and Surrey has been the foundation of my performing career — I know the
              county, its venues and its events scene inside out.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Covering all of Surrey</h2>
            <p class="body-1 black--text">
              I regularly perform in <strong>Guildford, Woking, Farnham, Epsom,
              Dorking, Godalming</strong> and the surrounding towns. Surrey has some of
              the finest event venues in the country and I know many well — the Italian
              Gardens at <strong>Wotton House</strong> near Dorking,
              <strong>Pennyhill Park</strong>, <strong>Denbies Wine Estate</strong>,
              <strong>Gorse Hill</strong> near Woking, and the historic estates dotted
              through the Surrey Hills.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Every kind of event</h2>
            <v-list color="transparent">
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-ring</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Weddings</strong> — close-up magic for your drinks reception,
                    wedding breakfast or evening.
                    <nuxt-link to="/wedding-magician">Wedding magician →</nuxt-link>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-briefcase</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Corporate events</strong> — conferences, trade shows and
                    Christmas parties across Surrey and into London.
                    <nuxt-link to="/corporate-magician">Corporate magician →</nuxt-link>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-party-popper</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Parties</strong> — birthdays, anniversaries and private
                    celebrations.
                    <nuxt-link to="/party-magician">Party magician →</nuxt-link>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div class="text-center mt-8">
              <v-btn x-large color="accent" dark nuxt to="/contact">
                Get a Quote for Your Surrey Event
              </v-btn>
            </div>
            <p class="body-1 black--text mt-6">
              Also available in <nuxt-link to="/areas/guildford">Guildford</nuxt-link>
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

export default defineComponent({
  setup() {
    return {}
  },
  head() {
    return buildHead({
      title: 'Magician in Surrey | Weddings, Corporate Events & Parties',
      description:
        'Award-winning Surrey magician covering Guildford, Woking, Farnham, Epsom, Dorking & beyond. Magic Circle close-up magic for weddings, corporate events and parties.',
      path: '/areas/surrey',
      jsonLd: [
        localBusiness({ areaServed: 'Surrey', idSuffix: 'surrey' }),
        breadcrumb([{ name: 'Surrey', item: '/areas/surrey' }]),
      ],
    })
  },
})
</script>
