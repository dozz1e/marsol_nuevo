import colors from "vuetify/es5/util/colors";
import axios from "axios";

const rutas = async () => {
  let propiedades = axios
    .post("https://marsolpropiedades.cl/data/graphql", {
      query: `{
          propiedades(first: 100, where: {categoryId: 2}) {
            nodes {
              title
              slug
            }
          }
        }`,
    })
    .then((res) => {
      return res.data.data.propiedades.nodes.map((crs) => {
        return "/propiedades/" + crs.slug;
      });
    });
  return propiedades;
};

export default {
  target: "static",
  head: {
    titleTemplate: "%s",
    htmlAttrs: {
      lang: "es",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:type", content: "website" },
      {
        property: "og:image:width",
        content: "300",
      },
      {
        property: "og:image:height",
        content: "300",
      },
      { property: "og:locale", content: "es_CL" },
      { property: "og:site_name", content: "MarSol Propiedades" },
    ],
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/logos/favicon.svg" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap",
        media: "print",
        onload: "this.media='all'",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.9.95/css/materialdesignicons.min.css",
        media: "print",
        onload: "this.media='all'",
      },
    ],
    script: [
      {
        type: "module",
        src: "https://www.googletagmanager.com/gtag/js?id=G-ML88QTCTJF",
        defer: true,
      },
      {
        type: "module",
        src: "https://marsolpropiedades.cl/js/google.js",
        defer: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vue-slick-carousel/dist/vue-slick-carousel.css"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "./plugins/vue-slick-carousel.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "nuxt-leaflet",
    "vue-social-sharing/nuxt",
    "nuxt-ssr-cache",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  sitemap: {
    hostname: "https://marsolpropiedades.cl",
    gzip: true,
    routes: rutas,
  },

  generate: {
    routes: rutas,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    defaultAssets: false,
    theme: {
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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]],
    },
  },

  cache: {
    useHostPrefix: false,
    pages: ["/"],
    store: {
      type: "memory",
      max: 100,
      ttl: 60,
    },
  },
};
