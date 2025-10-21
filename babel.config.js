// Dynamic Impact - Babel Configuration for Modern Browsers
// Optimized to reduce bundle size by targeting modern browsers only

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // Target modern browsers only
        targets: {
          chrome: '90',
          firefox: '88',
          safari: '14',
          edge: '90'
        },
        // Don't include polyfills for modern browsers
        useBuiltIns: false,
        // Don't transform modules (let bundler handle it)
        modules: false,
        // Enable modern JavaScript features
        bugfixes: true,
        // Don't include unnecessary transformations
        exclude: [
          'transform-typeof-symbol',
          'transform-unicode-regex',
          'transform-sticky-regex',
          'transform-new-target',
          'transform-modules-umd',
          'transform-modules-systemjs',
          'transform-modules-amd',
          'transform-literals'
        ]
      }
    ],
    [
      '@babel/preset-react',
      {
        // Use modern JSX transform
        runtime: 'automatic',
        // Don't include development helpers in production
        development: process.env.NODE_ENV === 'development'
      }
    ]
  ],
  plugins: [
    // Only include essential plugins
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import'
  ],
  // Don't include unnecessary polyfills
  env: {
    production: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              chrome: '90',
              firefox: '88',
              safari: '14',
              edge: '90'
            },
            useBuiltIns: false,
            modules: false
          }
        ]
      ]
    }
  }
};
