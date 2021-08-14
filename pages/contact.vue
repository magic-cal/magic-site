<template>
  <v-row>
    <v-col>
      <!-- <v-img height="25%" :src="require('@/static/shuffle-cropped1.jpg')">
      </v-img> -->
    </v-col>
    <v-col :cols="12">
      <v-container>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" label="Name *" required></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail *"
            required
            validate-on-blur
          ></v-text-field>

          <v-text-field v-model="phone" label="Phone"></v-text-field>

          <v-text-field v-model="venue" label="Venue"></v-text-field>
          <v-menu
            v-model="datePopup"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="formattedDate"
                label="Date of Event"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
          <v-textarea v-model="details" label="Event Details"> </v-textarea>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
          >
            Send
          </v-btn>
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'Contact',
  setup() {
    const name = ref('')
    const phone = ref('')
    const email = ref('')
    const venue = ref('')
    const date = ref('')
    const details = ref('')

    const valid = ref(true)
    const datePopup = ref(false)

    const formattedDate = computed(() => formatDate(date.value))

    const formatDate = (date: string) => {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}/${month}/${year}`
    }

    const emailRules = [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'Please enter a valid email',
    ]

    //  const sendEmail: (e :any) => {
    //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //     .then((result) => {
    //         console.log('SUCCESS!', result.status, result.text);
    //     }, (error) => {
    //         console.log('FAILED...', error);
    //     });

    return {
      name,
      phone,
      email,
      venue,
      date,
      valid,
      emailRules,
      datePopup,
      formattedDate,
      details,
    }
  },
})
</script>
