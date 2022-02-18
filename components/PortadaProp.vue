<template>
  <div id="portada-pro">
    <v-img
      :src="imagen"
      :alt="nombre"
      class="mt-0 portada-image"
      gradient="to top right, rgba(59,58,64,.33), rgba(59,58,64,.33)"
    >
      <v-img src="/images/fondos/header.svg" alt="Fondo Header">
        <v-container>
          <div class="portada-image__contenido">
            <div class="contenido d-flex align-end text-center">
              <div
                class="d-flex flex-column align-center portada-image__text mb-15"
              >
                <v-row>
                  <v-col cols="12" class="d-flex align-center py-0">
                    <h1 v-text="nombre" class="white--text text-left"></h1>
                  </v-col>
                  <v-col cols="12" class="d-flex flex-column">
                    <span class="white--text text-left"
                      ><n-link
                        :to="`/links/${categoria}`"
                        v-text="
                          categoria.charAt(0).toUpperCase() + categoria.slice(1)
                        "
                        class="white--text"
                      ></n-link>
                      /
                      <n-link
                        :to="`/links/${opera}`"
                        v-text="opera.charAt(0).toUpperCase() + opera.slice(1)"
                        class="white--text"
                      ></n-link
                    ></span>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-container>
      </v-img>
    </v-img>
  </div>
</template>

<script>
export default {
  props: ["imagen", "direccion", "operacion", "categoria", "nombre", "opera"],
};
</script>

<style lang="sass">
#portada-pro
  height: 400px
  text-shadow: 1px 1px 1px black
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