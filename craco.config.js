// Dynamic Impact - CRACO Configuration for Modern JavaScript
// This optimizes the build for modern browsers and reduces bundle size

const path = require('path');

module.exports = {
  babel: {
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
          modules: false,
          bugfixes: true
        }
      ]
    ],
    plugins: [
      // Only essential plugins
      '@babel/plugin-proposal-class-properties'
    ]
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Optimize for modern browsers
      if (env === 'production') {
        // Remove unnecessary polyfills
        webpackConfig.resolve.fallback = {
          ...webpackConfig.resolve.fallback,
          // Don't include Node.js polyfills
          fs: false,
          net: false,
          tls: false,
          crypto: false,
          stream: false,
          url: false,
          zlib: false,
          http: false,
          https: false,
          assert: false,
          os: false,
          path: false
        };

        // Optimize bundle splitting
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
                priority: 10
              },
              common: {
                name: 'common',
                minChunks: 2,
                chunks: 'all',
                priority: 5,
                reuseExistingChunk: true
              }
            }
          }
        };
      }

      return webpackConfig;
    }
  }
};
