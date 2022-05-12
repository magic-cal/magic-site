<template>
  <v-sheet class="pa-12 header-sheet" light>
    <v-container>
      <v-row>
        <v-col :cols="12" py-12>
          <h1 class="display-3 flex-grow-1">
            {{ title }}
          </h1>
          <div v-if="subtitle" class="accent--text">
            {{ subtitle }}
          </div>
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
  background-color: #eaeaea;
}
</style>
