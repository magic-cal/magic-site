<template>
  <v-sheet :color="color" class="text-center mt-0 services-sheet" dark>
    <v-container class="py-12">
      <v-row>
        <v-col cols="12" class="pb-4">
          <div class="eyebrow">Performances</div>
          <h2 class="section-title">
            {{ title }}
          </h2>
          <div class="gold-rule"></div>
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
          class="px-6"
        >
          <div class="service-img-wrap">
            <v-img
              class="service-img rounded-circle"
              :src="service.src"
              :alt="service.alt"
              max-height="200px"
              max-width="200px"
              contain
              eager
            />
          </div>
          <h3 class="service-subtitle pb-2 pt-6">
            {{ service.subtitle }}
          </h3>

          <div class="service-details">{{ service.details }}</div>
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
    return {}
  },
})
</script>
<style scoped lang="scss">
.services-sheet {
  background: linear-gradient(135deg, #1c1c22 0%, #24242e 60%, #1a1a20 100%);
}

.service-img-wrap {
  display: inline-block;
  border-radius: 50%;
  padding: 6px;
  border: 1px solid rgba(228, 186, 93, 0.5);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgb(228, 186, 93);
  }
}

.service-img {
  border-radius: 50%;
}

.service-subtitle {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  font-size: 1.35rem;
}

.service-details {
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  max-width: 320px;
  margin: 0 auto;
}
</style>
