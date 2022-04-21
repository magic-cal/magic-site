<template>
  <v-sheet :color="color" class="text-center mt-0">
    <v-container pa-0>
      <v-row>
        <v-col cols="12">
          <h2 class="py-8">
            {{ title }}
          </h2>
        </v-col>
      </v-row>
      <v-row class="mx-auto pb-8">
        <v-col
          v-for="service in services"
          :key="service.src"
          :cols="12"
          :sm="4"
          justify="center"
          align="center"
        >
          <v-img
            class="service-img rounded-circle"
            :src="service.src"
            :alt="service.alt"
            max-height="200px"
            max-width="200px"
            contain
            eager
          />
          <h3 class="pb-2">
            {{ service.subtitle }}
          </h3>

          <div>{{ service.details }}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { PropType } from '@nuxtjs/composition-api'
import { defineComponent } from '@vue/composition-api'

export interface ServiceItem {
  alt?: String
  src: String
  hideOnXs?: boolean
  details?: string
  href?: string
}

export default defineComponent({
  name: 'ServicesBar',
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'Primary',
    },
    services: {
      type: Array as PropType<ServiceItem[]>,
      default: () => [],
    },
  },
  setup() {
    // const filteredServices = computed(() => {
    //   return props.services.filter((service) => !service.hideOnXs)
    // })
    return {
      // filteredServices,
    }
  },
})
</script>
<style scoped>
.service-img {
  border-radius: 25%;
}
</style>
