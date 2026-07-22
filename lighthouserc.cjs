module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      staticDistDir: './.vitepress/dist',
      url: [
        'http://localhost/',
        'http://localhost/core/',
        'http://localhost/core/whitepaper.html',
        'http://localhost/core/reference/',
        'http://localhost/mcp/',
        'http://localhost/modules/',
        'http://localhost/warroom/self-hosted-ce.html',
      ],
      settings: {
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
      },
    },
    assert: {
      assertions: {
        'categories:seo': ['error', { minScore: 1 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:performance': ['error', { minScore: 0.8 }],
        canonical: 'error',
        'document-title': 'error',
        'is-crawlable': 'error',
        'meta-description': 'error',
        'robots-txt': 'error',
      },
    },
    upload: {
      target: 'filesystem',
      outputDir: './.lighthouseci',
    },
  },
};
