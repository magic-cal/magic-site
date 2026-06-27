export interface Faq {
  question: string
  answer: string
}

const highlightedFaqs: Faq[] = [
  {
    question: 'What type of magic do you perform?',
    answer:
      'Callum performs Close-up magic: a way of performing personal magic without smoke or mirrors. Seeing the magic up close makes it that much more amazing.<br>For a bigger event Callum performs his award-winning stage magic show (including smoke and mirrors).',
  },
  {
    question: 'Are you a member of The Magic Circle?',
    answer:
      'Yes, Callum is a member of The Magic Circle. The Magic Circle is the premier magical society in the world, founded by magicians in order to advance the art of magic. Being a member is a prestigious honor.',
  },
  {
    question: 'How far do you travel?',
    answer:
      'He regularly performs across the UK and happy to travel to entertain. Callum has performed around the world to thousands of people.',
  },
  {
    question: 'How long do you perform for?',
    answer:
      'Events are mostly between 1 to 3 hours however Callum is more than happy to adapt to any event.',
  },
  {
    question: 'How far in advance do you need to book?',
    answer:
      'It’s never too early to enquire about your event, especially for busy periods. Wedding season in summer months with November and December being the busiest months for corporate christmas parties.<br>Most events are booked 6 to 18 months in advance, but get in touch to check availability.',
  },
  {
    question: 'How do I book Callum for an event?',
    answer:
      '1. Get in touch with Callum via email or phone - Giving details of time, venue, number of guests and what the event is for.' +
      '<br>2. Callum will contact you to confirm all the details and provide a quote' +
      '<br>3. Booking of the event - when you are happy with the arrangements, we book the date in' +
      '<br>4. Enjoy the magic',
  },
]

const extraFaqs: Faq[] = [
  {
    question: 'Is Callum a wedding magician?',
    answer:
      'Yes, Callum is a well seasoned wedding magician for events all over the UK. He can perform during the drinks reception, wedding breakfast or evening reception. Magic is especially good for keeping guests entertained between the ceremony and the wedding breakfast.',
  },
  {
    question: 'Do you perform magic for corporate events?',
    answer:
      "Yes, Callum is a regular performer at corporate events. He can perform at your stand at a trade show, entertain your clients at a dinner or perform at your company's Christmas party.",
  },
  {
    question: 'How much does it cost?',
    answer:
      'The cost depends on the type of event, location and duration. Please get in touch for a quote.',
  },
  {
    question: "Do you perform for children's magic?",
    answer:
      'Callum performs for children of all ages, however, he does not perform for children’s birthday parties.',
  },
  {
    question: 'Do you perform magic for charity events?',
    answer:
      'Callum is happy to perform for charity events and has done so for many years. Please get in touch to discuss your event.',
  },
  {
    question: 'Do you perform for private parties?',
    answer:
      'Yes, Callum performs for private parties of all sizes. He can perform at your home or at a venue of your choice.',
  },
  {
    question: 'Do you perform for trade shows?',
    answer:
      'Yes, Callum is a regular performer at trade shows. He can perform at your stand to help attract more visitors and generate more leads.',
  },
]
const allFaqs = [...highlightedFaqs, ...extraFaqs]

export { highlightedFaqs, extraFaqs, allFaqs }
