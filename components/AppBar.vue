<template>
  <div>
    <!-- `temporary` is load-bearing, not cosmetic. Without it Vuetify's
         reactsToMobile is true, so the isMobile watcher runs `isActive = !val`
         when the breakpoint resolves from SSR (width 0, mobile) to a real
         desktop width, forcing the drawer open on first paint. -->
    <v-navigation-drawer v-model="drawer" fixed app right temporary>
      <v-list nav dense>
        <v-list-item
          v-for="page in drawerPrimaryPages"
          :key="page.to"
          :to="page.to"
          router
          exact
          @click="drawer = false"
        >
          <v-list-item-icon>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ page.title }}</v-list-item-title>
        </v-list-item>

        <v-divider class="my-2" />

        <!-- `eager` renders the nested links into the SSR HTML even while the
             group is collapsed, so collapsing them costs nothing for crawlers.
             `group` auto-opens whichever section holds the current route. -->
        <v-list-group
          :prepend-icon="mdiSilverwareForkKnife"
          :group="occasionsGroup"
          eager
        >
          <template #activator>
            <v-list-item-title>Occasions</v-list-item-title>
          </template>
          <v-list-item
            v-for="page in occasionPages"
            :key="page.to"
            :to="page.to"
            router
            exact
            @click="drawer = false"
          >
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-group :prepend-icon="mdiMapMarker" group="/areas" eager>
          <template #activator>
            <v-list-item-title>Areas</v-list-item-title>
          </template>
          <v-list-item
            v-for="page in areaPages"
            :key="page.to"
            :to="page.to"
            router
            exact
            @click="drawer = false"
          >
            <v-list-item-title>{{ page.title }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-divider class="my-2" />

        <v-list-item
          v-for="page in drawerInfoPages"
          :key="page.to"
          :to="page.to"
          router
          exact
          @click="drawer = false"
        >
          <v-list-item-icon>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ page.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <template #append>
        <div class="pa-3">
          <v-btn
            block
            color="accent"
            dark
            nuxt
            to="/contact"
            @click="drawer = false"
          >
            Get a Quote
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      app
      light
      :inverted-scroll="hideOnScroll"
      elevation="0"
      color="white"
    >
      <nuxt-link to="/" class="toolbar-home-link">
        <div class="brand-mark">
          <span class="brand-name">Callum McClure</span>
          <span class="brand-sub">Magician</span>
        </div>
      </nuxt-link>
      <v-spacer></v-spacer>

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
              Occasions <v-icon small>{{ mdiChevronDown }}</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="occasion in occasionPages"
              :key="occasion.to"
              :to="occasion.to"
              nuxt
            >
              <v-list-item-title>{{ occasion.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn large text plain :ripple="false" v-bind="attrs" v-on="on">
              Areas <v-icon small>{{ mdiChevronDown }}</v-icon>
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
        <v-btn to="/contact" small outlined color="accent" nuxt class="ml-2 mr-2"
          >Get a Quote</v-btn
        >
      </template>

      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        aria-label="Open navigation menu"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import {
  mdiBriefcase,
  mdiCards,
  mdiChevronDown,
  mdiFrequentlyAskedQuestions,
  mdiHome,
  mdiInformation,
  mdiMapMarker,
  mdiPartyPopper,
  mdiRing,
  mdiSilverwareForkKnife,
} from '@mdi/js'

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
    ]

    const occasionPages = [
      { title: 'Christmas Parties', to: '/christmas-party-magician' },
      { title: 'After Dinner', to: '/after-dinner-magician' },
      { title: 'Gala Dinners', to: '/gala-dinner-magician' },
      { title: 'Awards Ceremonies', to: '/awards-ceremony-magician' },
      { title: 'Charity Balls', to: '/charity-ball-magician' },
      { title: 'Table Magic', to: '/table-magician' },
    ]

    const areaPages = [
      { title: 'London', to: '/areas/london' },
      { title: 'Surrey', to: '/areas/surrey' },
      { title: 'Guildford', to: '/areas/guildford' },
    ]

    const drawerPrimaryPages = [
      { title: 'Home', icon: mdiHome, to: '/' },
      { title: 'Weddings', icon: mdiRing, to: '/wedding-magician' },
      { title: 'Corporate', icon: mdiBriefcase, to: '/corporate-magician' },
      { title: 'Parties', icon: mdiPartyPopper, to: '/party-magician' },
      { title: 'Close-Up Magic', icon: mdiCards, to: '/close-up-magician' },
    ]

    const drawerInfoPages = [
      { title: 'About Callum', icon: mdiInformation, to: '/about' },
      { title: 'FAQs', icon: mdiFrequentlyAskedQuestions, to: '/faqs' },
    ]

    // Matched against the current path so the section holding the active page
    // opens on load rather than the user having to hunt for it.
    const occasionsGroup = occasionPages.map((p) => p.to).join('|')

    return {
      drawer,
      title: 'Callum McClure Magician',
      mainPages,
      occasionPages,
      areaPages,
      drawerPrimaryPages,
      drawerInfoPages,
      occasionsGroup,
      mdiChevronDown,
      mdiMapMarker,
      mdiSilverwareForkKnife,
    }
  },
})
</script>

<style scoped>
.toolbar-home-link {
  text-decoration: none !important;
  color: inherit !important;
  margin-right: 8px;
}
.toolbar-home-link:hover {
  text-decoration: none !important;
  color: inherit !important;
}
.brand-mark {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
  padding: 2px 0;
}
.brand-name {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #1a1a1a;
}
.brand-sub {
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #b12827;
}
</style>
