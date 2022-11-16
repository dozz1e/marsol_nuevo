<template>
  <div id="servicios">
    <v-img
      sizes="(max-width: 1904px) 100vw, 1904px"
      :src="`/images/varios/inicio.webp`"
      :srcset="
        `/images/varios/inicio@1x.webp 960w, /images/varios/inicio@2x.webp 1264w, /images/varios/inicio@3x.webp 1904w`
      "
      alt="Fondo de Viña del Mar"
      gradient="to top right, rgba(59,58,64,.2), rgba(59,58,64,.2)"
      :height="alto"
    >
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            lg="3"
            v-for="(nos, index) in datosNosotros"
            :key="index"
            class="py-0"
          >
            <v-card flat class="d-flex justify-center flex-column align-center">
              <span
                class="cuadrado d-flex align-center justify-center mt-7 mb-2"
                ><v-icon>{{ nos.icono }}</v-icon></span
              >
              <v-card-title
                v-text="nos.titulo"
                class="justify-center"
              ></v-card-title>
              <v-card-text
                v-text="nos.texto"
                class="text-center mt-4 mb-1"
              ></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    datosNosotros: [
      {
        icono: "mdi-home-outline",
        titulo: "LISTA DE PROPIEDADES",
        texto:
          "Ofrecemos una variada gama de propiedades de gran calidad a buen precio."
      },
      {
        icono: "mdi-star-outline",
        titulo: "BUENOS PRECIOS",
        texto:
          "Estimaciones de precios e historiales de venta de inmuebles, actualización de información."
      },
      {
        icono: "mdi-certificate-outline",
        titulo: "SERVICIO GARANTIZADO",
        texto:
          "Nuestros agentes lo mantendrán informado y podrá actuar con certeza."
      },
      {
        icono: "mdi-chart-line",
        titulo: "INVESTIGACIÓN DE MERCADO",
        texto:
          "Nuestros investigadores realizan una gran búsqueda de nuevas propiedades."
      }
    ]
  }),
  computed: {
    alto() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 1020;
        case "sm":
          return 520;
        case "lg":
          return 520;
      }
    }
  }
};
</script>

<style lang="sass">
#servicios
  .v-image
    .v-responsive__content
      align-items: center
      display: flex
      margin-top: 20px
  .v-card
    background: rgba(255,255,255,.6)
    &__title
      align-items: center
      background: #2db1af
      color: #fff
      display: flex
      font-size: 16px
      font-weight: bold
      line-height: 1.1
      margin-top: 20px
      padding: 10px
      text-align: center
      width: 100%
      word-break: normal
    &__text
      color: #121212
    .cuadrado
      border: 1px solid #121212
      border-radius: 0
      height: 70px
      transform: rotate(45deg)
      width: 70px
      i
        color: #121212
        font-size: 42px
        transform: rotate(-45deg)
      &:hover
        background: #2db1af
        i
          color: white
    @media (min-width: 768px)
      margin-bottom: 10px
</style>
