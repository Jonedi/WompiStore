/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles';
import '../assets/style.scss'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: '#FFFFFF',
          white: '#FFFFFF',
          primary: '#2A002B',
          secondary: '#00AAFF',
          // surface: 'transparent',
          muted: '#606060',
          gold: '#CCA70A',
          darkBlue: '#00000F',
          silver: '#C0C0C0',
          orange: 'F4CE2C',
          gray: '#606060'
        },
      },
    },
  },
})
