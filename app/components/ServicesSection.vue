<template>
  <v-sheet :color="color" class="text-center mt-0" theme="dark">
    <v-container class="pa-0">
      <v-row>
        <v-col cols="12">
          <h2 class="py-8 text-h4">
            {{ title }}
          </h2>
        </v-col>
      </v-row>
      <v-row class="mx-auto pb-8">
        <v-col
          v-for="service in services"
          :key="service.src"
          cols="12"
          sm="4"
          class="text-center"
        >
          <v-img
            class="service-img mx-auto"
            :src="service.src"
            :alt="service.alt"
            max-height="200px"
            max-width="200px"
            contain
            eager
          />
          <h3 class="pb-2 pt-4">
            {{ service.subtitle }}
          </h3>
          <div>{{ service.details }}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
export interface ServiceItem {
  alt?: string
  src: string
  subtitle?: string
  details?: string
  href?: string
}

withDefaults(
  defineProps<{
    title: string
    color?: string
    services?: ServiceItem[]
  }>(),
  { color: 'primary', services: () => [] }
)
</script>

<style scoped>
.service-img {
  border-radius: 25%;
}
</style>
