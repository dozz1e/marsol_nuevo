<template>
  <v-card flat class="datos">
    <v-card-text>
      <n-link :to="`/links/${propiedad.categoria.toLowerCase()}`" v-text="propiedad.categoria.toUpperCase()" class="link-red"></n-link> EN <n-link :to="`/links/${propiedad.operacion.toLowerCase()}`" v-text="propiedad.operacion.toUpperCase()"
        class="link-red"></n-link>
      <div class="pt-1 pb-3">
        <h2 class="text-h4 black--text">{{ propiedad.titulo }}</h2>
        <span class="text-h6">
          {{ propiedad.direccion }}
        </span>
      </div>
      <v-row class="otros">
        <v-col cols="12" sm="8">
          <ul>
            <li v-if="propiedad.datos.areaTotal" class="d-flex align-center">
              <v-icon class="mr-2">mdi-floor-plan</v-icon>{{ propiedad.datos.areaTotal }} mt2 totales
            </li>
            <li v-if="propiedad.datos.habitaciones" class="d-flex align-center">
              <v-icon class="mr-2">mdi-bed-queen-outline</v-icon>{{ propiedad.datos.habitaciones }}
              <span v-if="propiedad.datos.habitaciones > 1" class="ml-1">habitaciones</span><span v-else
                class="ml-1">habitación</span>
            </li>
            <li v-if="propiedad.datos.banos" class="d-flex align-center">
              <v-icon class="mr-2">mdi-shower</v-icon>{{ propiedad.datos.banos }}
              <span v-if="propiedad.datos.banos > 1" class="ml-1"> baños</span><span v-else class="ml-1">baño</span>
            </li>
            <li v-if="propiedad.estacionamiento" class="d-flex align-center">
              <v-icon class="mr-2">mdi-car</v-icon>Estacionamiento
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="4" class="d-flex align-center datosValor">
          <div class="valor pa-5 text-center text-h6">
            <span v-if="propiedad.valor">$</span>
            {{ propiedad.valor || propiedad.uf }}
            <span v-if="!propiedad.valor"> UF</span>
            <span v-else> CLP</span>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    propiedad: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="sass">
.datos
  a.link-red
    color: #c93126
  h1
    color: #3b3a40
  .datosValor
    .valor
      color: #fdfdfd
      background: #c93126
    @media (min-width: 960px)
      justify-content: flex-end
  .otros, .v-icon
    color: #121212
  .v-slide-group__prev--disabled
    display: none
</style>
