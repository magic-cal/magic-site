<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app right>
      <v-list>
        <v-list-item
          v-for="(page, i) in allPages"
          :key="i"
          :to="page.to"
          router
          exact
          @click="drawer = !drawer"
        >
          <v-list-item-action>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="page.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      light
      :inverted-scroll="hideOnScroll"
      elevation="0"
      color="white"
    >
      <v-toolbar-title to="/" class="pr-2" nuxt v-text="title" />
      <template v-if="!$vuetify.breakpoint.smAndDown">
        <v-btn
          v-for="page in mainPages"
          :key="page.title"
          :to="page.to"
          large
          text
          nuxt
          plain
          :ripple="false"
          >{{ page.title }}</v-btn
        >
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn large text plain :ripple="false" v-bind="attrs" v-on="on">
              Areas <v-icon small>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="area in areaPages"
              :key="area.to"
              :to="area.to"
              nuxt
            >
              <v-list-item-title>{{ area.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn to="/contact" large text nuxt plain :ripple="false"
          >Get a Quote</v-btn
        >
      </template>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'AppBar',
  props: {
    hideOnScroll: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup() {
    const drawer = ref(false)

    const mainPages = [
      { title: 'Weddings', to: '/wedding-magician' },
      { title: 'Corporate', to: '/corporate-magician' },
      { title: 'Parties', to: '/party-magician' },
      { title: 'About', to: '/about' },
    ]

    const areaPages = [
      { title: 'London', to: '/areas/london' },
      { title: 'Surrey', to: '/areas/surrey' },
      { title: 'Guildford', to: '/areas/guildford' },
    ]

    const mainIcons: Record<string, string> = {
      '/wedding-magician': 'mdi-ring',
      '/corporate-magician': 'mdi-briefcase',
      '/party-magician': 'mdi-party-popper',
      '/about': 'mdi-information',
    }

    const allPages = [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      ...mainPages.map((p) => ({ ...p, icon: mainIcons[p.to] || 'mdi-cards' })),
      { title: 'Close-Up Magic', icon: 'mdi-cards', to: '/close-up-magician' },
      { title: 'Testimonials', icon: 'mdi-star', to: '/testimonials' },
      ...areaPages.map((p) => ({ ...p, icon: 'mdi-map-marker' })),
      { title: 'Pricing', icon: 'mdi-currency-gbp', to: '/blog/how-much-does-a-wedding-magician-cost' },
      { title: 'Contact', icon: 'mdi-email', to: '/contact' },
    ]

    return {
      drawer,
      title: 'Callum McClure Magician',
      mainPages,
      areaPages,
      allPages,
    }
  },
})
</script>
