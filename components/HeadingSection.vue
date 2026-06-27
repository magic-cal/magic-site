<template>
  <v-sheet class="header-sheet" dark>
    <v-container>
      <v-row justify="center">
        <v-col :cols="12" class="text-center py-16">
          <div class="header-eyebrow">Callum McClure &middot; Magician</div>
          <h1 class="header-title">
            {{ title }}
          </h1>
          <div v-if="subtitle" class="header-subtitle">
            {{ subtitle }}
          </div>
          <div class="gold-rule"></div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: null,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.header-sheet {
  background:
    radial-gradient(
      ellipse at top,
      rgba(255, 255, 255, 0.06),
      transparent 60%
    ),
    linear-gradient(135deg, #1c1c22 0%, #24242e 55%, #1a1a20 100%);
  border-bottom: 1px solid rgba(228, 186, 93, 0.35);
}

.header-eyebrow {
  color: rgb(228, 186, 93);
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: clamp(0.65rem, 1.5vw, 0.85rem);
  font-weight: 600;
  margin-bottom: 1rem;
}

.header-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  font-size: clamp(2.2rem, 6vw, 4rem);
}

.header-subtitle {
  color: rgba(255, 255, 255, 0.78);
  font-weight: 300;
  letter-spacing: 0.04em;
  font-size: clamp(1rem, 2.4vw, 1.35rem);
  margin-top: 0.5rem;
}
</style>
