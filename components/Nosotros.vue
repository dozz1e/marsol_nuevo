<template>
  <div id="nosotros" :class="ocultar ? 'py-15' : 'd-flex'">
    <v-img
      src="/images/fondos/nosotros.png"
      srcset="/images/fondos/nosotros.webp"
      alt="Fondo Nosotros"
      class="d-flex align-center"
      contain
    >
      <v-container>
        <v-row>
          <v-col cols="12" sm="4" v-if="ocultar">
            <v-card class="mb-3" height="350" color="rgba(255,255,255,.5)">
              <v-card-title>
                <v-img
                  src="/logos/logo-completo.png"
                  height="100"
                  alt="Logo MarSol"
                  contain
                  position="left"
                ></v-img>
              </v-card-title>
              <v-card-title>NUESTRO EQUIPO</v-card-title>
              <v-card-text>
                Somos un apasionado equipo de corredores inmobiliarios.
                Trabajamos con devoción a nuestros clientes. Cada aspecto del
                negocio tiene como objetivo el éxito. Agradecemos que confíe en
                nosotros para ayudarlo a encontrar las mejores soluciones para
                usted.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            :sm="ocultar ? 4 : 6"
            v-for="(agent, index) in listadoAgentes"
            :key="index"
          >
            <Agente :agente="agent"></Agente>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Agente from "~/components/Agente";
export default {
  components: {
    Agente,
  },
  props: {
    ocultar: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters(["listadoAgentes"]),
  },
};
</script>

<style lang="sass">
#nosotros
  .v-card
    .v-card__title
      background: transparent
  @media (min-width: 960px)
    height: 100%
</style>