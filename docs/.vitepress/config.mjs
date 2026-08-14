import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vellum Guide',
  description: 'The Vellum user guide. Written by the Vellum community.',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [{ text: 'Contribute', link: '/contribute' }],
    sidebar: [
      {
        text: 'Vellum Guide',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'Test page', link: '/test-page' }
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
      message: 'Written by the Vellum community. Licensed CC BY 4.0.'
    }
  }
})
