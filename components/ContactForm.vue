<template>
  <v-form ref="form" v-model="valid" lazy-validation light>
    <div id="contact" />
    <div>
      If you are looking to make your next event extra special, just leave some
      details and Callum will get back to you
    </div>
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

    <v-btn color="accent" class="mr-4" @click="sendEmail"> Send </v-btn>
  </v-form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
import { send as emailSend } from 'emailjs-com'

export default defineComponent({
  name: 'Contact',
  setup() {
    const form = ref<any>(null)
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
      return `${day}-${month}-${year}`
    }

    const emailRules = [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'Please enter a valid email',
    ]

    const validate = () => {
      return form.value.validate()
    }

    const reset = () => {
      return form.value.reset()
    }
    const sendEmail = () => {
      if (!validate()) {
        return
      }
      emailSend(
        'service_j9477j5',
        'template_vsrvm7q',
        {
          name: name.value,
          phone: phone.value,
          email: email.value,
          venue: venue.value,
          date: formattedDate.value,
          details: details.value,
        },
        'user_B76eyVlaAaisRGhim1W5r'
      ).then(
        () => {
          console.log('SUCCESS!')
          alert('Sent')
          reset()
        },
        (error) => {
          console.log('FAILED...', error)
        }
      )
    }

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
      sendEmail,
      form,
      validate,
      reset,
    }
  },
})
</script>
