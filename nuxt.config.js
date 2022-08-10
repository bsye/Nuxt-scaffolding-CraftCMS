export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: (context) => {
    try {
      if (context.$store.state.globals) {
        const description = context.$store.state.globals.seo.description;
        const title = context.$store.state.globals.seo.title;
        const favicon = context.$store.state.globals.seo.favicon;

        return {
          title: title,
          htmlAttrs: {
            lang: "it",
          },
          meta: [
            {
              charset: "utf-8",
            },
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            },
            {
              hid: "description",
              name: "description",
              content: description,
            },
            {
              name: "format-detection",
              content: "telephone=no",
            },
          ],
          link: [
            {
              rel: "icon",
              type: "image/png",
              href: favicon ? favicon : "/favicon.png",
            },
          ],
        };
      }
    } catch (error) {
      console.log("HEAD error", error);
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  image: {
    domains: [process.env.BASE_CMS],
    //
  },

  devServerHandlers: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/utils.js",
    "~/plugins/directives.client.js",
    "~/plugins/login.client.js",
    "~/plugins/craft.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/svg",
    "@nuxtjs/axios",
    "@nuxtjs/google-fonts",
    "nuxt-webpack-optimisations",
    "nuxt-graphql-request",
    "nuxt-compress",
  ],

  googleFonts: {
    families: {
      Inter: true,
    },
  },

  env: {
    BASE_CMS: process.env.BASE_CMS,
    LOGIN_URL: process.env.LOGIN_URL,
    BASE_URL: process.env.BASE_URL,
    BASE_API: process.env.BASE_API,
    BC_API: process.env.BC_API,
    GMAPS_API: process.env.GMAPS_API,
    DEBUG_QUERY: process.env.DEBUG_QUERY,
  },

  graphql: {
    clients: {
      default: {
        endpoint: process.env.BASE_API,
        mode: "cors",
      },
    },
  },

  privateRuntimeConfig: {
    craftApiUrl: process.env.BASE_API,
    craftAuthToken: process.env.CRAFT_AUTH_TOKEN,
  },

  publicRuntimeConfig: {
    livePreview: process.env.LIVE_PREVIEW === "true",
    craftApiUrl:
      process.env.LIVE_PREVIEW === "true" ? process.env.BASE_API : "",
    craftAuthToken:
      process.env.LIVE_PREVIEW === "true" ? process.env.CRAFT_AUTH_TOKEN : "",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/http",
    [
      "nuxt-gmaps",
      {
        key: process.env.GMAPS_API,
      },
    ],
    [
      "nuxt-compress",
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
  ],

  i18n: {
    parsePages: true,
    langDir: "~/locales/",
    strategy: "prefix",
    locales: [
      {
        code: "it",
        siteId: 1,
        name: "Italiano",
        file: "it.js",
      },
      {
        code: "en",
        siteId: 2,
        name: "Inglese",
        file: "en.js",
      },
    ],
    defaultLocale: "it",

    vuex: {
      moduleName: "i18n",
      syncRouteParams: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
