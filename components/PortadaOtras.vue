<template>
  <div id="portadaOtras">
    <v-img
      sizes="(max-width: 480px) 240px, (max-width: 960px) 480px, 1440px"
      :src="`/images/varios/${fondo}@1x.${extension}`"
      :srcset="
        `/images/varios/${fondo}@1x.${extension} 480w, /images/varios/${fondo}@2x.${extension} 960w, /images/varios/${fondo}@3x.${extension} 1440w`
      "
      alt="`Fondo ${titulo}`"
      height="300px"
      width="100%"
      gradient="to top right, rgba(25,32,72,.4), rgba(25,32,72,.4)"
    >
      <v-container>
        <v-card class="d-flex align-end" height="282" flat color="transparent">
          <h1
            v-text="titulo"
            class="white--text ml-2"
            :class="$vuetify.breakpoint.mobile ? 'display-1' : 'display-2'"
          ></h1>
        </v-card>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["titulo", "fondo"],
  computed: {
    ...mapGetters(["extension"])
  }
};
</script>

<style lang="sass">
#portadaOtras
  height: 300px
  h1
    text-shadow: 1px 1px 1px #121212
  .v-image
    .v-responsive__content
      margin-top: 0 !important
</style>
