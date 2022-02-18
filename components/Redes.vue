<template>
  <div id="redes">
    <v-row>
      <v-col cols="12" sm="6">
        <v-card flat color="transparent" dark>
          <v-card-title class="display-1"
            >Síguenos en nuestras Redes Sociales</v-card-title
          >
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        class="d-flex align-center"
        :class="$vuetify.breakpoint.mobile ? 'justify-center' : ''"
      >
        <a
          n-link
          href="https://www.facebook.com/propiedadesmarsol/"
          target="_blank"
          class="mr-5"
        >
          <v-img
            src="/logos/social/facebook.png"
            alt="Facebook"
            height="70"
            width="70"
            contain
          ></v-img>
        </a>
        <a
          n-link
          href="https://www.instagram.com/marsolpropiedades/"
          target="_blank"
        >
          <v-img
            src="/logos/social/instagram.png"
            alt="Instagram"
            height="70"
            width="70"
            contain
          ></v-img>
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass">
#redes
  .row
    text-align: center
  @media (min-width: 768px)
    .row
      text-align: left
</style>