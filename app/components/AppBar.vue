<template>
  <div>
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <v-list nav>
        <v-list-item
          v-for="page in pages"
          :key="page.to"
          :to="page.to"
          :prepend-icon="page.icon"
          :title="page.title"
          exact
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :scroll-behavior="hideOnScroll ? 'hide' : undefined" elevation="0" color="white">
      <v-app-bar-title>
        <NuxtLink to="/" class="text-decoration-none text-black">
          {{ title }}
        </NuxtLink>
      </v-app-bar-title>

      <template v-if="!display.smAndDown.value">
        <v-btn
          v-for="page in pages"
          :key="page.title"
          :to="page.to"
          variant="text"
          :ripple="false"
        >
          {{ page.title }}
        </v-btn>
      </template>

      <template v-if="display.smAndDown.value">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      </template>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

defineProps<{ hideOnScroll?: boolean }>()

const display = useDisplay()
const drawer = ref(false)
const title = 'Callum McClure Magician'

const pages = [
  { title: 'Home', icon: 'mdi-home', to: '/' },
  { title: 'FAQs', icon: 'mdi-information', to: '/faqs' },
  { title: 'Contact', icon: 'mdi-email', to: '/contact' },
]
</script>
