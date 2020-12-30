import colors from 'vuetify/es5/util/colors'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // only for testing as this bed for SEO
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - aralang',
    title: 'aralang',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // 'plugins/axios',
    'plugins/vuetify',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  router: {
    base: '/aralang/'
  },

    // routerBase:
    // process.env.DEPLOY_ENV === "GH_PAGES"
    //   ? {
    //     router: {
    //       base: "/my-nuxt-app/"
    //     }
    //   }
    //   : {},

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios',
    '@nuxtjs/proxy',
    ...routerBase
  ],

  // to communicate with Laravel backend
  axios: {
    baseURL: 'http://localhost:8000',

  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    },
    router: {
      base: '/aralang/'
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    },
    router: {
      base: '/aralang/'
    },
  },

  // for avoiding issues with CORS
  proxy: {
    '/api/v1': {target: 'API_URL', pathRewrite: {'^/api/v1': ''}}
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

}
