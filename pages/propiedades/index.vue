<template>
  <div id="propiedades">
    <portada-otras titulo="Propiedades" fondo="propiedades"></portada-otras>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8">
          <v-row v-if="resulLateral">
            <v-col
              cols="12"
              v-for="(pro, index) in listadoPropiedades"
              :key="index"
              nuxt
              :to="`/propiedades/${pro.slug}`"
              sm="6"
            >
              <propiedades-card-alterno
                :imagen="pro.featuredImage.node.sourceUrl"
                :titulo="pro.title"
                :direccion="pro.direccion.direccion"
                :categoria="pro.categoriaGraphql.categoria"
                :operacion="pro.operacion.operacion"
                :area="pro.datos.areaTotal"
                :habitaciones="pro.datos.habitaciones"
                :banos="pro.datos.banos"
                :automv="movil(pro)"
                :precio="pro.precio.precio"
                :preciouf="pro.precio.precioUf"
                :slug="pro.slug"
                :ciudad="pro.direccion.ciudad"
              ></propiedades-card-alterno>
            </v-col>
          </v-row>
          <v-row v-else-if="0 < listaP.length">
            <v-col cols="12">
              <h2>Listado de Propiedades({{ listaP.length }})</h2>
            </v-col>
            <v-col
              cols="12"
              v-for="(pro, index) in listaP"
              :key="index"
              nuxt
              :to="`/propiedades/${pro.slug}`"
              sm="6"
            >
              <propiedades-card-alterno
                :imagen="pro.featuredImage.node.sourceUrl"
                :titulo="pro.title"
                :direccion="pro.direccion.direccion"
                :categoria="pro.categoriaGraphql.categoria"
                :operacion="pro.operacion.operacion"
                :area="pro.datos.areaTotal"
                :habitaciones="pro.datos.habitaciones"
                :banos="pro.datos.banos"
                :automv="movil(pro)"
                :precio="pro.precio.precio"
                :preciouf="pro.precio.precioUf"
                :slug="pro.slug"
                :ciudad="pro.direccion.ciudad"
              ></propiedades-card-alterno>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-card
              width="100%"
              height="150"
              class="d-flex align-center justify-center text-center mt-3"
            >
              <v-card-title>
                No hay resultados para su búsqueda. Seleccione otro criterio.
              </v-card-title>
            </v-card>
          </v-row>
          <v-row
            v-if="
              (resulLateral && 0 === listadoPropiedades.length) ||
                (!resulLateral && 0 === listaP.length)
            "
          >
            <v-col cols="12" sm="6" v-for="n in 4" :key="n">
              <v-skeleton-loader type="card, actions" tile></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4">
          <buscador-lateral
            @ppdds="ppdds"
            @borrado="borrado"
          ></buscador-lateral>
        </v-col>
      </v-row>
    </v-container>
    <foot></foot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PortadaOtras from "~/components/PortadaOtras";
import PropiedadesCardAlterno from "~/components/PropiedadesCardAlterno";
import BuscadorLateral from "~/components/BuscadorLateral";
import Foot from "~/components/Foot";
export default {
  components: { PortadaOtras, PropiedadesCardAlterno, BuscadorLateral, Foot },
  computed: {
    ...mapGetters(["listadoPropiedades"])
  },
  data: () => ({
    listaP: [],
    resulLateral: true
  }),
  head() {
    return {
      title: "Listado de Propiedades | MarSol Propiedades",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "og:title",
          content: "Listado de Propiedades | MarSol Propiedades"
        },
        {
          property: "og:image",
          itemprop: "image",
          content: "https://www.marsolpropiedades.cl/logos/logo-completo.png"
        },
        {
          property: "og:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "og:url",
          content: "https://www.marsolpropiedades.cl/propiedades"
        }
      ]
    };
  },
  methods: {
    ppdds(value) {
      this.listaP = value;
      this.resulLateral = false;
    },
    borrado() {
      this.resulLateral = true;
    },
    movil(pro) {
      let movil = "";
      if (
        pro.incluye.incluye &&
        pro.incluye.incluye.includes("Estacionamiento")
      )
        movil = "1";
      return movil;
    }
  }
};
</script>

<style lang="sass">
#propiedades
  background: #e3e3e3
</style>
