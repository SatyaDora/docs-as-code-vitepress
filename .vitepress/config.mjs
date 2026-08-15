import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Technical Doc Hub',
  description: 'Surf Weather API — Developer Portal',

  // GitHub Pages base path — matches the repository name
base: '/docs-as-code-vitepress/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Developer Docs', link: '/developer-docs/getting-started' },
      { text: 'User Guides', link: '/quick-start' }
    ],

    sidebar: [
      {
        text: 'Developer Documentation',
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/developer-docs/getting-started' },
          { text: 'Authentication', link: '/developer-docs/authentication' },
          { text: 'Rate Limits', link: '/developer-docs/rate-limits' },
          { text: 'Error Catalog', link: '/developer-docs/error-catalog' },
          {
            text: 'API Reference',
            collapsed: true,
            items: [
              { text: 'API v1 Overview', link: '/developer-docs/v1/overview' },
              { text: 'First API Call', link: '/developer-docs/v1/first-api-call' },
              { text: 'Python SDK', link: '/developer-docs/v1/python' },
              { text: 'API v2 (Beta)', link: '/developer-docs/v2/overview' }
            ]
          },
          { text: 'Documentation Architecture', link: '/developer-docs/architecture' }
        ]
      },
      {
        text: 'User Documentation',
        collapsed: false,
        items: [
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'User Manual', link: '/user-manual' }
        ]
      },
      {
        text: 'Help & Support',
        collapsed: false,
        items: [
          { text: 'FAQ', link: '/faq' },
          { text: 'Troubleshooting', link: '/troubleshooting' }
        ]
      },
      {
        text: 'Release Information',
        collapsed: false,
        items: [
          { text: 'Release Notes', link: '/release-notes' },
          { text: 'API Changelog', link: '/changelog' }
        ]
      },
      {
        text: 'About',
        collapsed: false,
        items: [
          { text: 'About This Project', link: '/about-project' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SatyaDora/docs-as-code-vitepress' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2026 Satya Dora Velnati'
    }
  }
})
