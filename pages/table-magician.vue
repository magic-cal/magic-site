<template>
  <div>
    <page-hero src="/reception-card-trick.jpg" position="center 30%">
          <div>
            <h1 class="display-2 mb-4 white--text">Table Magician for Hire - London &amp; Surrey</h1>
            <p class="headline mb-6 white--text">
              Close-up table magic for dinner parties, corporate dinners, wedding
              breakfasts and gala evenings. Jaw-dropping sleight of hand that
              happens right in front of your guests. Magic Circle member.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact">
              Hire a Table Magician
            </v-btn>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              Table magic is close-up magic performed at seated dining tables - and
              it's among the most impressive and personal forms of entertainment you
              can add to any dinner event. No stage, no distance, no screen between
              the magician and the audience. Just extraordinary sleight of hand
              happening in your guests' own hands and borrowed objects, with no room
              for tricks.
            </p>
            <p class="body-1 black--text">
              I'm Callum McClure - an award-winning <strong>table magician</strong>
              and member of <strong>The Magic Circle</strong>. I perform at the
              table for groups of four to twelve guests at a time, moving through
              dining rooms at corporate dinners, gala evenings, wedding breakfasts
              and private dinner parties across London and Surrey.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">What table magic looks like in practice</h2>
            <p class="body-1 black--text">
              I arrive at the table, introduce myself briefly, and then perform a
              series of connected sleight-of-hand routines - typically five to ten
              minutes per table. Cards, coins, everyday objects: everything happens
              right there, in people's own hands, with objects they can examine.
              There's nowhere to hide and nothing is prepared - the magic is real
              technique, not props.
            </p>
            <p class="body-1 black--text">
              I then move to the next table and repeat, working the room in a circuit.
              For a seated dinner of ten tables, most guests will have their table
              visited within an hour and a half.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Events where table magic works best</h2>
            <v-list color="transparent">
              <v-list-item v-for="ev in events" :key="ev.title">
                <v-list-item-icon><v-icon color="accent">mdi-check-circle</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ ev.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ ev.detail }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div class="text-center mt-8">
              <v-btn large color="accent" dark nuxt to="/contact">
                Book a Table Magician
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-10">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <p class="body-2 grey--text">
              See also:
              <nuxt-link to="/after-dinner-magician">After dinner magician</nuxt-link> ·
              <nuxt-link to="/gala-dinner-magician">Gala dinner magician</nuxt-link> ·
              <nuxt-link to="/close-up-magician">Close-up magician</nuxt-link> ·
              <nuxt-link to="/corporate-magician">Corporate magician</nuxt-link>
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
import { service, breadcrumb } from '~/utils/schema'

const events = [
  {
    title: 'Corporate dinner parties',
    detail:
      'Client dinners, team meals and corporate entertainment evenings - close-up table magic impresses clients in a way that a venue or a menu alone cannot.',
  },
  {
    title: 'Wedding breakfasts',
    detail:
      'Between the speeches and the first dance, table magic keeps the energy up and gives every table a personal moment to remember.',
  },
  {
    title: 'Gala dinners & black tie events',
    detail:
      'Formal fundraising galas, industry awards and charity balls - table magic fills the gaps in the programme and keeps the room animated.',
  },
  {
    title: 'Private dinner parties',
    detail:
      'Intimate home dinners and restaurant private hires - for a group of eight or a party of eighty.',
  },
  {
    title: 'Restaurant private dining',
    detail:
      'Private dining room hire for birthdays, anniversaries and celebrations - table magic makes the occasion feel genuinely special.',
  },
]

export default defineComponent({
  setup() {
    return { events }
  },
  head() {
    return buildHead({
      title: 'Table Magician for Hire London & Surrey | Close-Up Table Magic | Callum McClure',
      description:
        'Award-winning table magician for corporate dinners, gala evenings, wedding breakfasts and private dinner parties in London & Surrey. Magic Circle member. Get a quote.',
      path: '/table-magician',
      jsonLd: [
        service(
          'Table Magician',
          'Table Magician for Hire London & Surrey',
          '/table-magician'
        ),
        breadcrumb([{ name: 'Table Magician', item: '/table-magician' }]),
      ],
    })
  },
})
</script>
