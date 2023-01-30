<template>
  <div id="tagsPage">
    <portada-otras titulo="Tags Propiedades" fondo="vina"></portada-otras>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8">
          <v-row v-if="0 < filtroPropiedades.length">
            <v-col cols="12" v-for="(pro, index) in filtroPropiedades" :key="index" nuxt
              :to="`/propiedades/${pro.slug}`" sm="6">
              <propiedades-card-alterno :imagen="pro.featuredImage.node.link" :titulo="pro.title"
                :direccion="pro.direccion.direccion" :categoria="pro.categoriaGraphql.categoria"
                :operacion="pro.operacion.operacion" :area="pro.datos.areaTotal" :habitaciones="pro.datos.habitaciones"
                :banos="pro.datos.banos" :automv="movil(pro)" :precio="pro.precio.precio"
                :preciouf="pro.precio.precioUf" :slug="pro.slug"
                :ciudad="pro.direccion.ciudad"></propiedades-card-alterno>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-card width="100%" height="150" class="d-flex align-center justify-center text-center mt-3">
              <v-card-title>
                No hay resultados para su búsqueda. Seleccione otro criterio.
              </v-card-title>
            </v-card>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4">
          <buscador-lateral :tgs="tgs"></buscador-lateral>
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
  components: {
    PortadaOtras,
    PropiedadesCardAlterno,
    BuscadorLateral,
    Foot
  },
  data: () => ({
    tgs: false
  }),
  head() {
    return {
      title: "Link a Propiedades | MarSol Propiedades",
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
          content: "Link a Propiedades | MarSol Propiedades"
        },
        {
          property: "og:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "og:image",
          itemprop: "image",
          content: "https://www.marsolpropiedades.cl/logos/logo-completo.png"
        },
        {
          property: "og:url",
          content: "https://www.marsolpropiedades.cl/links"
        }
      ],
      link: [
        { rel: "canonical", href: "https://www.marsolpropiedades.cl/links" }
      ]
    };
  },
  computed: {
    ...mapGetters(["listadoPropiedades"]),
    filtroPropiedades() {
      let id = this.$route.params.id;

      let pro = this.listadoPropiedades.filter(pdds => {
        let ope = pdds.operacion.operacion.toLowerCase();
        let cate = pdds.categoriaGraphql.categoria.toLowerCase();
        let city = pdds.direccion.ciudad
          .toLowerCase()
          .replace(/\s+/g, "-")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        switch (id) {
          case ope:
            return true;
            break;
          case city:
            return true;
            break;
          case cate:
            return true;
            break;
        }
      });
      return pro;
      // return false
    }
  },
  methods: {
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
#tagsPage
  background: #e3e3e3
</style>
