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
        <v-carousel-item v-for="(pro, i) in listadoImportantes" :key="i">
          <v-row>
            <v-col cols="12" sm="4">
              <propiedades-card-alterno
                :slug="pro[0].slug"
                :imagen="imagenPro(pro[0])"
                :titulo="pro[0].title.rendered"
                :precio="pro[0].precio"
                :preciouf="pro[0].precio_uf"
                :categoria="pro[0].categoria"
                :operacion="pro[0].operacion"
                :direccion="pro[0].direccion"
                :area="pro[0].area_total"
                :ciudad="pro[0].ciudad"
                :habitaciones="pro[0].habitaciones"
                :banos="pro[0].banos"
                :automv="movil(pro[0])"
              ></propiedades-card-alterno>
            </v-col>
            <v-col cols="12" sm="4">
              <propiedades-card-alterno
                :slug="pro[1].slug"
                :imagen="imagenPro(pro[1])"
                :titulo="pro[1].title.rendered"
                :precio="pro[1].precio"
                :preciouf="pro[1].precio_uf"
                :categoria="pro[1].categoria"
                :operacion="pro[1].operacion"
                :direccion="pro[1].direccion"
                :area="pro[1].area_total"
                :ciudad="pro[1].ciudad"
                :habitaciones="pro[1].habitaciones"
                :banos="pro[1].banos"
                :automv="movil(pro[1])"
              ></propiedades-card-alterno>
            </v-col>
            <v-col cols="12" sm="4">
              <propiedades-card-alterno
                :slug="pro[2].slug"
                :imagen="imagenPro(pro[2])"
                :titulo="pro[2].title.rendered"
                :precio="pro[2].precio"
                :preciouf="pro[2].precio_uf"
                :categoria="pro[2].categoria"
                :operacion="pro[2].operacion"
                :direccion="pro[2].direccion"
                :area="pro[2].area_total"
                :ciudad="pro[2].ciudad"
                :habitaciones="pro[2].habitaciones"
                :banos="pro[2].banos"
                :automv="movil(pro[2])"
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
// import Precio from "~/components/Precio";
// import PrecioUf from "~/components/PrecioUf";
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
    imagenPro(pro) {
      let imgpro = "";
      pro.yoast_meta.forEach((yoa) => {
        if ("og:image" === yoa.property) {
          imgpro = yoa.content;
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
      height: 350px
      .v-card__subtitle
        font-size: 20px
</style>