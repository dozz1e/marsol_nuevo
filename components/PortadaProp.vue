<template>
  <div id="portada-pro">
    <v-container>
      <div class="portada-image__contenido">
        <div class="contenido d-flex align-end text-center">
          <div class="d-flex flex-column align-center portada-image__text mb-5">
            <v-row>
              <v-col cols="12" class="d-flex align-center py-0">
                <h1 v-text="nombre" class="text-left text-h2"></h1>
              </v-col>
              <v-col cols="12" class="d-flex flex-column pt-0">
                <span class="text-left"><n-link :to="`/links/${categoria.toLowerCase()}`" v-text="
                categoria" class="red--text"></n-link>
                  /
                  <n-link :to="`/links/${opera.toLowerCase()}`" v-text="opera" class="red--text"></n-link></span>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["imagen", "direccion", "operacion", "categoria", "nombre", "opera"],
};
</script>

<style lang="sass">
.v-slide-group__prev--disabled
  display: none !important
#portada-pro
  background: #efefef
  @media (min-width: 960px)
    height: 250px
  .contenido
    height: 100%
  .portada-image
    height: 400px
    width: 100%
    @media (min-width: 960px)
      height: 250px
    &__contenido
      height: 400px
      @media (min-width: 960px)
        height: 250px
      h1
        line-height: 1.1
    .logo
      height: 75px
      margin-top: 10px
      width: 150pxs
</style>