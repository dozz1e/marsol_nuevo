<template>
  <div id="contactoPage">
    <portada-otras titulo="Contacto" fondo="contacto"></portada-otras>
    <v-container>
      <v-card class="py-5" flat>
        <v-row class="d-flex align-center">
          <v-col cols="12" sm="6">
            <v-card-title class="display-1"
              >¿Tiene alguna pregunta?</v-card-title
            >
            <v-card-text>
              Te asesoramos sobre nuestros servicios inmobiliarios.<br />Envíanos
              un mensaje y consúltanos sin ningún compromiso. Nos pondremos en
              contacto contigo lo más pronto posible.
            </v-card-text>
            <contacto
              posicion="flex-column"
              :oscuro="oscuro"
              class="nosotros"
              colorIcono="#c93126"
            ></contacto>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              :src="`/images/contacto/lateral.${extension}`"
              alt="Contacto"
            ></v-img>
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
import Foot from "~/components/Foot";
export default {
  components: { PortadaOtras, Contacto, Nosotros, Foot },
  data: () => ({
    oscuro: false,
    ocultar: false
  }),
  computed: {
    ...mapGetters(["extension"])
  },
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
        { property: "og:type", content: "website" },
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
          property: "twitter:title",
          content: "Contacto MarSol | MarSol Propiedades"
        },
        {
          property: "twitter:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
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
