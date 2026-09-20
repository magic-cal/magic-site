<template>
  <v-form ref="form" v-model="valid" lazy-validation light>
    <div>
      If you are looking to make your next event extra special, just leave some
      details and Callum will get back to you
    </div>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name *"
      name="name"
      autocomplete="name"
      required
      validate-on-blur
    />

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail *"
      type="email"
      name="email"
      autocomplete="email"
      inputmode="email"
      required
      validate-on-blur
    />

    <v-text-field
      v-model="phone"
      label="Phone"
      type="tel"
      name="phone"
      autocomplete="tel"
      inputmode="tel"
    />
    <v-text-field v-model="venue" label="Venue" name="venue" />
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
          :prepend-icon="mdiCalendar"
          readonly
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <v-date-picker v-model="date" no-title @input="datePopup = false" />
    </v-menu>
    <v-textarea v-model="details" label="Event Details" />

    <v-alert
      v-if="failed"
      type="error"
      role="alert"
      dense
      text
      class="mb-4 body-2"
    >
      Your message could not be sent. Please try again, or reach Callum
      directly on <a href="tel:+447481768042">07481 768042</a> or
      <a href="mailto:info@magic-cal.co.uk">info@magic-cal.co.uk</a>.
    </v-alert>

    <v-btn
      color="accent"
      class="mr-4"
      :loading="sending"
      :disabled="sending"
      @click="sendEmail"
    >
      Send
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@vue/composition-api'
// useRouter comes from @nuxtjs/composition-api rather than the aliased
// @vue/composition-api: build.extend maps that specifier onto vue itself, and
// Vue 2.7's getCurrentInstance() returns null under this setup.
import { useRouter } from '@nuxtjs/composition-api'
import { mdiCalendar } from '@mdi/js'
import { send as emailSend } from 'emailjs-com'

export default defineComponent({
  name: 'EnquiryForm',
  setup() {
    const router = useRouter()
    const form = ref<any>(null)
    const name = ref('')
    const phone = ref('')
    const email = ref('')
    const venue = ref('')
    const date = ref('')
    const details = ref('')

    const valid = ref(true)
    const datePopup = ref(false)
    const failed = ref(false)
    const sending = ref(false)

    const formatDate = (date: string) => {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${day}-${month}-${year}`
    }

    const formattedDate = computed(() => formatDate(date.value))

    // `required` on v-text-field only renders the HTML attribute, and the form
    // never submits natively (Send is a click handler), so nothing enforced it.
    const nameRules = [(v: string) => !!(v && v.trim()) || 'Name is required']

    const emailRules = [
      (v: string) => !!v || 'E-mail is required',
      (v: string) => /.+@.+\..+/.test(v) || 'Please enter a valid email',
    ]

    const validate = () => {
      return form.value.validate()
    }

    const sendEmail = async () => {
      if (!validate()) {
        return
      }
      // Guard against a second click landing while the first is still in
      // flight, which would send the enquiry twice.
      if (sending.value) {
        return
      }
      // Clear any previous failure so a retry does not show a stale error.
      failed.value = false
      sending.value = true
      try {
        await emailSend(
          'default_service',
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
        )
        router.push('/thank-you')
      } catch (error) {
        // The enquiry is the entire point of the site, so a failure has to be
        // visible: previously this was a console.log and the visitor was left
        // looking at an unchanged form, assuming it had sent.
        failed.value = true
      } finally {
        sending.value = false
      }
    }

    return {
      name,
      phone,
      email,
      venue,
      date,
      valid,
      failed,
      sending,
      nameRules,
      emailRules,
      datePopup,
      formattedDate,
      details,
      sendEmail,
      form,
      mdiCalendar,
    }
  },
})
</script>
