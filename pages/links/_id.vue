<template>
  <div id="tagsPage">
    <portada-otras titulo="Tags Propiedades"></portada-otras>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8">
          <v-row v-if="0 < filtroPropiedades.length">
            <v-col
              cols="12"
              v-for="(pro, index) in filtroPropiedades"
              :key="index"
              nuxt
              :to="`/propiedades/${pro.slug}`"
              sm="6"
            >
              <propiedades-card-alterno
                :imagen="imagenPro(pro)"
                :titulo="pro.title.rendered"
                :direccion="pro.direccion"
                :categoria="pro.categoria"
                :operacion="pro.operacion"
                :area="pro.area_total"
                :habitaciones="pro.habitaciones"
                :banos="pro.banos"
                :automv="movil(pro)"
                :precio="pro.precio"
                :preciouf="pro.precio_uf"
                :slug="pro.slug"
                :ciudad="pro.ciudad"
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
    Foot,
  },
  data: () => ({
    tgs: false,
  }),
  head() {
    return {
      title: "Link a Propiedades | MarSol Propiedades",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica.",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Link a Propiedades | MarSol Propiedades",
        },
        {
          property: "og:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica.",
        },
        {
          property: "og:url",
          content: "https://www.marsolpropiedades.cl/links",
        },
      ],
      link: [
        { rel: "canonical", href: "https://www.marsolpropiedades.cl/links" },
      ],
    };
  },
  computed: {
    ...mapGetters(["listadoPropiedades"]),
    filtroPropiedades() {
      let id = this.$route.params.id;
      let pro = this.listadoPropiedades.filter((pdds) => {
        let ope = pdds.operacion.toLowerCase();
        let cate = pdds.categoria.toLowerCase();
        let city = pdds.ciudad
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
    },
  },
  methods: {
    movil(pro) {
      let movil = "";
      if (pro.incluye.includes("Estacionamiento")) movil = "1";
      return movil;
    },
    imagenPro(pro) {
      let imgpro = "";
      pro.yoast_meta.forEach((yoa) => {
        if ("og:image" === yoa.property) {
          imgpro = yoa.content;
        }
      });
      return imgpro;
    },
  },
};
</script>

<style lang="sass">
#tagsPage
  background: #e3e3e3
</style>