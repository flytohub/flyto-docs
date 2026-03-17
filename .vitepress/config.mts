import { defineConfig, type DefaultTheme } from 'vitepress'

// ---------------------------------------------------------------------------
// Shared sidebar definition (reused across locales)
// ---------------------------------------------------------------------------

function modulesSidebar(prefix = ''): DefaultTheme.SidebarItem[] {
  const p = prefix ? `/${prefix}` : ''
  return [
    {
      text: 'Modules',
      items: [
        { text: 'Overview', link: `${p}/modules/` },
      ],
    },
    {
      text: 'Core',
      collapsed: false,
      items: [
        { text: 'Browser Automation', link: `${p}/modules/browser` },
        { text: 'Atomic', link: `${p}/modules/atomic` },
        { text: 'Flow Control', link: `${p}/modules/flow-control` },
        { text: 'File Operations', link: `${p}/modules/file-operations` },
        { text: 'Sandbox', link: `${p}/modules/sandbox` },
        { text: 'Element', link: `${p}/modules/element` },
      ],
    },
    {
      text: 'Data',
      collapsed: false,
      items: [
        { text: 'Data Transform', link: `${p}/modules/data-transform` },
        { text: 'Array Operations', link: `${p}/modules/array` },
        { text: 'String Operations', link: `${p}/modules/string` },
        { text: 'Object Operations', link: `${p}/modules/object-operations` },
        { text: 'Text', link: `${p}/modules/text` },
        { text: 'Regex', link: `${p}/modules/regex` },
        { text: 'Convert', link: `${p}/modules/convert` },
        { text: 'Format', link: `${p}/modules/format` },
        { text: 'Set', link: `${p}/modules/set` },
        { text: 'Template', link: `${p}/modules/template` },
        { text: 'Markdown', link: `${p}/modules/markdown` },
      ],
    },
    {
      text: 'Infrastructure',
      collapsed: false,
      items: [
        { text: 'Cloud Services', link: `${p}/modules/cloud` },
        { text: 'API Tools', link: `${p}/modules/api-tools` },
        { text: 'Database', link: `${p}/modules/database` },
        { text: 'Docker', link: `${p}/modules/docker` },
        { text: 'Kubernetes', link: `${p}/modules/k8s` },
        { text: 'Network', link: `${p}/modules/network` },
        { text: 'Cache', link: `${p}/modules/cache` },
        { text: 'Queue', link: `${p}/modules/queue` },
        { text: 'Storage', link: `${p}/modules/storage` },
        { text: 'GraphQL', link: `${p}/modules/graphql` },
        { text: 'HTTP', link: `${p}/modules/http` },
      ],
    },
    {
      text: 'Integrations',
      collapsed: false,
      items: [
        { text: 'AI & LLM', link: `${p}/modules/ai-llm` },
        { text: 'Notifications', link: `${p}/modules/notification` },
        { text: 'Productivity', link: `${p}/modules/productivity` },
        { text: 'Document', link: `${p}/modules/document` },
        { text: 'Image Processing', link: `${p}/modules/image` },
      ],
    },
    {
      text: 'Quality',
      collapsed: false,
      items: [
        { text: 'Verify', link: `${p}/modules/verify` },
        { text: 'Validate', link: `${p}/modules/validate` },
        { text: 'Check', link: `${p}/modules/check` },
        { text: 'Analysis', link: `${p}/modules/analysis` },
        { text: 'Testing', link: `${p}/modules/testing` },
        { text: 'Compare', link: `${p}/modules/compare` },
      ],
    },
    {
      text: 'Utilities',
      collapsed: true,
      items: [
        { text: 'Utilities', link: `${p}/modules/utility` },
        { text: 'Stats', link: `${p}/modules/stats` },
        { text: 'Crypto', link: `${p}/modules/crypto` },
        { text: 'Encode / Decode', link: `${p}/modules/encode-decode` },
        { text: 'Archive', link: `${p}/modules/archive` },
        { text: 'Path', link: `${p}/modules/path` },
        { text: 'Math', link: `${p}/modules/math` },
        { text: 'Logic', link: `${p}/modules/logic` },
        { text: 'Random', link: `${p}/modules/random` },
        { text: 'Meta', link: `${p}/modules/meta` },
        { text: 'Environment', link: `${p}/modules/env` },
        { text: 'Error Handling', link: `${p}/modules/error-handling` },
        { text: 'Scheduler', link: `${p}/modules/scheduler` },
        { text: 'Hash', link: `${p}/modules/hash` },
        { text: 'Output', link: `${p}/modules/output` },
      ],
    },
  ]
}

