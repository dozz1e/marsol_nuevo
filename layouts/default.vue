<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" width="100%" app id="menu-mobile" v-if="$vuetify.breakpoint.mobile">
      <Menu></Menu>
    </v-navigation-drawer>

    <v-app-bar app flat absolute color="transparent" id="menu-principal" height="75">
      <v-container class="pa-0 d-flex align-center justify-space-between">
        <v-app-bar-nav-icon class="white--text" v-if="$vuetify.breakpoint.mobile"
          @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <n-link to="/">
          <v-img src="/logos/logo-completo-footer.png" alt="Banner Cenakin" height="65" width="150" contain></v-img>
        </n-link>
        <Menu v-if="!$vuetify.breakpoint.mobile"></Menu>
      </v-container>
    </v-app-bar>
    <v-main class="pt-0">
      <nuxt />
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mx-2" fab dark color="#43a047" id="boton-whats" href="https://wa.me/56995999796" target="_blank"
            v-on="on" v-bind="attrs" aria-label="Whatsapp">
            <v-icon dark> mdi-message-reply-text </v-icon>
          </v-btn>
        </template>
        <span>Contáctanos a nuestro Whatsapp</span>
      </v-tooltip>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Menu from "~/components/Menu";

export default {
  data: () => ({
    drawer: false,
  }),
  components: {
    Menu,
  },
  mounted() {
    this.listaPropiedades();
    this.ultimasPropiedades();
    this.ultimasVendidas();
  },
  methods: {
    ...mapActions(["listaPropiedades", "ultimasPropiedades", "ultimasVendidas"]),
  },
};
</script>

<style lang="sass">
*
  font-family: 'Roboto', sans-serif

a
  text-decoration: none

body
  background: #efefef
  color: $texto
  max-width: 1366px
  margin: 0 auto

h1,h2,h3,h4,h5,h6,.v-card__title
  font-family: 'Open Sans', sans-serif
  word-break: normal !important

ul, ol
  list-style-type: none
  padding: 0 !important

#boton-whats
  bottom: 20px
  position: fixed
  right: 10px
  z-index: 1000
  @media (min-width: 768px)
    right: 20px

#menu-principal
  color: #ccc
  a
    color: white
  .v-app-bar__nav-icon
    i
      font-size: 32px

.precio, .valor
  background: $rojo !important

.v-card__title
  word-break: normal
</style>

