<template>
  <div>
    <page-hero
      src="/reception-guest-laughing.jpg"
      alt="A guest laughing as magician Callum McClure performs close-up magic at an outdoor drinks reception" position="center 28%">
          <div>
            <h1 class="display-2 mb-4 white--text">Magic Blog</h1>
            <p class="headline mb-4 white--text">
              Tips, guides and insider knowledge from a Magic Circle magician.
            </p>
          </div>
        </page-hero>

    <v-sheet color="white" class="py-12">
      <v-container>
        <v-row justify="center">
          <v-col v-reveal cols="12" md="8" class="reveal">
            <v-row>
              <v-col
                v-for="(post, i) in posts"
                :key="post.slug"
                v-reveal
                cols="12"
                sm="6"
                :class="`reveal reveal--d${(i % 3) + 1}`"
              >
                <v-card outlined class="pa-6 h-100 hover-lift">
                  <p class="caption grey--text mb-1">{{ post.date }}</p>
                  <h2 class="title black--text mb-2">{{ post.title }}</h2>
                  <p class="body-2 black--text mb-4">{{ post.excerpt }}</p>
                  <nuxt-link :to="post.slug">Read more</nuxt-link>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <v-sheet color="grey lighten-4" class="py-8">
      <v-container>
        <v-row justify="center">
          <v-col v-reveal cols="12" md="8" class="text-center reveal">
            <p class="body-1 black--text">
              Looking to hire a magician?
              <nuxt-link to="/wedding-magician">Wedding magician</nuxt-link> ·
              <nuxt-link to="/corporate-magician">Corporate magician</nuxt-link> ·
              <nuxt-link to="/party-magician">Party magician</nuxt-link>
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
import { breadcrumb } from '~/utils/schema'

const posts = [
  {
    title: 'How Much Does a Wedding Magician Cost in the UK? (2026 Guide)',
    slug: '/blog/how-much-does-a-wedding-magician-cost',
    date: 'June 2026',
    excerpt:
      'An honest guide to UK wedding magician prices - typical ranges, what affects the cost, and what to look for when comparing quotes.',
  },
]

export default defineComponent({
  setup() {
    return { posts }
  },
  head() {
    return buildHead({
      title: 'Magic Blog | Callum McClure Magician',
      description:
        'Guides and advice from a Magic Circle magician - wedding entertainment, corporate magic, pricing and more.',
      path: '/blog',
      jsonLd: [breadcrumb([{ name: 'Blog', item: '/blog' }])],
    })
  },
})
</script>
