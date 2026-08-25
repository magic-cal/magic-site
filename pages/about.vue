<template>
  <div>
    <page-hero
      src="/skill.jpg"
      alt="Magician Callum McClure holding a fan of playing cards out to the audience on stage" position="center 28%">
          <div>
            <h1 class="display-2 mb-4 white--text">About Callum McClure</h1>
            <p class="headline mb-4 white--text">
              Magic Circle magician. Multi-award winner. 10+ years performing across the UK.
            </p>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-14">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="5" class="mb-8 mb-md-0">
            <v-img
              src="/headshot.jpg"
              alt="Portrait of magician Callum McClure, Magic Circle member"
              height="520"
              cover
              class="about-headshot elevation-5"
            />
          </v-col>
          <v-col cols="12" md="6" offset-md="1">
            <p class="body-1 black--text mb-4">
              I've been hooked on magic for as long as I can remember. I started learning
              seriously at the age of ten through The Magic Circle's youth initiative,
              turned professional at thirteen, and have spent the decade since amazing
              and amusing audiences across the UK.
            </p>
            <p class="body-1 black--text">
              My style combines classic sleight of hand with a modern, technological
              twist. It works equally well for a Fortune 500 conference and an
              intimate dinner party, because the astonishment is the same either way.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">The credentials</h2>
            <v-list color="transparent">
              <v-list-item v-for="cred in credentials" :key="cred.title">
                <v-list-item-icon><v-icon color="accent">mdi-check-decagram</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ cred.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ cred.detail }}</v-list-item-subtitle>
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
            <h2 class="display-1 mb-6 black--text">My style - classic magic, modern twist</h2>
            <p class="body-1 black--text">
              My speciality is <nuxt-link to="/close-up-magician">close-up magic</nuxt-link>:
              sleight of hand that happens inches from your eyes, in your own hands, with
              cards, coins and borrowed objects. It's the most powerful kind of magic
              precisely because there's no stage to hide behind - the impossible happens
              right there in front of you.
            </p>
            <p class="body-1 black--text">
              I also blend in a modern, technological twist that sets my act apart,
              especially at corporate events. The goal is always the same: to create
              genuine moments of wonder that get people talking, laughing and connecting.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Where it started</h2>
            <p class="body-1 black--text">
              I grew up in the Guildford area and my career was launched locally - one
              of my first big bookings was performing at the Mayor of Guildford's ball
              at <strong>Loseley Park</strong>. From those early Surrey events I've gone
              on to perform at some of the UK's most prestigious venues, but I still love
              a <nuxt-link to="/areas/surrey">Surrey wedding</nuxt-link> or a local
              party just as much.
            </p>
            <p class="body-1 black--text">
              I'm now based in London, performing across the capital and back into
              <nuxt-link to="/areas/guildford">Guildford</nuxt-link> and
              <nuxt-link to="/areas/surrey">Surrey</nuxt-link> regularly.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h2 class="display-1 mb-4 black--text">Booking me</h2>
            <p class="body-1 black--text">
              If you'd like award-winning close-up magic for your
              <nuxt-link to="/wedding-magician">wedding</nuxt-link>,
              <nuxt-link to="/corporate-magician">corporate event</nuxt-link> or
              <nuxt-link to="/party-magician">party</nuxt-link>,
              I'd love to hear about it.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact" class="mt-4">
              Check Availability &amp; Get a Quote
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { buildHead } from '~/utils/seo'
import { personProfile, breadcrumb } from '~/utils/schema'

const credentials = [
  {
    title: 'Member of The Magic Circle',
    detail:
      "The world's oldest and most prestigious magic society. I was mentored there as a young magician and was later invited back to teach and lecture the next generation.",
  },
  {
    title: 'Multi-award-winning',
    detail:
      "Including national recognition as a runner-up in The Magic Circle's young magician competition (the Mark Leveridge Cup), competing against the best young close-up magicians in the country.",
  },
  {
    title: 'Performed at the highest level',
    detail:
      'From the Royal Variety Performance after-show party to a feature for BBC News, alongside multi-national corporate events and hundreds of weddings and private parties.',
  },
]

export default defineComponent({
  setup() {
    return { credentials }
  },
  head() {
    return buildHead({
      title: 'About Callum McClure | Magic Circle Magician, Surrey & London',
      description:
        'Meet Callum McClure - multi-award-winning close-up magician and Magic Circle member. Performed for BBC News and at the Royal Variety after-show party. Based in London.',
      path: '/about',
      ogType: 'profile',
      jsonLd: [
        personProfile(),
        breadcrumb([{ name: 'About', item: '/about' }]),
      ],
    })
  },
})
</script>

<style scoped>
.about-headshot {
  border-radius: 4px;
}
</style>
