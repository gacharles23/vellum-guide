import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Byline from './Byline.vue'
import ShortcutReference from './components/ShortcutReference.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ShortcutReference', ShortcutReference)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(Byline),
    })
  }
}
