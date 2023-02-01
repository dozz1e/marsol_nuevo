<template>
  <div id="ultimasVendidas" class="py-15">
    <v-container>
      <header class="d-flex justify-center align-center flex-column mb-10">
        <h2 class="display-1 text-center pb-2 mb-10">Propiedades Vendidas</h2>
        <span class="text-center">
          Estás son las últimas propiedades vendidas por MarSol Group Propiedades.
        </span>
      </header>
      <v-row v-if="0 < listadoVendidas.length">
        <v-col cols="12" sm="6" lg="4" v-for="(ulti, index) in listadoVendidas" :key="index">
          <propiedades-card-alterno slug="" :imagen="ulti.featuredImage.node.sourceUrl" :titulo="ulti.title"
            :precio="ulti.precio.precio" :preciouf="ulti.precio.precioUf" :categoria="ulti.categoriaGraphql.categoria"
            :operacion="ulti.operacion.operacion" :direccion="ulti.direccion.direccion" :area="ulti.datos.areaTotal"
            :ciudad="ulti.direccion.ciudad" :habitaciones="ulti.datos.habitaciones" :banos="ulti.datos.banos"
            :automv="movil(ulti)"></propiedades-card-alterno>
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
    PropiedadesCardAlterno
  },
  computed: {
    ...mapGetters(["listadoVendidas"])
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
#ultimasVendidas
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
