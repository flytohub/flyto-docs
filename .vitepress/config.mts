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
    logo: '/logo.png',
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
          ],
        },
        {
          text: 'Core',
          collapsed: false,
          items: [
            { text: 'Browser Automation', link: '/modules/browser' },
            { text: 'Atomic', link: '/modules/atomic' },
            { text: 'Flow Control', link: '/modules/flow-control' },
            { text: 'File Operations', link: '/modules/file-operations' },
            { text: 'Sandbox', link: '/modules/sandbox' },
            { text: 'Element', link: '/modules/element' },
            { text: 'Stealth', link: '/modules/stealth' },
          ],
        },
        {
          text: 'Data',
          collapsed: false,
          items: [
            { text: 'Data Transform', link: '/modules/data-transform' },
            { text: 'Array Operations', link: '/modules/array' },
            { text: 'String Operations', link: '/modules/string' },
            { text: 'Object Operations', link: '/modules/object-operations' },
            { text: 'Text', link: '/modules/text' },
            { text: 'Regex', link: '/modules/regex' },
            { text: 'Convert', link: '/modules/convert' },
            { text: 'Format', link: '/modules/format' },
            { text: 'Set', link: '/modules/set' },
            { text: 'Template', link: '/modules/template' },
            { text: 'Markdown', link: '/modules/markdown' },
          ],
        },
        {
          text: 'Infrastructure',
          collapsed: false,
          items: [
            { text: 'Cloud Services', link: '/modules/cloud' },
            { text: 'API Tools', link: '/modules/api-tools' },
            { text: 'Database', link: '/modules/database' },
            { text: 'Docker', link: '/modules/docker' },
            { text: 'Kubernetes', link: '/modules/k8s' },
            { text: 'Network', link: '/modules/network' },
            { text: 'Cache', link: '/modules/cache' },
            { text: 'Queue', link: '/modules/queue' },
            { text: 'Storage', link: '/modules/storage' },
            { text: 'GraphQL', link: '/modules/graphql' },
            { text: 'HTTP', link: '/modules/http' },
          ],
        },
        {
          text: 'Integrations',
          collapsed: false,
          items: [
            { text: 'AI & LLM', link: '/modules/ai-llm' },
            { text: 'Notifications', link: '/modules/notification' },
            { text: 'Productivity', link: '/modules/productivity' },
            { text: 'Document', link: '/modules/document' },
            { text: 'Image Processing', link: '/modules/image' },
          ],
        },
        {
          text: 'Quality',
          collapsed: false,
          items: [
            { text: 'Verify', link: '/modules/verify' },
            { text: 'Validate', link: '/modules/validate' },
            { text: 'Check', link: '/modules/check' },
            { text: 'Analysis', link: '/modules/analysis' },
            { text: 'Testing', link: '/modules/testing' },
            { text: 'Compare', link: '/modules/compare' },
          ],
        },
        {
          text: 'Utilities',
          collapsed: true,
          items: [
            { text: 'Utilities', link: '/modules/utility' },
            { text: 'Stats', link: '/modules/stats' },
            { text: 'Crypto', link: '/modules/crypto' },
            { text: 'Encode / Decode', link: '/modules/encode-decode' },
            { text: 'Archive', link: '/modules/archive' },
            { text: 'Path', link: '/modules/path' },
            { text: 'Math', link: '/modules/math' },
            { text: 'Logic', link: '/modules/logic' },
            { text: 'Random', link: '/modules/random' },
            { text: 'Meta', link: '/modules/meta' },
            { text: 'Environment', link: '/modules/env' },
            { text: 'Error Handling', link: '/modules/error-handling' },
            { text: 'Scheduler', link: '/modules/scheduler' },
            { text: 'Hash', link: '/modules/hash' },
            { text: 'Output', link: '/modules/output' },
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
