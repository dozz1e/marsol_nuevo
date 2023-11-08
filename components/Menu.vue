<template>
  <div>
    <v-list id="menu-basico" color="transparent" :class="posicion ? 'flex-column' : ''">
      <v-list-item v-if="$vuetify.breakpoint.mobile && !foot">
        <v-img src="/logos/logo-completo.png" height="100" width="100" contain class="mb-5 mt-5" v-if="color"></v-img>
      </v-list-item>
      <v-list-item v-for="(link, index) in links" :key="index" link>
        <v-list-item-content>
          <v-list-item-title class="d-flex" :class="posicion ? 'justify-start borde' : 'justify-center'">
            <a :href="link.ruta" :class="color ? 'black--text' : ''">{{ link.nombre }}</a>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: Boolean,
      default: false,
    },
    posicion: {
      type: Boolean,
      default: false,
    },
    foot: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    links: [
      {
        nombre: "INICIO",
        ruta: "/",
      },
      {
        nombre: "NOSOTROS",
        ruta: "/nosotros",
      },
      {
        nombre: "SERVICIOS",
        ruta: "/servicios",
      },
      {
        nombre: "PROPIEDADES",
        ruta: "/propiedades",
      },
      {
        nombre: "CONTACTO",
        ruta: "/contacto",
      },
    ],
  }),
};
</script>

<style lang="sass">
#menu-basico
  .borde
    border-bottom: 1px solid rgba(255,255,255,.2)
    padding: 10px 0
    a
      color: #999ca9
  @media (min-width: 960px)
    display: flex
    padding: 0
#menu-mobile
  background: $blanco
  width: 80% !important
  a
    color: $texto
</style>