// ---------------------------------------------------------------------------
// Locale config helper — each locale only has translated module pages,
// so guide/core/mcp sidebars only appear for the root (en) locale.
// ---------------------------------------------------------------------------

function localeModulesConfig(prefix: string): DefaultTheme.Config {
  return {
    nav: [
      { text: 'Modules', link: `/${prefix}/modules/` },
    ],
    sidebar: {
      [`/${prefix}/modules/`]: modulesSidebar(prefix),
    },
    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: `Copyright 2025-${new Date().getFullYear()} Flyto2`,
    },
  }
}

export default defineConfig({
  title: 'Flyto2 Docs - Automation Engine Documentation',
  description: 'Documentation for Flyto2 — Automate Repetitive Tasks Without Coding',
  lang: 'en-US',
  cleanUrls: true,
  sitemap: {
    hostname: 'https://docs.flyto2.com',
    transformItems(items) {
      // Only keep URLs where the source .md file actually exists
      // Locale dirs (ja, ko, etc.) only have /modules/ pages
      // Remove locale/guide/*, locale/core/*, locale/mcp/*, locale/ai/*, etc.
      const localeOnlyModules = /^\/(ja|ko|zh-TW|de|es|fr|hi|id|it|pl|pt-BR|th|tr|vi)\/(guide|core|mcp|ai|blueprint|indexer)\//
      return items.filter(item => !localeOnlyModules.test(new URL(item.url).pathname))
    }
  },
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'canonical', href: 'https://docs.flyto2.com' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Flyto2 Docs' }],
    ['meta', { property: 'og:title', content: 'Flyto2 Docs — Automate Repetitive Tasks Without Coding' }],
    ['meta', { property: 'og:description', content: 'Documentation for Flyto2 — 412+ modules, MCP server, AI agents, code intelligence, and workflow automation.' }],
    ['meta', { property: 'og:url', content: 'https://docs.flyto2.com' }],
    ['meta', { property: 'og:image', content: 'https://docs.flyto2.com/og-image.png' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Flyto2 Docs — Automate Repetitive Tasks Without Coding' }],
    ['meta', { name: 'twitter:description', content: 'Documentation for Flyto2 — 412+ modules, MCP server, AI agents, code intelligence, and workflow automation.' }],
    ['meta', { name: 'twitter:image', content: 'https://docs.flyto2.com/og-image.png' }],
    // SEO
    ['meta', { name: 'keywords', content: 'flyto2, workflow automation, MCP server, modules, enterprise platform, code intelligence, AI agents, flyto-core, flyto-ai, flyto-indexer' }],
    ['meta', { name: 'author', content: 'Flyto2 Team' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    // JSON-LD structured data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Flyto2 Docs',
      description: 'Documentation for Flyto2 — Automate Repetitive Tasks Without Coding with 412+ modules.',
      url: 'https://docs.flyto2.com',
      publisher: {
        '@type': 'Organization',
        name: 'Flyto2',
        url: 'https://flyto2.com',
        logo: { '@type': 'ImageObject', url: 'https://docs.flyto2.com/logo.png' },
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://docs.flyto2.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    })],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-TW/modules/',
      themeConfig: localeModulesConfig('zh-TW'),
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/modules/',
      themeConfig: localeModulesConfig('ja'),
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      link: '/ko/modules/',
      themeConfig: localeModulesConfig('ko'),
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      link: '/fr/modules/',
      themeConfig: localeModulesConfig('fr'),
    },
    es: {
      label: 'Español',
      lang: 'es',
      link: '/es/modules/',
      themeConfig: localeModulesConfig('es'),
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      link: '/de/modules/',
      themeConfig: localeModulesConfig('de'),
    },
    'pt-BR': {
      label: 'Português (Brasil)',
      lang: 'pt-BR',
      link: '/pt-BR/modules/',
      themeConfig: localeModulesConfig('pt-BR'),
    },
    hi: {
      label: 'हिन्दी',
      lang: 'hi',
      link: '/hi/modules/',
      themeConfig: localeModulesConfig('hi'),
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      link: '/vi/modules/',
      themeConfig: localeModulesConfig('vi'),
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id',
      link: '/id/modules/',
      themeConfig: localeModulesConfig('id'),
    },
    th: {
      label: 'ภาษาไทย',
      lang: 'th',
      link: '/th/modules/',
      themeConfig: localeModulesConfig('th'),
    },
    tr: {
      label: 'Türkçe',
      lang: 'tr',
      link: '/tr/modules/',
      themeConfig: localeModulesConfig('tr'),
    },
    pl: {
      label: 'Polski',
      lang: 'pl',
      link: '/pl/modules/',
      themeConfig: localeModulesConfig('pl'),
    },
    it: {
      label: 'Italiano',
      lang: 'it',
      link: '/it/modules/',
      themeConfig: localeModulesConfig('it'),
    },
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Flyto2 Docs',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      {
        text: 'Platform',
        items: [
          { text: 'Core Engine', link: '/core/' },
          { text: 'MCP Server', link: '/mcp/' },
          { text: 'Modules', link: '/modules/' },
        ],
      },
      {
        text: 'Tools',
        items: [
          { text: 'flyto-ai', link: '/ai/' },
          { text: 'flyto-indexer', link: '/indexer/' },
          { text: 'flyto-blueprint', link: '/blueprint/' },
        ],
      },
      { text: 'Blog', link: 'https://blog.flyto2.com' },
      { text: 'Flyto2', link: 'https://flyto2.com' },
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
      '/modules/': modulesSidebar(),
      '/ai/': [
        {
          text: 'flyto-ai',
          items: [
            { text: 'Overview', link: '/ai/' },
            { text: 'Agent Core', link: '/ai/agent' },
            { text: 'LLM Providers', link: '/ai/providers' },
            { text: 'Claude Code Agent', link: '/ai/claude-code' },
            { text: 'Memory', link: '/ai/memory' },
            { text: 'Channels', link: '/ai/channels' },
            { text: 'Prompt System', link: '/ai/prompts' },
            { text: 'CLI Reference', link: '/ai/cli' },
          ],
        },
      ],
      '/indexer/': [
        {
          text: 'flyto-indexer',
          items: [
            { text: 'Overview', link: '/indexer/' },
            { text: 'MCP Tools', link: '/indexer/tools' },
            { text: 'Configuration', link: '/indexer/configuration' },
            { text: 'CLI Reference', link: '/indexer/cli' },
            { text: 'Language Support', link: '/indexer/languages' },
          ],
        },
      ],
      '/blueprint/': [
        {
          text: 'flyto-blueprint',
          items: [
            { text: 'Overview', link: '/blueprint/' },
            { text: 'Builtin Blueprints', link: '/blueprint/blueprints' },
            { text: 'Learning & Scoring', link: '/blueprint/learning' },
            { text: 'Storage Backends', link: '/blueprint/storage' },
            { text: 'API Reference', link: '/blueprint/api' },
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
      copyright: `Copyright 2025-${new Date().getFullYear()} Flyto2`,
    },
  },
})
