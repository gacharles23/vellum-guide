import DefaultTheme from 'vitepress/theme'
import { h, nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import mediumZoom from 'medium-zoom'
import Byline from './Byline.vue'
import ShortcutReference from './components/ShortcutReference.vue'
import ChangelogTimeline from './ChangelogTimeline.vue'
import ReferencedBy from './ReferencedBy.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ShortcutReference', ShortcutReference)
    app.component('ChangelogTimeline', ChangelogTimeline)
    app.component('ReferencedBy', ReferencedBy)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(Byline),
    })
  },
  // Screenshots are the point of some pages and they are small at reading
  // width, so any picture in the body opens full size on a click.
  //
  // Screenshots of a light app also glare on a dark page. Any picture with a
  // "-dark" twin beside it swaps to that twin in dark mode, so a page's
  // markdown stays a single plain image and gains the dark version simply by
  // the file existing. A picture with no twin keeps the one it has.
  setup() {
    const route = useRoute()
    const zoom = () => mediumZoom('.vp-doc img', { background: 'var(--vp-c-bg)' })

    const swapForTheme = () => {
      const dark = document.documentElement.classList.contains('dark')
      document.querySelectorAll('.vp-doc img').forEach((img) => {
        const light = img.dataset.lightSrc ?? img.getAttribute('src')
        if (!light || !/\.(webp|png|jpe?g)$/i.test(light)) return
        img.dataset.lightSrc = light
        if (!dark) {
          if (img.getAttribute('src') !== light) img.setAttribute('src', light)
          return
        }
        if (img.dataset.noDark === '1') return
        const twin = light.replace(/(\.\w+)$/, '-dark$1')
        if (img.getAttribute('src') === twin) return
        img.addEventListener(
          'error',
          () => {
            // No dark twin on disk: keep the light one rather than a broken box.
            img.dataset.noDark = '1'
            img.setAttribute('src', light)
          },
          { once: true }
        )
        img.setAttribute('src', twin)
      })
    }

    const refresh = () => {
      swapForTheme()
      zoom()
    }

    onMounted(() => {
      refresh()
      const observer = new MutationObserver(swapForTheme)
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    })
    watch(
      () => route.path,
      () => nextTick(refresh)
    )
  }
}
