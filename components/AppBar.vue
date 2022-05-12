<template>
  <div>
    <!-- <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          @click="drawer = !drawer"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar
      app
      light
      :inverted-scroll="hideOnScroll"
      elevation="0"
      color="white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title to="/" class="pr-2" v-text="title" />
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
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

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
    return {
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
