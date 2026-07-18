import { defineConfig, type DefaultTheme } from 'vitepress'
import {
  defaultOgLocale,
  manifestKeywordTerms,
  publishedAlternateLinks,
  siteUrl,
} from './seo-contract'

const SITE_URL = siteUrl
const CORE_MODULE_COUNT = 451
const CORE_CATALOG_CATEGORY_COUNT = 84
const BUILT_IN_RECIPE_COUNT = 41
const CORE_RUNTIME_SUMMARY = `${CORE_MODULE_COUNT} registry-backed modules across ${CORE_CATALOG_CATEGORY_COUNT} catalog categories, ${BUILT_IN_RECIPE_COUNT} built-in recipes, MCP transports, evidence capture, and replayable YAML execution`
const SITE_DESCRIPTION = 'Technical docs for Flyto2 Core, an open-source AI agent framework for AI workflow automation, MCP server automation, no-code browser workflows, replay, and CTEM evidence.'
const SEO_KEYWORDS = [
  'Flyto2 docs',
  'AI workflow automation',
  'open source AI agent framework',
  'open source AI workflow automation',
  'MCP server automation',
  'MCP automation tools',
  'flyto-core MCP server',
  'no-code browser automation',
  'self-hosted workflow automation',
  'CTEM',
  'security war room',
  'attack surface management',
  'EASM',
  'dark web monitoring',
  'code risk',
  'AI security',
  'MCP security',
  `${CORE_MODULE_COUNT} modules`,
  `${CORE_CATALOG_CATEGORY_COUNT} catalog categories`,
  `${BUILT_IN_RECIPE_COUNT} recipes`,
  ...manifestKeywordTerms(),
]
const PAGE_SEO: Record<string, { title: string; description: string }> = {
  'guide/what-is-flyto2': {
    title: 'Open Source AI Agent Framework',
    description: 'Learn how Flyto2 works as an open source AI agent framework for deterministic modules, MCP server automation, workflow replay, and evidence.',
  },
  'guide/getting-started': {
    title: 'AI Workflow Automation Getting Started',
    description: 'Start Flyto2 AI workflow automation with install paths, recipes, MCP modules, browser workflows, evidence capture, and replay.',
  },
  'guide/installation': {
    title: 'Install Flyto2',
    description: 'Install Flyto2 with PyPI, optional browser automation extras, source checkout, version checks, and system requirements.',
  },
  'guide/first-workflow': {
    title: 'AI Workflow Automation Examples',
    description: 'Build AI workflow automation examples in Flyto2 with YAML steps, modules, inputs, evidence, replay, and CI-friendly output.',
  },
  'guide/modules-overview': {
    title: 'MCP Server Automation Modules',
    description: 'Explore MCP server automation modules in Flyto2 Core, including browser, file, HTTP, data, verification, and workflow tools.',
  },
  'guide/configuration': {
    title: 'Workflow Automation Configuration',
    description: 'Configure Flyto2 workflow automation configuration for local runs, MCP tools, environment values, retries, evidence, and replay.',
  },
  core: {
    title: 'Open Source Execution Engine for AI Agents',
    description: 'Flyto2 Core is an open source execution engine for AI agents with deterministic workflows, queueing, MCP tools, evidence, and replay.',
  },
  'core/architecture': {
    title: 'AI Agent Runtime Architecture',
    description: 'Understand the Flyto2 AI agent runtime architecture for modules, queues, triggers, MCP transports, evidence, versioning, and replay.',
  },
  'core/execution-model': {
    title: 'Versioned Workflow Automation Engine',
    description: 'Flyto2 is a versioned workflow automation engine for deterministic YAML runs, triggers, queues, module contracts, evidence, and replay.',
  },
  'core/evidence-replay': {
    title: 'AI Agent Runtime with Queue and Replay',
    description: 'Flyto2 Core is an AI agent runtime with queue and replay so workflow steps can be audited, resumed, verified, and cited.',
  },
  mcp: {
    title: 'MCP Server Automation',
    description: 'Use Flyto2 for MCP server automation with stdio, streamable HTTP, 451 registry-backed modules, client configuration, and tool evidence.',
  },
  'mcp/stdio': {
    title: 'MCP Stdio Transport',
    description: 'Configure the Flyto2 MCP stdio transport for local AI clients, module discovery, tool execution, schemas, and audit-friendly output.',
  },
  'mcp/streamable-http': {
    title: 'MCP Streamable HTTP',
    description: 'Configure Flyto2 MCP streamable HTTP for remote clients, multi-client automation, module execution, schemas, and evidence output.',
  },
  'mcp/client-config': {
    title: 'MCP Client Configuration',
    description: 'Set up MCP client configuration for Flyto2 across Claude Desktop, VS Code, local stdio, streamable HTTP, modules, and tool policies.',
  },
  modules: {
    title: '451 Registry-Backed Modules',
    description: 'Browse 451 registry-backed modules in Flyto2 Core across browser automation, MCP tools, verification, data, files, HTTP, and workflows.',
  },
  'modules/browser': {
    title: 'No Code Browser Automation',
    description: 'Use Flyto2 no code browser automation modules for browser actions, screenshots, extraction, replay, evidence, and Playwright-friendly workflows.',
  },
  'modules/mcp': {
    title: 'MCP Automation Tools',
    description: 'Use Flyto2 MCP automation tools to expose modules to AI agents with schemas, approvals, deterministic execution, evidence, and replay.',
  },
  'modules/verify': {
    title: 'Workflow Verification',
    description: 'Apply Flyto2 workflow verification modules to assert outputs, check evidence, validate browser runs, and keep automation reliable.',
  },
  warroom: {
    title: 'Security War Room',
    description: 'Flyto2 Warroom is a security war room for CTEM, attack surface management, evidence, remediation, reports, and self-hosted CE evaluation.',
  },
  'warroom/self-hosted-ce': {
    title: 'Self-Hosted Security War Room',
    description: 'Install the Flyto2 self-hosted security war room with Warroom CE, local data, Docker, evidence, CTEM workflows, and bridge-ready contracts.',
  },
  'warroom/closed-loop': {
    title: 'Continuous Threat Exposure Management',
    description: 'Use Flyto2 for continuous threat exposure management workflows that connect discovery, prioritization, validation, remediation, and evidence.',
  },
  'warroom/surfaces/attack-surface': {
    title: 'Attack Surface Management',
    description: 'Use Flyto2 attack surface management docs to connect assets, repositories, scanner findings, CTEM prioritization, evidence, and remediation.',
  },
  'warroom/surfaces/mcp-security': {
    title: 'MCP Security',
    description: 'Review Flyto2 MCP security guidance for tool exposure, client permissions, server transport, audit trails, and safe agent automation.',
  },
  ai: {
    title: 'AI Agent Framework',
    description: 'Use Flyto2 as an AI agent framework for deterministic tools, MCP server automation, workflow recipes, evidence, replay, and governance.',
  },
  indexer: {
    title: 'Code Intelligence',
    description: 'Use Flyto2 code intelligence with flyto-indexer for repository context, dependency impact, task planning, validation, and evidence.',
  },
  blueprint: {
    title: 'Workflow Blueprint',
    description: 'Use Flyto2 workflow blueprint docs to plan repeatable workflows, automation recipes, module boundaries, reviews, and execution evidence.',
  },
  community: {
    title: 'Open-Source AI Workflow Automation Community',
    description: 'Join the Flyto2 open-source AI workflow automation community for docs, good-first issues, recipes, MCP examples, and reviewed releases.',
  },
}
const NON_CONTENT_PATHS = new Set([
  'AGENTS.md',
  'ARCHITECTURE.md',
  'CHANGELOG.md',
  'CLAUDE.md',
  'CONTRIBUTING.md',
  'DECISIONS.md',
  'PROJECT.md',
  'README.md',
  'ROADMAP.md',
  'SECURITY.md',
  'STATE.md',
  'tasks.md',
  'docs/README.md',
  'public/images/CREDITS.md',
])

