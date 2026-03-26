import DefaultTheme from 'vitepress/theme'
import PasswordGate from '../components/PasswordGate.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PasswordGate', PasswordGate)
  }
}
