export default {
  target: "static",
  router: {
    base: "/daisy-web/",
  },
  generate: {
    fallback: true,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "daisy",
    titleTemplate: "%s - Daisy",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/scss/style.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/vue-awesome-swiper.js",
    "~/plugins/silentbox.js",
    "~/plugins/vue2-google-maps.js",
    "~/plugins/vuejs-paginate.js",
    "~/plugins/vue-select.js",
    {
      src: "~/plugins/aos",
      ssr: false,
    },
    {
      src: "~/plugins/typed.js",
      ssr: true,
    },
    {
      src: "~plugins/vue-backtotop.js",
      ssr: false,
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/style-resources",
  ],

  styleResources: {
    scss: ["~/assets/scss/_variables.scss"],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, ctx) {},

    transpile: [/^vue2-google-maps($|\/)/],
  },
};
