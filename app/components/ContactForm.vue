<template>
  <v-form ref="form" @submit.prevent="sendEmail">
    <div class="mb-4">
      If you are looking to make your next event extra special, just leave some
      details and Callum will get back to you.
    </div>

    <v-text-field v-model="name" label="Name *" :rules="nameRules" />
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail *"
      validate-on="blur"
    />
    <v-text-field v-model="phone" label="Phone" />
    <v-text-field v-model="venue" label="Venue" />
    <v-text-field
      v-model="date"
      type="date"
      label="Date of Event"
      prepend-inner-icon="mdi-calendar"
    />
    <v-textarea v-model="details" label="Event Details" />

    <v-btn type="submit" color="accent" class="mr-4" :loading="sending">
      Send
    </v-btn>

    <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="4000">
      {{ snackbarText }}
    </v-snackbar>
  </v-form>
</template>

<script setup lang="ts">
import emailjs from '@emailjs/browser'

// EmailJS configuration (public identifiers, safe to ship client-side).
const EMAILJS_SERVICE = 'default_service'
const EMAILJS_TEMPLATE = 'template_vsrvm7q'
const EMAILJS_PUBLIC_KEY = 'user_B76eyVlaAaisRGhim1W5r'

const form = ref()
const name = ref('')
const phone = ref('')
const email = ref('')
const venue = ref('')
const date = ref('')
const details = ref('')

const sending = ref(false)
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

const nameRules = [(v: string) => !!v || 'Name is required']
const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Please enter a valid email',
]

const formattedDate = (value: string) => {
  if (!value) return ''
  const [year, month, day] = value.split('-')
  return `${day}-${month}-${year}`
}

const notify = (text: string, color: string) => {
  snackbarText.value = text
  snackbarColor.value = color
  snackbar.value = true
}

const sendEmail = async () => {
  const { valid } = await form.value.validate()
  if (!valid) return

  sending.value = true
  try {
    await emailjs.send(
      EMAILJS_SERVICE,
      EMAILJS_TEMPLATE,
      {
        name: name.value,
        phone: phone.value,
        email: email.value,
        venue: venue.value,
        date: formattedDate(date.value),
        details: details.value,
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    )
    notify('Thanks! Your message has been sent.', 'success')
    form.value.reset()
  } catch (error) {
    console.error('Failed to send enquiry', error)
    notify('Sorry, something went wrong. Please email info@magic-cal.co.uk', 'error')
  } finally {
    sending.value = false
  }
}
</script>
