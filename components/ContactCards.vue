<template>
  <v-row id="contact">
    <v-col :cols="12" class="text-center pb-4">
      <div class="eyebrow">Enquiries</div>
      <h2 class="section-title">Get in Touch</h2>
      <div class="gold-rule"></div>
    </v-col>
    <v-col :cols="12" :md="6">
      <v-card light class="contact-card pa-6 fill-height" elevation="3">
        <p class="contact-blurb">
          For more information about Callum's performances, feel free to drop
          him a message or contact him on social media. He aims to reply to all
          enquiries within 24 hours.
        </p>

        <v-list class="contact-list" color="transparent">
          <v-list-item href="tel:07481768042" class="px-0">
            <v-list-item-icon>
              <v-icon color="accent">mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>07481 768042</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item href="mailto:info@magic-cal.co.uk" class="px-0">
            <v-list-item-icon>
              <v-icon color="accent">mdi-email</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>info@magic-cal.co.uk</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="px-0">
            <v-list-item-icon>
              <v-icon color="accent">mdi-map-marker</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                >Based in Surrey &mdash; happy to travel</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <div class="mt-2">
          <v-btn
            icon
            color="accent"
            href="https://fb.me/MagicCal"
            target="_blank"
            aria-label="Facebook"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            icon
            color="accent"
            href="https://twitter.com/magic_cal"
            target="_blank"
            aria-label="Twitter"
          >
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-col>
    <v-col :cols="12" :md="6">
      <v-card light class="contact-card pa-6" elevation="3">
        <h3 class="form-title">Send an enquiry</h3>
        <v-card-text class="px-0">
          <v-form ref="form" v-model="valid" lazy-validation>
            <div class="mb-4 form-intro">
              If you are looking to make your next event extra special, just
              leave some details and Callum will get back to you.
            </div>
            <v-text-field
              v-model="name"
              label="Name *"
              outlined
              dense
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail *"
              outlined
              dense
              required
              validate-on-blur
            ></v-text-field>

            <v-text-field
              v-model="phone"
              label="Phone"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="venue"
              label="Venue"
              outlined
              dense
            ></v-text-field>
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
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                no-title
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
            <v-textarea
              v-model="details"
              label="Event Details"
              outlined
              rows="4"
            >
            </v-textarea>

            <v-btn large color="accent" depressed @click="sendEmail">
              <v-icon left>mdi-send</v-icon>
              Send Enquiry
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
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

<style lang="scss" scoped>
.contact-card {
  border-radius: 14px !important;
}
.contact-blurb {
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.7;
}
.contact-list ::v-deep .v-list-item__title {
  font-weight: 600;
  color: #1c1c22;
}
.form-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 600;
  font-size: 1.4rem;
  color: #1c1c22;
}
.form-intro {
  color: rgba(0, 0, 0, 0.65);
}
</style>
