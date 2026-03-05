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
        { text: 'Stealth', link: `${p}/modules/stealth` },
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
  title: 'Flyto2 Docs',
  description: 'Documentation for Flyto2 — Enterprise Workflow Platform',
  lang: 'en-US',
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:site_name', content: 'Flyto2 Docs' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
    'zh-TW': {
      label: '繁體中文',
      lang: 'zh-TW',
      themeConfig: localeModulesConfig('zh-TW'),
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      themeConfig: localeModulesConfig('ja'),
    },
    ko: {
      label: '한국어',
      lang: 'ko',
      themeConfig: localeModulesConfig('ko'),
    },
    fr: {
      label: 'Français',
      lang: 'fr',
      themeConfig: localeModulesConfig('fr'),
    },
    es: {
      label: 'Español',
      lang: 'es',
      themeConfig: localeModulesConfig('es'),
    },
    de: {
      label: 'Deutsch',
      lang: 'de',
      themeConfig: localeModulesConfig('de'),
    },
    'pt-BR': {
      label: 'Português (Brasil)',
      lang: 'pt-BR',
      themeConfig: localeModulesConfig('pt-BR'),
    },
    hi: {
      label: 'हिन्दी',
      lang: 'hi',
      themeConfig: localeModulesConfig('hi'),
    },
    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      themeConfig: localeModulesConfig('vi'),
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id',
      themeConfig: localeModulesConfig('id'),
    },
    th: {
      label: 'ภาษาไทย',
      lang: 'th',
      themeConfig: localeModulesConfig('th'),
    },
    tr: {
      label: 'Türkçe',
      lang: 'tr',
      themeConfig: localeModulesConfig('tr'),
    },
    pl: {
      label: 'Polski',
      lang: 'pl',
      themeConfig: localeModulesConfig('pl'),
    },
    it: {
      label: 'Italiano',
      lang: 'it',
      themeConfig: localeModulesConfig('it'),
    },
  },

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
      '/modules/': modulesSidebar(),
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
