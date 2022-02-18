<template>
  <div class="alterno">
    <v-card tile nuxt :to="`/propiedades/${slug}`" hover light>
      <v-img :src="imagen" :alt="titulo" height="180">
        <v-chip large label class="valor white--text">
          <precio :valor="precio" v-if="'' != precio"></precio>
          <precioUf :valor="preciouf" v-else></precioUf>
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
              <strong v-text="titulo"></strong>
              <span class="pt-1"
                ><div
                  v-if="'' != direccion && '' === ciudad"
                  v-text="direccion"
                ></div>
                <div
                  v-if="'' != direccion && '' != ciudad"
                  v-text="`${direccion} , ${ciudad}`"
                ></div>
                <div
                  v-if="'' === direccion && '' != ciudad"
                  v-text="ciudad"
                ></div>
              </span>
            </div>
          </v-col>
        </v-row>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-actions>
        <v-row no-gutters>
          <v-col cols="5" class="pa-0">
            <v-list-item class="d-flex align-center" v-if="'' != area">
              <v-icon class="pr-1">mdi-floor-plan</v-icon>{{ area }}&nbsp;mt2
            </v-list-item>
          </v-col>
          <v-col cols="7">
            <v-row no-gutters class="d-flex align-center justify-end">
              <v-col cols="4" v-if="'' != habitaciones" class="pa-0">
                <v-list-item class="d-flex align-center">
                  <v-icon class="pr-2">mdi-bed-queen-outline</v-icon
                  >{{ habitaciones }}
                </v-list-item>
              </v-col>
              <v-col cols="4" v-if="'' != banos" class="pa-0">
                <v-list-item class="d-flex align-center">
                  <v-icon class="pr-2">mdi-shower</v-icon>{{ banos }}
                </v-list-item>
              </v-col>
              <v-col cols="4" v-if="'' != automv" class="pa-0">
                <v-list-item class="d-flex align-center">
                  <v-icon class="pr-2">mdi-car</v-icon>
                </v-list-item>
              </v-col>
            </v-row>
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
      height: 75px
      .d-flex
        font-size: 18px
        line-height: 1
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
      font-size: 14px
      height: 45px
    .v-image
      .v-responsive__content
        align-items: flex-end
        display: flex
        justify-content: flex-end
  @media (max-width: 768px)
    height: 355px
</style>
