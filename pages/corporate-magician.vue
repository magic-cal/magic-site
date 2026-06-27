<template>
  <div>
    <v-sheet color="grey darken-4" dark class="py-16">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="display-2 mb-4">Corporate Magician for Surrey &amp; London Events</h1>
            <p class="headline mb-6">
              Award-winning close-up magic for conferences, trade shows, client dinners
              and Christmas parties. Magic Circle member. 10+ years.
            </p>
            <v-btn x-large color="accent" dark nuxt to="/contact">
              Enquire About Your Event
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
              Corporate events live and die on one thing: whether people actually talk
              to each other. A magician fixes that faster than anything on the agenda.
            </p>
            <p class="body-1 black--text">
              I'm Callum McClure — an award-winning <strong>corporate magician</strong>
              and Magic Circle member — and I get rooms full of colleagues, clients and
              strangers laughing, mixing and genuinely enjoying themselves within
              minutes. I've performed for BBC News, for multi-national companies across
              the UK, and at the Royal Variety Performance after-show party.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Events I perform at</h2>
            <v-list color="transparent">
              <v-list-item v-for="ev in events" :key="ev.title">
                <v-list-item-icon><v-icon color="accent">mdi-check-circle</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ ev.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ ev.detail }}</v-list-item-subtitle>
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
            <h2 class="display-1 mb-6 black--text">Why companies book me</h2>
            <v-list color="transparent">
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-star</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Member of The Magic Circle</strong>, multi-award-winning,
                    with 10+ years performing — including for <strong>BBC News</strong>
                    and at multi-national corporate events.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-devices</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>A modern act with a technological twist</strong> — I blend
                    classic sleight of hand with technology, which lands especially well
                    with corporate audiences.
                    <nuxt-link to="/close-up-magician">Learn more →</nuxt-link>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-briefcase-check</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Polished and low-maintenance</strong> — I arrive early, need
                    no stage or setup, and read the room so the magic enhances your event
                    rather than interrupting it.
                  </v-list-item-subtitle>
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
            <h2 class="display-1 mb-4 black--text">Branded &amp; bespoke magic</h2>
            <p class="body-1 black--text">
              For trade shows and launches I can tailor routines around your brand,
              product or key message — a card reveal that lands on your tagline, a
              prediction that names your product. It turns "we had a magician" into
              "did you see what they did with our new product?"
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-4 black--text">Covering Surrey, London &amp; beyond</h2>
            <p class="body-1 black--text">
              Based in London, I regularly perform at corporate events across Surrey and
              into the capital — including venues like <strong>Pennyhill Park</strong>
              and <strong>Wotton House</strong> — and travel nationwide for the right event.
            </p>
            <p class="body-1 black--text">
              See also:
              <nuxt-link to="/christmas-party-magician">Christmas party magician</nuxt-link>,
              <nuxt-link to="/areas/surrey">magician in Surrey</nuxt-link>,
              <nuxt-link to="/areas/london">magician in London</nuxt-link>.
            </p>
            <div class="text-center mt-8">
              <v-btn x-large color="accent" dark nuxt to="/contact">
                Let's Make Your Event Memorable
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Frequently asked questions</h2>
            <v-expansion-panels light>
              <v-expansion-panel v-for="faq in faqs" :key="faq.q">
                <v-expansion-panel-header class="black--text font-weight-bold">
                  {{ faq.q }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="black--text">
                  {{ faq.a }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { buildHead } from '~/utils/seo'
import { service, faqPage, breadcrumb } from '~/utils/schema'

const events = [
  {
    title: 'Conferences & networking events',
    detail:
      'I break the ice during registration and breaks, giving people an easy reason to start a conversation.',
  },
  {
    title: 'Trade shows & exhibitions',
    detail:
      'Magic at your stand stops people walking past. I can weave your product or message into a routine to make it memorable.',
  },
  {
    title: 'Client dinners & gala evenings',
    detail:
      'Table-to-table magic between courses that impresses the people you most want to impress.',
  },
  {
    title: 'Christmas parties',
    detail:
      "The season's busiest events — from large company parties to works nights out. See my Christmas party magician page for more.",
  },
  {
    title: 'Product launches & brand activations',
    detail: 'Bespoke magic built around your message.',
  },
]

const faqs = [
  {
    q: 'How long do you perform at a corporate event?',
    a: 'Typically one to three hours of mix-and-mingle close-up magic, depending on guest numbers and the format. We\'ll scope it to your schedule.',
  },
  {
    q: 'Can you tie the magic to our brand or product?',
    a: 'Absolutely — bespoke, branded routines are one of the most popular things I\'m asked for at trade shows and launches.',
  },
  {
    q: 'Do you need a stage or AV?',
    a: 'No. Close-up magic is fully self-contained — I just need to move among your guests.',
  },
  {
    q: 'Do you cover London as well as Surrey?',
    a: 'Yes, regularly. I\'m London-based and Surrey corporate events are also a big part of what I do.',
  },
]

export default defineComponent({
  setup() {
    return { events, faqs }
  },
  head() {
    return buildHead({
      title: 'Corporate Magician London & Surrey | Christmas Party Magician | Callum McClure',
      description:
        'Award-winning corporate magician for London & Surrey — conferences, trade shows, client dinners & Christmas parties. Magic Circle member. Close-up magic that gets people talking.',
      path: '/corporate-magician',
      jsonLd: [
        service(
          'Corporate Magician',
          'Corporate Magician Surrey',
          '/corporate-magician'
        ),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([
          { name: 'Corporate Magician', item: '/corporate-magician' },
        ]),
      ],
    })
  },
})
</script>
