<template>
  <div id="ultimasInico" class="py-15">
    <v-container>
      <header class="d-flex justify-center align-center flex-column mb-10">
        <h2 class="display-1 text-center pb-2 mb-10">Nuevas Propiedades</h2>
        <span class="text-center">
          Un terreno es una gran opción para empezar una nueva vida. Un
          apartamento de un dormitorio tiene un salón o comedor separado desde
          el dormitorio. Dos dormitorios, tres dormitorios, y más grandes.
        </span>
      </header>
      <v-row v-if="0 < listadoUltimas.length">
        <v-col
          cols="12"
          sm="6"
          lg="4"
          v-for="(ulti, index) in listadoUltimas"
          :key="index"
        >
          <propiedades-card-alterno
            :slug="ulti.slug"
            :imagen="imagenPro(ulti)"
            :titulo="ulti.title.rendered"
            :precio="ulti.precio"
            :preciouf="ulti.precio_uf"
            :categoria="ulti.categoria"
            :operacion="ulti.operacion"
            :direccion="ulti.direccion"
            :area="ulti.area_total"
            :ciudad="ulti.ciudad"
            :habitaciones="ulti.habitaciones"
            :banos="ulti.banos"
            :automv="movil(ulti)"
          ></propiedades-card-alterno>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="4" v-for="n in 3" :key="n">
          <v-skeleton-loader type="card, actions" tile></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PropiedadesCardAlterno from "~/components/PropiedadesCardAlterno";

export default {
  components: {
    PropiedadesCardAlterno,
  },
  computed: {
    ...mapGetters(["listadoUltimas"]),
  },
  methods: {
    imagenPro(pro) {
      let imgpro = "";
      pro.yoast_meta.forEach((propiedad) => {
        if ("og:image" === propiedad.property) {
          imgpro = propiedad.content;
        }
      });
      return imgpro;
    },
    movil(pro) {
      let movil = "";
      if (pro.incluye.includes("Estacionamiento")) movil = "1";
      return movil;
    },
  },
};
</script>

<style lang="sass">
#ultimasInico
  background: rgba(0,0,0,.05)
  header
    h2
      border-bottom: 2px solid $rojo
      width: 350px
    span
      @media (min-width: 960px)
        width: 900px
  .v-skeleton-loader
    &__image
      height: 180px
</style>