<template>
  <div id="error">
    <section class="cabecera">
      <v-container class="d-flex justify-center align-end">
        <div>
          <v-img src="/images/error.svg" alt="Error 404" width="600"></v-img>
          <a href="https://marsolpropiedades.cl">INICIO</a>
        </div>
      </v-container>
    </section>
    <section>
      <ultimas-inicio></ultimas-inicio>
      <foot></foot>
    </section>
  </div>
</template>

<script>
import UltimasInicio from "~/components/UltimasInicio";
import Foot from "~/components/Foot";
export default {
  components: {
    UltimasInicio,
    Foot,
  },
};
</script>

<style lang="sass">
#error
  .cabecera
    background: linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.05))
    .container
      height: 300px
</style>