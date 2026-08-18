import { defineConfig } from 'vitepress'
import {
  shortcutId,
  shortcutSearchText,
  shortcutSections,
  shortcutSlug,
} from './theme/shortcuts'

function renderShortcutSearchEntries() {
  return shortcutSections.map((section) => `
    <h2>${section.title}<a href="#${shortcutSlug(section.title)}"></a></h2>
    ${section.shortcuts.map((shortcut) => `
      <h3>${shortcut.action}<a href="#${shortcutId(section.title, shortcut.action)}"></a></h3>
      <p>${shortcutSearchText(shortcut)}</p>
    `).join('')}
  `).join('')
}

export default defineConfig({
  title: 'Vellum Guide',
  description: 'The Vellum user guide. Written by the Vellum community.',
  head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],
  cleanUrls: true,
  lastUpdated: true,
  transformPageData(pageData) {
    if (pageData.relativePath !== 'keyboard-shortcuts.md') return

    return {
      headers: shortcutSections.map((section) => ({
        level: 2,
        title: section.title,
        slug: shortcutSlug(section.title),
        link: `#${shortcutSlug(section.title)}`,
        children: (section.supplements ?? [])
          .filter((supplement) => supplement.title)
          .map((supplement) => ({
            level: 3,
            title: supplement.title,
            slug: shortcutSlug(supplement.title),
            link: `#${shortcutSlug(supplement.title)}`,
            children: [],
          })),
      })),
    }
  },
  themeConfig: {
    nav: [],
    sidebar: [
      {
        text: 'Vellum Guide',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Keyboard shortcuts', link: '/keyboard-shortcuts' },
        ]
      },
      {
        text: 'About this guide',
        items: [
          { text: 'Contributors', link: '/contributors' },
          { text: 'Contribute', link: '/contribute' }
        ]
      }
    ],
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.relativePath !== 'keyboard-shortcuts.md') return html

          return `${html}${renderShortcutSearchEntries()}`
        },
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gacharles23/vellum-guide' }
    ],
    editLink: {
      pattern: 'https://github.com/gacharles23/vellum-guide/edit/main/docs/:path',
      text: 'Suggest an edit to this page'
    },
    footer: {
      message: 'Written by the <a href="/contributors">Vellum community</a>. Licensed CC BY 4.0.'
    }
  }
})
