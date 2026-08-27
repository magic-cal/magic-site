<template>
  <div>
    <page-hero
      src="/wedding-card-reveal.jpg"
      alt="Magician Callum McClure revealing a playing card to two seated guests at an outdoor wedding reception" position="center 35%">
          <div>
            <h1 class="display-2 mb-4 white--text">Wedding Magician in Surrey &amp; Guildford</h1>
            <p class="headline mb-6 white--text">
              Award-winning close-up magic for your drinks reception, wedding breakfast
              and evening reception. Member of The Magic Circle.
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
              There's a moment at every wedding when your guests are between things:
              photos are being taken, the receiving line has wound down, and people who've
              never met are standing in small, slightly awkward clusters. That's the
              moment I'm made for.
            </p>
            <p class="body-1 black--text">
              I'm Callum McClure, an award-winning close-up magician and a member of
              <strong>The Magic Circle</strong>. For over a decade I've turned those
              in-between moments into the parts of the day your guests won't stop talking
              about - weaving between groups with sleight of hand that happens inches from
              their eyes, in their own hands, with their own rings and borrowed objects.
            </p>
            <p class="body-1 black--text">
              As a <strong>wedding magician in Surrey</strong> I know the county's best
              venues well and perform at weddings across Guildford, Surrey and London.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Magic that fits your day, not the other way around</h2>
            <p class="body-1 black--text mb-4">I perform during whichever part of your day needs lifting:</p>
            <v-list color="transparent">
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">{{ mdiCheckCircle }}</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">Drinks reception / photos</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">
                    The classic slot. While you're away having portraits taken, I keep
                    everyone entertained and relaxed, breaking the ice between families
                    meeting for the first time.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">{{ mdiCheckCircle }}</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">Wedding breakfast</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">
                    Short table sets between courses keep the energy up without ever
                    getting in the way of service.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">{{ mdiCheckCircle }}</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="black--text font-weight-bold">Evening reception</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap black--text">
                    As new guests arrive, I help the room warm up again and the party
                    find its feet.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <p class="body-1 black--text mt-4">
              Many couples book me across two of these slots. We'll plan the timing
              together so coverage feels effortless on the day.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Why couples book me</h2>
            <v-list color="transparent">
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">{{ mdiStar }}</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Member of The Magic Circle</strong> - the world's most
                    prestigious magic society.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">{{ mdiTrophy }}</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Multi-award-winning</strong> - including national recognition
                    as a runner-up in The Magic Circle's close-up magic competition, the
                    Mark Leveridge Cup.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">{{ mdiCalendarCheck }}</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>10+ years performing</strong> - at everything from intimate
                    parties to the Royal Variety Performance after-show party and for BBC
                    News.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-img src="/wedding-astonished-reaction.jpg" height="400" cover position="center 32%" />

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Surrey weddings I know well</h2>
            <p class="body-1 black--text">
              I regularly perform across Surrey and the South East, and I know many of
              the county's best venues inside out - from the Tithe Barn and walled garden
              at <strong>Loseley Park</strong> just south of Guildford, to the Italian
              Gardens at <strong>Wotton House</strong> near Dorking, and country-house
              settings like <strong>Pennyhill Park</strong>,
              <strong>Great Fosters</strong> and <strong>Botley Hill Barn</strong>.
              Wherever you're marrying - Guildford, Woking, Farnham, Dorking, Epsom or
              further into London - I'll come to you.
            </p>
            <p class="body-1 black--text mt-4">
              See also:
              <nuxt-link to="/wedding-magician-surrey">wedding magician Surrey</nuxt-link>,
              <nuxt-link to="/wedding-magician-london">wedding magician London</nuxt-link>,
              <nuxt-link to="/areas/surrey">magician in Surrey</nuxt-link>,
              <nuxt-link to="/areas/guildford">magician in Guildford</nuxt-link>,
              <nuxt-link to="/close-up-magician">close-up magic explained</nuxt-link>.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-4 black--text">How much does a wedding magician cost?</h2>
            <p class="body-1 black--text">
              Most professional wedding magicians in the UK charge somewhere between
              £350 and £1,500, depending on how long you'd like me to perform, which
              parts of the day you want covered, and your date and location. Rather than
              a fixed price list, I'll give you a clear, no-obligation quote tailored to
              your day.
            </p>
            <div class="text-center mt-6">
              <v-btn outlined color="accent" nuxt to="/contact">
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
            <div class="text-center mt-8">
              <v-btn large color="accent" dark nuxt to="/contact">
                Tell Me About Your Wedding
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
import { mdiCalendarCheck, mdiCheckCircle, mdiStar, mdiTrophy } from '@mdi/js'
import { buildHead } from '~/utils/seo'
import { service, faqPage, breadcrumb } from '~/utils/schema'

const faqs = [
  {
    q: 'When during the wedding should the magician perform?',
    a: 'The drinks reception and photo period is the most popular slot, because it fills the natural lull while you\'re having portraits taken. The wedding breakfast and evening reception also work brilliantly. We\'ll choose what suits your running order.',
  },
  {
    q: 'How many guests can you entertain?',
    a: 'Close-up magic scales beautifully - I move between small groups, so it works just as well for an intimate 40-guest wedding as for 150+. For very large weddings I can advise on timing so no group gets missed.',
  },
  {
    q: 'Do you travel outside Surrey?',
    a: 'Yes. I\'m based in London and perform across Surrey, London and the South East, and I\'m happy to travel further for the right event.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'Summer Saturdays book up fastest, often 6–12 months ahead. If your date is close, still get in touch - I may well be free.',
  },
]

export default defineComponent({
  setup() {
    return { faqs, mdiCalendarCheck, mdiCheckCircle, mdiStar, mdiTrophy }
  },
  head() {
    return buildHead({
      title: 'Wedding Magician Surrey | Award-Winning Close-Up Magic',
      description:
        'Award-winning Magic Circle wedding magician covering Surrey, Guildford & the South East. Mix-and-mingle close-up magic that gets your guests talking. Get a quote.',
      path: '/wedding-magician',
      jsonLd: [
        service('Wedding Magician', 'Wedding Magician Surrey', '/wedding-magician'),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([{ name: 'Wedding Magician', item: '/wedding-magician' }]),
      ],
    })
  },
})
</script>
