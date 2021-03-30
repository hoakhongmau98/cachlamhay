export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'noneproject',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' }
    ]
  },
  tailwindcss: {
    jit: true
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    // '~/assets/css/main.css',
    // SCSS file in the project
    // '~/assets/css/main.scss',
    './assets/css/error.css',
    'element-ui/lib/theme-chalk/index.css',
    './assets/css/base.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module']

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  }
}
