<template>
  <div id="sliderPro" :class="$vuetify.breakpoint.lgAndUp ? 'mt-15' : 'mb-5'">
    <v-container>
      <header class="d-flex justify-center align-center flex-column mb-10">
        <h2 class="display-1 text-center pb-2">Propiedades Destacadas</h2>
      </header>

      <v-carousel
        hide-delimiters
        :show-arrows="false"
        v-if="0 < listadoImportantes.length"
        cycle
      >
        <v-carousel-item>
          <v-row>
            <v-col cols="12" sm="4">
              <propiedades-card-alterno
                :slug="listadoImportantes[0].slug"
                :imagen="`https://marsolpropiedades.cl/images/propiedades/${listadoImportantes[0].slug}/1.webp`"
                :titulo="listadoImportantes[0].title"
                :precio="listadoImportantes[0].precio.precio"
                :preciouf="listadoImportantes[0].precio.precioUf"
                :categoria="listadoImportantes[0].categoriaGraphql.categoria[0]"
                :operacion="listadoImportantes[0].operacion.operacion"
                :direccion="listadoImportantes[0].direccion.direccion"
                :area="listadoImportantes[0].datos.areaTotal"
                :ciudad="listadoImportantes[0].direccion.ciudad"
                :habitaciones="listadoImportantes[0].datos.habitaciones"
                :banos="listadoImportantes[0].datos.banos"
                :automv="movil(listadoImportantes[0])"
              ></propiedades-card-alterno>
            </v-col>
            <v-col cols="12" sm="4" v-if="listadoImportantes[1]">
              <propiedades-card-alterno
                :slug="listadoImportantes[1].slug"
                :imagen="`https://marsolpropiedades.cl/images/propiedades/${listadoImportantes[1].slug}/1.webp`"
                :titulo="listadoImportantes[1].title"
                :precio="listadoImportantes[1].precio.precio"
                :preciouf="listadoImportantes[1].precio.precioUf"
                :categoria="listadoImportantes[1].categoriaGraphql.categoria[0]"
                :operacion="listadoImportantes[1].operacion.operacion"
                :direccion="listadoImportantes[1].direccion.direccion"
                :area="listadoImportantes[1].datos.areaTotal"
                :ciudad="listadoImportantes[1].direccion.ciudad"
                :habitaciones="listadoImportantes[1].datos.habitaciones"
                :banos="listadoImportantes[1].datos.banos"
                :automv="movil(listadoImportantes[1])"
              ></propiedades-card-alterno>
            </v-col>
            <v-col cols="12" sm="4" v-if="listadoImportantes[2]">
              <propiedades-card-alterno
                :slug="listadoImportantes[2].slug"
                :imagen="`https://marsolpropiedades.cl/images/propiedades/${listadoImportantes[2].slug}/1.webp`"
                :titulo="listadoImportantes[2].title"
                :precio="listadoImportantes[2].precio.precio"
                :preciouf="listadoImportantes[2].precio.precioUf"
                :categoria="listadoImportantes[2].categoriaGraphql.categoria[0]"
                :operacion="listadoImportantes[2].operacion.operacion"
                :direccion="listadoImportantes[2].direccion.direccion"
                :area="listadoImportantes[2].datos.areaTotal"
                :ciudad="listadoImportantes[2].direccion.ciudad"
                :habitaciones="listadoImportantes[2].datos.habitaciones"
                :banos="listadoImportantes[2].datos.banos"
                :automv="movil(listadoImportantes[2])"
              ></propiedades-card-alterno>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <div v-else>
        <v-row class="loaderCarrusel">
          <v-col
            cols="12"
            lg="4"
            class="loaderCarrusel__item"
            v-for="(aux, index) in 3"
            :key="index"
          >
            <v-skeleton-loader type="card"></v-skeleton-loader>
          </v-col>
        </v-row>
      </div>
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
  data: () => ({
    mes: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
  }),
  computed: {
    ...mapGetters(["listadoImportantes"]),
  },
  methods: {
    fecha(valor) {
      let aux = "";
      aux = valor.split("T");
      aux = aux[0].split("-");
      return `${aux[2]} de ${this.mes[Number(aux[1])]} ${aux[0]}`;
    },
    movil(pro) {
      let movil = "";
      if (
        pro.incluye.incluye &&
        pro.incluye.incluye.includes("Estacionamiento")
      )
        movil = "1";
      return movil;
    },
  },
};
</script>

<style lang="sass">
#sliderPro
  header
    text-transform: uppercase
    font-size: 14px
    a,span
      color: $rojo
    h2
      border-bottom: 2px solid $rojo
      text-transform: capitalize
    span
      @media (min-width: 960px)
        width: 900px
  .proPagina
    &__list
      @media(min-width: 600px)
        column-count: 3
  .v-carousel
    height: auto !important
    &__item
      height: auto !important
    @media (min-width: 960px)
      height: 430px !important
      &__item
        height: 430px !important
  .v-card
    .valor
      background: $rojo
      border-radius: initial !important
      font-size: 14px
      height: 45px
    .v-card__title
      word-break: break-word
    .titulo
      font-size: 3rem
      font-weight: bold
      line-height: 3rem
@media (min-width: 960px)
  #sliderPro
    .v-card
      height: 375px
</style>
