import DefaultTheme from 'vitepress/theme'
import Flashcard from '../components/Flashcard.vue'
import AbcPlayer from '../components/AbcPlayer.vue'
import 'abcjs/abcjs-audio.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register components globally
    app.component('Flashcard', Flashcard)
    app.component('AbcPlayer', AbcPlayer)
  }
}
