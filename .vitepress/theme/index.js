import DefaultTheme from 'vitepress/theme'
import Flashcard from '../components/Flashcard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register components globally
    app.component('Flashcard', Flashcard)
  }
}