function toPublicPath(url: string) {
  return url.startsWith('http') ? new URL(url).pathname : url
}

function isNonContentPath(relativePath: string) {
  return NON_CONTENT_PATHS.has(relativePath)
    || relativePath.startsWith('public/')
    || relativePath.startsWith('workflows/')
    || relativePath.startsWith('handoffs/')
}

function isNonContentPublicPath(publicPath: string) {
  const normalized = publicPath
    .replace(/^\/+/, '')
    .replace(/\/$/, '')
    .replace(/\.html$/, '')
  const markdownPath = normalized ? `${normalized}.md` : 'index.md'

  return isNonContentPath(normalized) || isNonContentPath(markdownPath)
}

function titleFromSegment(segment: string) {
  return segment
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function breadcrumbItems(canonicalPath: string, title: string) {
  const parts = canonicalPath.split('/').filter(Boolean)
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Flyto2 Docs', item: `${SITE_URL}/` },
  ]

  parts.forEach((part, index) => {
    const path = parts.slice(0, index + 1).join('/')
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: index === parts.length - 1 ? title : titleFromSegment(part),
      item: `${SITE_URL}/${path}`,
    })
  })

  return items
}

// ---------------------------------------------------------------------------
// Shared sidebar definition (reused across locales)
// ---------------------------------------------------------------------------

