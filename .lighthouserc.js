module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        'font-display': 'warn',
        'unused-css-rules': 'warn',
        'uses-rel-preconnect': 'warn',
      },
    },
    collect: {
      staticDistDir: './packages/frontend/dist/',
      isSinglePageApplication: true,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}
