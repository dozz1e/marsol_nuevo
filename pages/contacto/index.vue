<template>
  <div id="contactoPage">
    <portada-otras titulo="Contacto" fondo="contacto"></portada-otras>
    <v-container>
      <v-card class="py-5" flat>
        <v-row class="d-flex align-center">
          <v-col cols="12" sm="6">
            <v-card-text class="display-1">
              Si necesitas comprar, vender o arrendar una propiedad, <strong>comunícate con nosotros</strong>
            </v-card-text>
            <contacto
              posicion="flex-column"
              :oscuro="oscuro"
              class="nosotros"
              colorIcono="#c93126"
            ></contacto>
          </v-col>
          <v-col cols="12" sm="6">
            <formulario></formulario>
          </v-col>
        </v-row>
      </v-card>
      <v-row class="pb-15">
        <v-col cols="12">
          <nosotros></nosotros>
        </v-col>
        <v-col cols="12">
          <div style="height: 400px; width: 100%">
            <client-only>
              <l-map
                :zoom="16"
                :center="[-33.0469342657305, -71.6191141900411]"
              >
                <l-tile-layer
                  url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                ></l-tile-layer>
                <l-marker
                  :lat-lng="[-33.0469342657305, -71.6191141900411]"
                ></l-marker>
              </l-map>
            </client-only>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <foot></foot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PortadaOtras from "~/components/PortadaOtras";
import Contacto from "~/components/Contacto";
import Nosotros from "~/components/Nosotros";
import Formulario from "~/components/Formulario";
import Foot from "~/components/Foot";
export default {
  components: { PortadaOtras, Contacto, Nosotros,Formulario, Foot },
  data: () => ({
    oscuro: false,
    ocultar: false
  }),
  head() {
    return {
      title: "Contacto MarSol | MarSol Propiedades",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "og:title",
          content: "Contacto MarSol | MarSol Propiedades"
        },
        {
          property: "og:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "og:url",
          content: "https://www.marsolpropiedades.cl/contacto"
        },
        {
          property: "og:image",
          itemprop: "image",
          content: "https://www.marsolpropiedades.cl/logos/logo-completo.png"
        },
        {
          property: "twitter:title",
          content: "Contacto MarSol | MarSol Propiedades"
        },
        {
          property: "twitter:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "twitter:image",
          content: "https://www.marsolpropiedades.cl/logos/logo-completo.png"
        }
      ],
      link: [
        { rel: "canonical", href: "https://www.marsolpropiedades.cl/contacto" }
      ]
    };
  }
};
</script>

<style lang="sass">
#contactoPage
  .nosotros a
    color: $texto !important
  .v-card
    &__title
      font-weight: bold
    &__subtitle
      font-size: 20px
</style>
