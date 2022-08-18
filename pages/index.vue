<template>
  <div id="inicio">
    <portada></portada>
    <v-container>
      <buscador></buscador>
    </v-container>
    <slider-pro></slider-pro>
    <ultimas-inicio></ultimas-inicio>
    <servicios></servicios>
    <nosotros></nosotros>
    <foot></foot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Portada from "~/components/Portada";
import Buscador from "~/components/Buscador";
import UltimasInicio from "~/components/UltimasInicio";
import Servicios from "~/components/Servicios";
import Nosotros from "~/components/Nosotros";
import Foot from "~/components/Foot";
import SliderPro from "~/components/SliderPro";

export default {
  components: {
    Portada,
    Buscador,
    UltimasInicio,
    Servicios,
    Nosotros,
    Foot,
    SliderPro
  },
  head() {
    return {
      title: "MarSol Propiedades | Compra Venta Arriendo Inmobiliario",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "og:title",
          content: "MarSol Propiedades | Compra Venta Arriendo Inmobiliario"
        },
        {
          property: "og:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        { property: "og:url", content: "https://www.marsolpropiedades.cl/" },
        {
          property: "og:image",
          itemprop: "image",
          content: "https://www.marsolpropiedades.cl/logos/logo-completo.png"
        },
        {
          property: "twitter:title",
          content: "MarSol Propiedades | Compra Venta Arriendo Inmobiliario"
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
      ]
    };
  },
  computed: {
    ...mapGetters(["listadoPropiedades"])
  }
};
</script>

<style lang="sass">
#inicio
  background: #efefef
</style>
