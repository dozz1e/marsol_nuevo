<template>
  <div class="alterno">
    <v-card tile nuxt :to="slug ? `/propiedades/${slug}` : ''" hover light>
      <v-img :src="imagen" :alt="titulo" height="180" v-if="imagen">
        <v-chip large label class="valor white--text">
          <precio :valor="precio" v-if="precio && slug"></precio>
          <precio-uf :valor="preciouf" v-if="preciouf && !precio && slug"></precio-uf>
          <span v-if="!slug">VENDIDA</span>
        </v-chip>
      </v-img>
      <v-card-subtitle class="py-1">
        {{ categoria }} EN {{ operacion }}
      </v-card-subtitle>
      <v-card-title class="d-flex">
        <v-row no-gutters>
          <v-col cols="2">
            <v-icon color="#878fd6">mdi-map-marker</v-icon>
          </v-col>
          <v-col cols="10">
            <div class="d-flex flex-column">
              <strong v-text="titulo" class="card__title"></strong>
              <span class="pt-2"></span>
              <div v-if="direccion && !ciudad" v-text="direccion" class="card__sub"></div>
              <div v-if="direccion && ciudad" v-text="`${direccion} , ${ciudad}`" class="card__sub"></div>
              <div v-if="!direccion && ciudad" v-text="ciudad" class="card__sub"></div>
            </div>
          </v-col>
        </v-row>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <v-row no-gutters>
          <v-col cols="5" class="pa-0">
            <v-list-item class="d-flex align-center" v-if="area">
              <v-icon class="pr-1">mdi-floor-plan</v-icon>{{ area }}&nbsp;mt2
            </v-list-item>
          </v-col>
          <v-col cols="7">
            <v-row no-gutters class="d-flex align-center justify-end">
              <v-col cols="4" v-if="habitaciones" class="pa-0">
                <v-list-item class="d-flex align-center">
                  <v-icon class="pr-2">mdi-bed-queen-outline</v-icon>{{ habitaciones }}
                </v-list-item>
              </v-col>
              <v-col cols="4" v-if="banos" class="pa-0">
                <v-list-item class="d-flex align-center">
                  <v-icon class="pr-2">mdi-shower</v-icon>{{ banos }}
                </v-list-item>
              </v-col>
              <v-col cols="4" v-if="automv" class="pa-0">
                <v-list-item class="d-flex align-center">
                  <v-icon class="pr-2">mdi-car</v-icon>
                </v-list-item>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="pa-0" v-if="'' == precio && '' == preciouf">
            <v-chip label>
              PROYECTO
            </v-chip>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Precio from "~/components/Precio";
import PrecioUf from "~/components/PrecioUf";
export default {
  components: {
    Precio,
    PrecioUf
  },
  props: [
    "slug",
    "imagen",
    "titulo",
    "precio",
    "preciouf",
    "categoria",
    "operacion",
    "direccion",
    "ciudad",
    "area",
    "habitaciones",
    "banos",
    "automv"
  ]
};
</script>

<style lang="sass">
.alterno
  .v-card
    &__title
      height: 100px
      .card__title
        line-height: 1
      .card__sub
        font-size: 16px
        line-height: 1
      .d-flex
        font-size: 18px
        line-height: 1.2
      .v-icon
        font-size: 40px
      span
        font-size: 14px
    &__subtitle
      background: #efefef
      color: $rojo
      font-size: 12px
      text-transform: uppercase
    .valor
      background: rgba($rojo,.9)
      border-radius: 0 !important
      font-size: 16px
      font-weight: bold
      height: 45px
    .v-image
      .v-responsive__content
        align-items: flex-end
        display: flex
        justify-content: flex-end
  @media (max-width: 768px)
    height: 380px
</style>
