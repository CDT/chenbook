import DefaultTheme from 'vitepress/theme'
import Flashcard from '../components/Flashcard.vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register components globally
    app.component('Flashcard', Flashcard)
    app.component('LanguageSwitcher', LanguageSwitcher)
  }
}
