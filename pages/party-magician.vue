<template>
  <div>
    <page-hero src="/perf3.jpg">
          <div>
            <h1 class="display-2 mb-4 white--text">Party Magician in Surrey</h1>
            <p class="headline mb-6 white--text">
              Award-winning close-up magic for birthdays, anniversaries and private
              celebrations across Surrey &amp; London. Magic Circle member.
            </p>
            <v-btn large color="accent" dark nuxt to="/contact">
              Get a Quick Quote
            </v-btn>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <p class="body-1 black--text">
              Every great party needs a moment people remember the next morning. I'm
              Callum McClure - an award-winning <strong>party magician in Surrey</strong>
              and Magic Circle member - and I create those moments, mingling through your
              guests with magic that happens right in their hands and gets the whole room
              talking.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h2 class="display-1 mb-6 black--text">Parties I bring magic to</h2>
            <v-list color="transparent">
              <v-list-item v-for="ev in events" :key="ev">
                <v-list-item-icon><v-icon color="accent">mdi-check-circle</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">{{ ev }}</v-list-item-subtitle>
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
            <h2 class="display-1 mb-6 black--text">Why I'm the right choice for your party</h2>
            <v-list color="transparent">
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-star</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Member of The Magic Circle</strong>, multi-award-winning,
                    10+ years performing.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-account-group</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>Magic for all ages</strong> - close-up magic is interactive
                    and genuinely amazing whether your guests are 8 or 80.
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon><v-icon color="accent">mdi-bag-personal</v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap black--text">
                    <strong>No setup, no fuss</strong> - I bring everything in my pockets
                    and adapt to any space, indoors or out.
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
            <h2 class="display-1 mb-4 black--text">Available across Surrey &amp; London</h2>
            <p class="body-1 black--text">
              Based in London and performing at parties across Surrey - Guildford,
              Woking, Farnham, Epsom, Dorking and beyond - I'm always happy to travel.
            </p>
            <p class="body-1 black--text">
              See also:
              <nuxt-link to="/christmas-party-magician">Christmas party magician</nuxt-link>,
              <nuxt-link to="/areas/guildford">magician in Guildford</nuxt-link>,
              <nuxt-link to="/areas/surrey">magician in Surrey</nuxt-link>.
            </p>
            <div class="text-center mt-8">
              <v-btn large color="accent" dark nuxt to="/contact">
                Tell Me About Your Party
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="white" class="py-12">
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
  'Milestone birthdays - 18ths, 30ths, 40ths, 50ths and beyond.',
  'Anniversaries & family celebrations - magic that works for every age in the room.',
  'Private dinner parties - intimate, jaw-dropping close-up magic between courses.',
  'Garden parties & summer gatherings - I appear among your guests and start the wonder.',
  'Hen & stag celebrations - a brilliant, unexpected ice-breaker.',
]

const faqs = [
  {
    q: 'Is close-up magic suitable for all ages?',
    a: "Yes - that's its great strength. It's interactive, friendly and amazes children and adults alike, which makes it perfect for mixed-age parties.",
  },
  {
    q: 'How long do you perform for at a party?',
    a: "Usually one to two hours of walkaround magic, though it's flexible. Tell me about your party and I'll suggest what works.",
  },
  {
    q: 'How much does a party magician cost?',
    a: 'It depends on duration, date and location - get in touch and I\'ll send a quick, no-obligation quote.',
  },
  {
    q: 'Do you need any space or equipment?',
    a: "None. I work entirely close-up, moving among your guests, so any venue works.",
  },
]

export default defineComponent({
  setup() {
    return { events, faqs }
  },
  head() {
    return buildHead({
      title: 'Party Magician Surrey | Birthdays, Private Parties & More',
      description:
        'Hire an award-winning party magician in Surrey for birthdays, anniversaries and private parties. Close-up magic that gets every guest involved. Get a quick quote.',
      path: '/party-magician',
      jsonLd: [
        service('Party Magician', 'Party Magician Surrey', '/party-magician'),
        faqPage(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        breadcrumb([{ name: 'Party Magician', item: '/party-magician' }]),
      ],
    })
  },
})
</script>
