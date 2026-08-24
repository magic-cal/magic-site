<template>
  <div>
    <page-hero
      src="/wedding-card-reveal.jpg"
      alt="Magician Callum McClure revealing a playing card to two seated guests at an outdoor wedding reception" position="center 35%">
          <div>
            <h1 class="display-2 mb-4 white--text">How Much Does a Wedding Magician Cost in the UK?</h1>
            <p class="headline mb-4 white--text">(2026 Guide)</p>
            <p class="body-1 white--text">
              By Callum McClure, Magic Circle magician - an honest guide with real UK price ranges.
            </p>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              Here's a straight answer, because most guides on this dance around it: a
              professional <nuxt-link to="/wedding-magician">wedding magician</nuxt-link>
              in the UK typically costs between <strong>£350 and £1,500</strong>. Where
              your quote lands depends mainly on three things - how long you book, which
              parts of your day you want covered, and your date and location.
            </p>
            <p class="body-1 black--text">
              I'm Callum McClure, an award-winning Magic Circle magician, and below I'll
              break down honestly what moves that price up or down so you can compare
              quotes properly.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Typical price ranges</h2>
            <v-list color="transparent">
              <v-list-item v-for="range in priceRanges" :key="range.slot">
                <v-list-item-icon><v-icon color="accent">mdi-currency-gbp</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold text-wrap">{{ range.slot }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ range.detail }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <p class="body-2 grey--text text--darken-1 mt-4">
              These reflect experienced, professional wedding magicians. You'll find
              cheaper online - but read the next section before you book on price alone.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">What affects the price?</h2>
            <v-list color="transparent">
              <v-list-item v-for="factor in factors" :key="factor.title">
                <v-list-item-icon><v-icon color="accent">mdi-information-outline</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">{{ factor.title }}</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">{{ factor.detail }}</v-list-item-subtitle>
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
            <h2 class="display-1 mb-4 black--text">A word on very cheap quotes</h2>
            <p class="body-1 black--text">
              If you're quoted under about £300, be cautious. That price point usually
              means someone very early in their career or doing it as a hobby - often
              without any formal training or accreditation. For a day you can't repeat,
              that's a real risk. A cheap quote is appealing right up until the result isn't.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-4 black--text">What should be included?</h2>
            <p class="body-1 black--text">
              A professional booking should cover all props and preparation, travel
              within a reasonable radius, a pre-wedding chat to plan timing, and the
              performance itself. Always ask for a fully inclusive price so you're
              comparing like for like.
            </p>

            <h2 class="display-1 mb-4 black--text mt-8">Is a wedding magician worth it?</h2>
            <p class="body-1 black--text">
              A magician is one of the few things that travels through your whole day,
              filling awkward gaps, breaking the ice between families meeting for the
              first time, and creating the photogenic reactions your photographer will
              love. Most couples tell me afterwards it was one of the most-talked-about
              parts of the day.
            </p>

            <h2 class="display-1 mb-4 black--text mt-8">How I price</h2>
            <p class="body-1 black--text">
              Rather than a rigid list, I give you a clear, no-obligation quote based on
              your date, venue and the coverage you'd like - no hidden extras.
            </p>
            <div class="text-center mt-6">
              <v-btn large color="accent" dark nuxt to="/contact">
                Get My No-Obligation Quote
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
            <p class="body-1 black--text mt-8">
              Read more: <nuxt-link to="/wedding-magician">wedding magician Surrey</nuxt-link>
              · <nuxt-link to="/about">about Callum</nuxt-link>
              · <nuxt-link to="/contact">get a quote</nuxt-link>
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
import { article, faqPage, breadcrumb } from '~/utils/schema'

const priceRanges = [
  {
    slot: 'Drinks reception only (~1–1.5 hours): roughly £350–£650',
    detail:
      'The classic slot, covering the lull while you have photos taken.',
  },
  {
    slot: 'Two parts of the day (~2–3 hours): roughly £600–£1,000',
    detail: 'e.g. drinks reception + wedding breakfast.',
  },
  {
    slot: 'Full coverage, longer performances or premium performers: £1,000–£1,500+',
    detail: 'For larger weddings or multiple slots across the full day.',
  },
]

const factors = [
  {
    title: 'Duration and coverage',
    detail: 'More hours and more parts of the day cost more.',
  },
  {
    title: 'Date',
    detail:
      'Summer Saturdays (June–August) and the December party season are peak and priced accordingly. A midweek or winter wedding can be better value.',
  },
  {
    title: 'Location and travel',
    detail:
      'London and the South East sit at the higher end; most magicians include travel within a radius and charge beyond it.',
  },
  {
    title: 'Experience and credentials',
    detail:
      'A full-time professional with awards, accreditation and years of weddings behind them costs more than a weekend hobbyist - for good reason.',
  },
]

const faqs = [
  {
    q: "What's the average cost of a wedding magician in the UK?",
    a: 'Most professional wedding magicians charge between £350 and £1,500, with many weddings landing in the £500–£900 range depending on duration and date.',
  },
  {
    q: 'Why are some magicians so much cheaper?',
    a: 'Usually because they\'re part-time or just starting out. Lower experience often means higher risk on reliability and quality - which matters a lot for a one-off day.',
  },
  {
    q: 'Does the price include travel?',
    a: 'It varies. Many magicians include travel within a set radius and charge per mile beyond it. Always confirm travel is included in your quote.',
  },
  {
    q: 'How far ahead should I book?',
    a: 'For summer Saturdays, 6–12 months is ideal as good magicians fill up fast. For other dates, get in touch - your date may still be free.',
  },
]

export default defineComponent({
  setup() {
    return { priceRanges, factors, faqs }
  },
  head() {
    return buildHead({
      title: 'How Much Does a Wedding Magician Cost in the UK? (2026 Guide)',
      description:
        'An honest guide to UK wedding magician prices - typical ranges, what affects the cost, and what\'s included. No vague non-answers. From a Magic Circle magician.',
      path: '/blog/how-much-does-a-wedding-magician-cost',
      ogType: 'article',
      jsonLd: [
        article({
          headline: 'How Much Does a Wedding Magician Cost in the UK? (2026 Guide)',
          description:
            'Honest UK wedding magician pricing guide - typical ranges, what moves the price, and how to get value.',
          url: '/blog/how-much-does-a-wedding-magician-cost',
          datePublished: '2026-01-01',
          dateModified: '2026-06-26',
        }),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([
          { name: 'Blog', item: '/blog' },
          {
            name: 'How Much Does a Wedding Magician Cost?',
            item: '/blog/how-much-does-a-wedding-magician-cost',
          },
        ]),
      ],
    })
  },
})
</script>
