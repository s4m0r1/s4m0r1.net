const fs = require('fs')
const blogsSummary = JSON.parse(fs.readFileSync('contents/summary.json'))


module.exports = {
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['bootstrap-vue/nuxt', { css: false }],
    ['@nuxtjs/markdownit']
  ],
  /*
  ** env
  */ 
  env: {
    summary: blogsSummary,
  },

  /*
  ** markdownit
  */
  markdownit: {
  preset: 'default',
  linkify: false,
  breaks: true,
  html: true,
  typegraphy: true,
  injected: true,
  use: [
    'markdown-it-meta',
    'markdown-it-highlightjs',
    'markdown-it-table-of-contents',
    'markdown-it-anchor'
  ]
},

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
