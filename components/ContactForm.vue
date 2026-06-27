<template>
  <v-card light class="form-card pa-6 pa-sm-8" elevation="4">
    <h3 class="form-title">Send an enquiry</h3>
    <p class="form-intro">
      If you are looking to make your next event extra special, just leave some
      details and Callum will get back to you.
    </p>
    <v-form ref="form" v-model="valid" lazy-validation light>
      <v-row dense>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="name"
            label="Name *"
            outlined
            dense
            required
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail *"
            outlined
            dense
            required
            validate-on-blur
          />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="phone" label="Phone" outlined dense />
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field v-model="venue" label="Venue" outlined dense />
        </v-col>
        <v-col cols="12">
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
                outlined
                dense
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12">
          <v-textarea
            v-model="details"
            label="Event Details"
            outlined
            rows="4"
          />
        </v-col>
      </v-row>

      <v-btn large color="accent" depressed @click="sendEmail">
        <v-icon left>mdi-send</v-icon>
        Send Enquiry
      </v-btn>
    </v-form>
  </v-card>
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
      ).then(
        () => {
          console.log('SUCCESS!')
          alert('Sent')
          reset()
        },
        (error) => {
          console.log('FAILED', error)
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

<style lang="scss" scoped>
.form-card {
  border-radius: 14px !important;
}
.form-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #1c1c22;
  margin-bottom: 0.5rem;
}
.form-intro {
  color: rgba(0, 0, 0, 0.65);
  margin-bottom: 1.25rem;
}
</style>
