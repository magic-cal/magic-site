<template>
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
  <v-app-bar app light :inverted-scroll="hideOnScroll">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title to="/" v-text="title" />
    <v-btn v-for="page in pages" :key="page.title">{{ page.title }}</v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'AppBar',
  props: {
    hideOnScroll: {
      type: Boolean,
      required: false,
      default: true,
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
        about: {
          title: 'About',
          icon: 'mdi-information',
          to: '/about',
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
