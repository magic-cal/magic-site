<template>
  <v-app>
    <v-main>
      <v-container class="text-center py-16">
        <h1 class="text-h2 mb-4">{{ title }}</h1>
        <p class="text-h6 mb-8 text-medium-emphasis">
          {{ message }}
        </p>
        <v-btn color="accent" size="large" @click="handleError">
          Back to home
        </v-btn>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const title = computed(() =>
  props.error?.statusCode === 404 ? 'Page not found' : 'Something went wrong'
)
const message = computed(() =>
  props.error?.statusCode === 404
    ? "The page you're looking for doesn't exist."
    : 'An unexpected error occurred. Please try again.'
)

const handleError = () => clearError({ redirect: '/' })

useSeoMeta({ title: () => title.value, robots: 'noindex' })
</script>
