<template>
  <div id="cercanas" class="pa-3">
    <v-container>
      <h3>Propiedades Cercanas({{ cerca.length }})</h3>
      <v-list color="transparent" v-if="false">
        <v-list-item
          v-for="(cerc, index) in cerca"
          :key="index"
          nuxt
          :to="`/propiedades/${cerc.slug}`"
        >
          <v-list-item-avatar horizontal tile>
            <v-img
              :src="cerc.featuredImage.node.link"
              :alt="cerc.title"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="cerc.title"></v-list-item-title>
            <v-list-item-subtitle>
              {{ cerc.operacion }}
              <span class="text-red">{{
                "" != cerc.precio
                  ? `${cerc.precio} CLP`
                  : `${cerc.precio_uf} UF`
              }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div v-else>
        <v-list color="transparent">
          <v-list-item>
            <h3>No hay propiedades cercanas</h3>
          </v-list-item>
        </v-list>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    ciudad: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="sass">
#cercanas
  background: #f0f1f5
  .v-card
    .v-card__subtitle
      text-transform: uppercase
  .text-red
    color: $rojo
</style>
