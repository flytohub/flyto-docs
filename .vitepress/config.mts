import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Flyto2 Docs',
  description: 'Documentation for Flyto2 — Enterprise Workflow Platform',
  lang: 'en-US',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'Flyto2 Docs' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Flyto2 Docs',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Core Engine', link: '/core/' },
      { text: 'MCP Server', link: '/mcp/' },
      { text: 'Modules', link: '/modules/' },
      { text: 'flyto2.com', link: 'https://flyto2.com' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is Flyto2?', link: '/guide/what-is-flyto2' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
          ],
        },
        {
          text: 'Basics',
          items: [
            { text: 'Your First Workflow', link: '/guide/first-workflow' },
            { text: 'Modules Overview', link: '/guide/modules-overview' },
            { text: 'Configuration', link: '/guide/configuration' },
          ],
        },
      ],
      '/core/': [
        {
          text: 'Core Engine',
          items: [
            { text: 'Overview', link: '/core/' },
            { text: 'Architecture', link: '/core/architecture' },
            { text: 'Execution Model', link: '/core/execution-model' },
            { text: 'Evidence & Replay', link: '/core/evidence-replay' },
          ],
        },
      ],
      '/mcp/': [
        {
          text: 'MCP Server',
          items: [
            { text: 'Overview', link: '/mcp/' },
            { text: 'STDIO Transport', link: '/mcp/stdio' },
            { text: 'Streamable HTTP', link: '/mcp/streamable-http' },
            { text: 'Client Configuration', link: '/mcp/client-config' },
          ],
        },
      ],
      '/modules/': [
        {
          text: 'Modules',
          items: [
            { text: 'Overview', link: '/modules/' },
            { text: 'Browser', link: '/modules/browser' },
            { text: 'File System', link: '/modules/file-system' },
            { text: 'Docker', link: '/modules/docker' },
            { text: 'Data Parsing', link: '/modules/data-parsing' },
            { text: 'Crypto', link: '/modules/crypto' },
            { text: 'Scheduling', link: '/modules/scheduling' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/flytohub/flyto-core' },
    ],

    editLink: {
      pattern: 'https://github.com/flytohub/flyto-docs/edit/main/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },

    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright 2024-present Flyto2',
    },
  },
})
