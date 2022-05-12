<template>
  <div>
    <v-navigation-drawer v-model="drawer" fixed app right>
      <v-list>
        <v-list-item
          v-for="(page, i) in pages"
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
          v-for="page in pages"
          :key="page.title"
          :to="page.to"
          large
          text
          nuxt
          plain
          :ripple="false"
          >{{ page.title }}</v-btn
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
    return {
      drawer,
      title: 'Callum McClure Magician',

      pages: {
        home: {
          title: 'Home',
          icon: 'mdi-home',
          to: '/',
        },
        faqs: {
          title: 'FAQs',
          icon: 'mdi-information',
          to: '/faqs',
        },
        contact: {
          title: 'Contact',
          icon: 'mdi-email',
          to: '/contact',
        },
      },
    }
  },
})
</script>