function modulesSidebar(prefix = ''): DefaultTheme.SidebarItem[] {
  const p = prefix ? `/${prefix}` : ''
  return [
    {
      text: 'Modules Reference',
      items: [
        { text: 'Overview', link: `${p}/modules/` },
      ],
    },
    {
      text: 'Core Runtime',
      collapsed: false,
      items: [
        { text: 'Browser Automation', link: `${p}/modules/browser` },
        { text: 'Atomic', link: `${p}/modules/atomic` },
        { text: 'Flow Control', link: `${p}/modules/flow-control` },
        { text: 'File Operations', link: `${p}/modules/file-operations` },
        { text: 'Sandbox', link: `${p}/modules/sandbox` },
        { text: 'Element', link: `${p}/modules/element` },
        { text: 'MCP', link: `${p}/modules/mcp` },
      ],
    },
    {
      text: 'Data',
      collapsed: true,
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
      text: 'Infrastructure & Cloud',
      collapsed: true,
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
      collapsed: true,
      items: [
        { text: 'AI & LLM', link: `${p}/modules/ai-llm` },
        { text: 'Notifications', link: `${p}/modules/notification` },
        { text: 'Communication', link: `${p}/modules/communication` },
        { text: 'Productivity', link: `${p}/modules/productivity` },
        { text: 'Document', link: `${p}/modules/document` },
        { text: 'Image Processing', link: `${p}/modules/image` },
      ],
    },
    {
      text: 'Quality & Security',
      collapsed: true,
      items: [
        { text: 'Verify', link: `${p}/modules/verify` },
        { text: 'Verification', link: `${p}/modules/verification` },
        { text: 'Warroom', link: `${p}/modules/warroom` },
        { text: 'Validate', link: `${p}/modules/validate` },
        { text: 'Check', link: `${p}/modules/check` },
        { text: 'Analysis', link: `${p}/modules/analysis` },
        { text: 'Testing', link: `${p}/modules/testing` },
        { text: 'Compare', link: `${p}/modules/compare` },
        { text: 'Training', link: `${p}/modules/training` },
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
  title: 'Flyto2 Docs',
  titleTemplate: ':title | Flyto2',
  description: SITE_DESCRIPTION,
  lang: 'en-US',
  cleanUrls: true,
  srcExclude: [
    'ja/warroom/**',
    'ko/warroom/**',
    'zh-TW/warroom/**',
    'de/warroom/**',
    'es/warroom/**',
    'fr/warroom/**',
    'hi/warroom/**',
    'id/warroom/**',
    'it/warroom/**',
    'pl/warroom/**',
    'pt-BR/warroom/**',
    'th/warroom/**',
    'tr/warroom/**',
    'vi/warroom/**',
  ],
  markdown: {
    // Disable Vue template compilation inside code blocks/YAML examples
    // to prevent <token>, <name>, <users> etc from being parsed as HTML.
    attrs: { disable: true },
  },
  vue: {
    template: {
      compilerOptions: {
        // Safety net for auto-generated module docs: treat placeholder-like
        // tags as custom elements so Vue won't error on missing end tags.
        // Catches: <oauth2-token>, <TOKEN>, <?xml>, <base64-encoded-ciphertext>
        // The generate script escapes most HTML patterns; this is a fallback.
        isCustomElement: (tag) => /[-?]/.test(tag) || /^[A-Z][A-Z0-9_]*$/.test(tag),
      },
    },
  },
  vite: {
    build: {
      target: 'esnext',
    },
  },
  sitemap: {
    hostname: SITE_URL,
    transformItems(items) {
      return items.filter(item => {
        const normalized = toPublicPath(item.url)
        return !isNonContentPublicPath(normalized)
      })
    }
  },
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Flyto2 Docs' }],
    ['meta', { property: 'og:title', content: 'Flyto2 Docs - AI Workflow Automation, MCP, and CTEM War Room' }],
    ['meta', { property: 'og:description', content: SITE_DESCRIPTION }],
    ['meta', { property: 'og:image', content: 'https://docs.flyto2.com/og-image.png' }],
    ['meta', { property: 'og:image:alt', content: 'Flyto2 Docs - Warroom, MCP, CTEM, and AI workflow automation reference' }],
    ['meta', { property: 'og:locale', content: defaultOgLocale }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Flyto2 Docs - AI Workflow Automation, MCP, and CTEM War Room' }],
    ['meta', { name: 'twitter:description', content: SITE_DESCRIPTION }],
    ['meta', { name: 'twitter:image', content: 'https://docs.flyto2.com/og-image.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Flyto2 Docs - Warroom, MCP, CTEM, and AI workflow automation reference' }],
    // SEO
    ['meta', { name: 'keywords', content: SEO_KEYWORDS.join(', ') }],
    ['meta', { name: 'author', content: 'Flyto2 Team' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    // JSON-LD structured data
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Flyto2 Docs',
      description: SITE_DESCRIPTION,
      url: 'https://docs.flyto2.com',
      about: [
        'AI workflow automation',
        'open source AI agent framework',
        'MCP server automation',
        'no-code browser automation',
        'CTEM',
        'security war room',
        'MCP security',
        'deterministic automation',
        CORE_RUNTIME_SUMMARY,
      ],
      publisher: {
        '@type': 'Organization',
        name: 'Flyto2',
        url: 'https://flyto2.com',
        logo: { '@type': 'ImageObject', url: 'https://docs.flyto2.com/logo.png' },
      },
    })],
  ],

  transformPageData(pageData) {
    const isNonContent = isNonContentPath(pageData.relativePath)
    const canonicalPath = pageData.relativePath === 'index.md'
      ? ''
      : pageData.relativePath
          .replace(/(^|\/)index\.md$/, '$1')
          .replace(/\.md$/, '')
          .replace(/\/$/, '')
    const canonicalUrl = `${SITE_URL}${canonicalPath ? `/${canonicalPath}` : ''}`
    const seo = PAGE_SEO[canonicalPath]

    if (seo) {
      pageData.title = seo.title
      pageData.description = seo.description
      pageData.frontmatter.title = seo.title
      pageData.frontmatter.description = seo.description
    }

    pageData.frontmatter.head = [
      ...(pageData.frontmatter.head || []),
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ...publishedAlternateLinks(canonicalPath),
      ...(seo ? [
        ['meta', { property: 'og:title', content: `${seo.title} | Flyto2` }],
        ['meta', { property: 'og:description', content: seo.description }],
        ['meta', { name: 'twitter:title', content: `${seo.title} | Flyto2` }],
        ['meta', { name: 'twitter:description', content: seo.description }],
      ] as [string, Record<string, string>][] : []),
      ...(isNonContent ? [['meta', { name: 'robots', content: 'noindex, follow' }] as [string, Record<string, string>]] : []),
    ]

    if (!isNonContent && canonicalPath) {
      const title = pageData.frontmatter.title || pageData.title
      const description = pageData.frontmatter.description || pageData.description || ''
      const dateModified = pageData.lastUpdated
        ? new Date(pageData.lastUpdated).toISOString()
        : undefined

      pageData.frontmatter.head = [
        ...(pageData.frontmatter.head || []),
        ['script', { type: 'application/ld+json' }, JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': `${canonicalUrl}#webpage`,
              url: canonicalUrl,
              name: title,
              description,
              isPartOf: { '@id': `${SITE_URL}/#website` },
              breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
            },
            {
              '@type': 'TechArticle',
              '@id': `${canonicalUrl}#article`,
              headline: title,
              description,
              url: canonicalUrl,
              dateModified,
              author: { '@type': 'Organization', name: 'Flyto2', url: 'https://flyto2.com' },
              publisher: {
                '@type': 'Organization',
                name: 'Flyto2',
                url: 'https://flyto2.com',
                logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
              },
              mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
              about: {
                '@type': 'Thing',
                name: titleFromSegment(canonicalPath.split('/')[0] || 'docs'),
              },
            },
            {
              '@type': 'BreadcrumbList',
              '@id': `${canonicalUrl}#breadcrumb`,
              itemListElement: breadcrumbItems(canonicalPath, title),
            },
          ],
        })],
      ]
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
    },
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Flyto2 Docs',

    nav: [
      {
        text: 'Start',
        items: [
          { text: 'What is Flyto2?', link: '/guide/what-is-flyto2' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'First Workflow', link: '/guide/first-workflow' },
        ],
      },
      {
        text: 'Build',
        items: [
          { text: 'Core Runtime', link: '/core/' },
          { text: 'MCP Server', link: '/mcp/' },
          { text: 'Modules Reference', link: '/modules/' },
          { text: 'Configuration', link: '/guide/configuration' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'flyto-ai', link: '/ai/' },
          { text: 'flyto-indexer', link: '/indexer/' },
          { text: 'flyto-blueprint', link: '/blueprint/' },
        ],
      },
      {
        text: 'Security',
        items: [
          { text: 'Warroom Overview', link: '/warroom/' },
          { text: 'Self-hosted CE', link: '/warroom/self-hosted-ce' },
          { text: 'Security Surfaces', link: '/warroom/surfaces/' },
          { text: 'BYO Integrations', link: '/warroom/byo-integration' },
          { text: 'Scoring Methodology', link: '/warroom/scoring-methodology' },
        ],
      },
      {
        text: 'Resources',
        items: [
          { text: 'Product Lines', link: '/strategy/flyto2-product-lines' },
          { text: 'Community', link: '/community/' },
          { text: 'Blog', link: 'https://blog.flyto2.com' },
          { text: 'Product Site', link: 'https://flyto2.com' },
          { text: 'Warroom CE on GitHub', link: 'https://github.com/flytohub/flyto-warroom' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Start Here',
          collapsed: false,
          items: [
            { text: 'What is Flyto2?', link: '/guide/what-is-flyto2' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
          ],
        },
        {
          text: 'Build A Workflow',
          collapsed: false,
          items: [
            { text: 'Your First Workflow', link: '/guide/first-workflow' },
            { text: 'Modules Overview', link: '/guide/modules-overview' },
            { text: 'Configuration', link: '/guide/configuration' },
          ],
        },
        {
          text: 'Next Steps',
          collapsed: true,
          items: [
            { text: 'Core Runtime', link: '/core/' },
            { text: 'MCP Server', link: '/mcp/' },
            { text: 'Modules Reference', link: '/modules/' },
            { text: 'AI Tools', link: '/ai/' },
            { text: 'Security Warroom', link: '/warroom/' },
          ],
        },
      ],
      '/strategy/': [
        {
          text: 'Strategy',
          items: [
            { text: 'Flyto2 Product Lines', link: '/strategy/flyto2-product-lines' },
          ],
        },
      ],
      '/community/': [
        {
          text: 'Community',
          items: [
            { text: 'Community Guide', link: '/community/' },
          ],
        },
      ],
      '/core/': [
        {
          text: 'Core Runtime',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/core/' },
            { text: 'Architecture', link: '/core/architecture' },
            { text: 'Execution Model', link: '/core/execution-model' },
            { text: 'Evidence & Replay', link: '/core/evidence-replay' },
          ],
        },
        {
          text: 'Related References',
          collapsed: true,
          items: [
            { text: 'MCP Server', link: '/mcp/' },
            { text: 'Modules Reference', link: '/modules/' },
            { text: 'First Workflow', link: '/guide/first-workflow' },
          ],
        },
      ],
      '/mcp/': [
        {
          text: 'MCP Server',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/mcp/' },
            { text: 'STDIO Transport', link: '/mcp/stdio' },
            { text: 'Streamable HTTP', link: '/mcp/streamable-http' },
            { text: 'Client Configuration', link: '/mcp/client-config' },
          ],
        },
        {
          text: 'Related References',
          collapsed: true,
          items: [
            { text: 'Core Runtime', link: '/core/' },
            { text: 'Modules Reference', link: '/modules/' },
            { text: 'MCP Security', link: '/warroom/surfaces/mcp-security' },
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
      '/warroom/': [
        {
          text: 'Start Here',
          collapsed: false,
          items: [
            { text: 'Home', link: '/warroom/' },
            { text: 'Overview', link: '/warroom/overview' },
            { text: 'MSSP Overview', link: '/warroom/mssp-overview' },
            { text: 'War-Room Concept', link: '/warroom/war-room-concept' },
            { text: 'Getting Started', link: '/warroom/getting-started' },
            { text: 'Self-hosted CE', link: '/warroom/self-hosted-ce' },
            { text: 'Product Tour', link: '/warroom/product-tour' },
          ],
        },
        {
          text: 'Products',
          collapsed: true,
          items: [
            { text: 'Flyto2 Code (VA/PT)', link: '/warroom/flyto-code' },
            { text: 'Flyto2 Domains (CTEM)', link: '/warroom/flyto-domains' },
          ],
        },
        {
          text: 'Security Surfaces',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/warroom/surfaces/' },
            { text: 'External Attack Surface', link: '/warroom/surfaces/attack-surface' },
            { text: 'Code Intelligence', link: '/warroom/surfaces/code-intelligence' },
            { text: 'MCP Security', link: '/warroom/surfaces/mcp-security' },
            { text: 'Container & Cloud Identity', link: '/warroom/surfaces/container-cloud-identity' },
            { text: 'Darkweb & Threat Intel', link: '/warroom/surfaces/darkweb-threat-intel' },
            { text: 'Footprint & Attribution', link: '/warroom/surfaces/footprint-attribution' },
            { text: 'Asset Map', link: '/warroom/surfaces/asset-map' },
            { text: 'Pentest', link: '/warroom/surfaces/pentest' },
            { text: 'Red-Team Simulation', link: '/warroom/surfaces/red-team' },
            { text: 'Unified Scoring', link: '/warroom/surfaces/unified-scoring' },
          ],
        },
        {
          text: 'Scoring & Events',
          collapsed: true,
          items: [
            { text: 'Scoring Methodology', link: '/warroom/scoring-methodology' },
            { text: 'Score Events', link: '/warroom/score-events' },
          ],
        },
        {
          text: 'Workflows',
          collapsed: true,
          items: [
            { text: 'Closed-Loop Verify', link: '/warroom/closed-loop' },
            { text: 'Pulse', link: '/warroom/pulse' },
            { text: 'Red Team', link: '/warroom/red-team' },
          ],
        },
        {
          text: 'Reference',
          collapsed: true,
          items: [
            { text: 'API Reference', link: '/warroom/api' },
            { text: 'Integrations', link: '/warroom/integrations' },
            { text: 'BYO Integration', link: '/warroom/byo-integration' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/flytohub/flyto-warroom' },
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
