import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vellum Guide',
  description: 'The Vellum user guide. Written by the Vellum community.',
  head: [['meta', { name: 'robots', content: 'noindex, nofollow' }]],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [],
    sidebar: [
      {
        text: 'Vellum Guide',
        items: [
          { text: 'Overview', link: '/' },
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
    search: { provider: 'local' },
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
