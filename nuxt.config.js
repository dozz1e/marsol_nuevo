import colors from "vuetify/es5/util/colors";
import axios from "axios";

const rutas = async () => {
  let propiedades = axios
    .get(
      "https://marsolpropiedades.cl/data/wp-json/wp/v2/ms-propiedades?per_page=100"
    )
    .then(res => {
      return res.data.map(crs => {
        return "/propiedades/" + crs.slug;
      });
    });
  return propiedades;
};

export default {
  target: "static",
  ssr: false,
  head: {
    titleTemplate: "%s",
    htmlAttrs: {
      lang: "es"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "robots",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      },
      {
        name: "googlebot",
        content:
          "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      },
      {
        property: "og:image:width",
        content: "1280"
      },
      {
        property: "og:image:height",
        content: "720"
      },
      { property: "og:locale", content: "es_CL" },
      { property: "og:site_name", content: "MarSol Propiedades" }
    ],
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/logos/favicon.svg" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap",
        media: "print",
        onload: "this.media='all'"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/4.9.95/css/materialdesignicons.min.css",
        media: "print",
        onload: "this.media='all'"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "nuxt-leaflet",
    "vue-social-sharing/nuxt",
    "nuxt-ssr-cache"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  sitemap: {
    hostname: "https://marsolpropiedades.cl",
    gzip: true,
    routes: rutas
  },

  generate: {
    routes: rutas,
    fallback: "404"
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
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    }
  },

  cache: {
    useHostPrefix: false,
    pages: ["/"],
    store: {
      type: "memory",
      max: 100,
      ttl: 60
    }
  }
};
