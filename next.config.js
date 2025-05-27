const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

const nextConfig = {
  images: {
    domains: ['source.unsplash.com'], // ✅ Add your image domains here
  }
}

module.exports = withNextra(nextConfig)
