<template>
  <v-row>
    <v-col>
      <v-sheet color="grey darken-4" dark class="py-12">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="8" class="text-center">
              <h1 class="display-1 mb-2">Contact Callum - Get a Quote</h1>
              <p class="headline">
                Award-winning close-up magician for weddings, corporate events &amp;
                parties. Check availability and get a no-obligation quote.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <v-container py-12>
        <v-row justify="space-between">
          <v-col
            cols="auto"
            :md="4"
            :order="$vuetify.breakpoint.smAndDown ? 2 : 0"
          >
            <v-row>
              <v-col :cols="12">
                <p class="body-1">
                  For more information about Callum's performances, drop him a
                  message and he'll come back to you within 24 hours with
                  availability and a quote tailored to your event.
                </p>
              </v-col>

              <v-col :cols="12">
                <v-icon color="accent" small>{{ mdiPhone }}</v-icon>
                Call: <a href="tel:+447481768042">07481 768042</a>
              </v-col>
              <v-col :cols="12">
                <v-icon color="accent" small>{{ mdiEmail }}</v-icon>
                Email:
                <a href="mailto:info@magic-cal.co.uk">info@magic-cal.co.uk</a>
              </v-col>
              <v-col :cols="12">
                <v-icon color="accent" small>{{ mdiMapMarker }}</v-icon>
                Based in London - available across Surrey, Guildford &amp; the South East
              </v-col>
              <v-col :cols="12">
                <v-icon color="accent" small>{{ mdiFacebook }}</v-icon>
                <a href="https://www.facebook.com/MagicCal/" target="_blank" rel="noopener">facebook.com/MagicCal</a>
              </v-col>
              <v-col :cols="12">
                <v-icon color="accent" small>{{ mdiInstagram }}</v-icon>
                <a href="https://www.instagram.com/mcclure_magic/" target="_blank" rel="noopener">@mcclure_magic</a>
              </v-col>

              <v-col :cols="12" class="mt-4">
                <p class="body-2 grey--text">
                  Looking for more info first?
                  <nuxt-link to="/wedding-magician">Wedding magician</nuxt-link> ·
                  <nuxt-link to="/corporate-magician">Corporate magician</nuxt-link> ·
                  <nuxt-link to="/about">About Callum</nuxt-link>
                </p>
              </v-col>
            </v-row>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.smAndDown" :cols="12" :order="1">
            <v-divider></v-divider>
          </v-col>

          <v-col
            :cols="12"
            :md="7"
            :order="$vuetify.breakpoint.smAndDown ? 0 : 2"
          >
            <contact-form />
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { mdiEmail, mdiFacebook, mdiInstagram, mdiMapMarker, mdiPhone } from '@mdi/js'
import { buildHead } from '~/utils/seo'
import { localBusiness, breadcrumb } from '~/utils/schema'

export default defineComponent({
  setup() {
    return { mdiEmail, mdiFacebook, mdiInstagram, mdiMapMarker, mdiPhone }
  },
  head() {
    return buildHead({
      title: 'Contact | Callum McClure Magician - Get a Quote',
      description:
        'Get in touch with Callum McClure - award-winning close-up magician for weddings, corporate events and parties. Call 07481 768042 or send a message.',
      path: '/contact',
      jsonLd: [
        localBusiness(),
        breadcrumb([{ name: 'Contact', item: '/contact' }]),
      ],
    })
  },
})
</script>
