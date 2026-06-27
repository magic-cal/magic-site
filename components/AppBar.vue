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
      class="site-appbar"
    >
      <v-toolbar-title to="/" class="pr-2 brand-title" nuxt v-text="title" />
      <v-spacer></v-spacer>
      <template v-if="!$vuetify.breakpoint.smAndDown">
        <v-btn
          v-for="page in pages"
          :key="page.title"
          :to="page.to"
          text
          nuxt
          plain
          exact
          active-class="nav-active"
          class="nav-link"
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

<style lang="scss" scoped>
.site-appbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.brand-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  font-size: 1.35rem;
  letter-spacing: 0.01em;
  cursor: pointer;
}

.nav-link {
  letter-spacing: 0.08em !important;
  font-weight: 600;
  position: relative;
}

// Gold underline indicator for the active page
.nav-link.nav-active::after {
  content: '';
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 10px;
  height: 2px;
  background: rgb(228, 186, 93);
}
</style>
