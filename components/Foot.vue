<template>
  <div id="foot">
    <section class="arriba py-10">
      <v-container>
        <v-row class="pa-3">
          <v-col cols="12" sm="4" class="d-flex flex-column">
            <h3 class="pb-3 white--text">CONTÁCTANOS</h3>
            <span>
              Ofrecemos servicio de venta, arriendo, administración y
              asesoramiento inmobiliario, dentro de la zona y el país.
            </span>
            <Contacto posicion="flex-column" class="contacto"></Contacto>
          </v-col>
          <v-col cols="12" sm="4">
            <Ultimas :ultimas="listadoUltimas"></Ultimas>
          </v-col>
          <v-col cols="12" sm="4" class="d-flex flex-column">
            <h3>Link Rápidos</h3>
            <Menu :posicion="posi" :foot="posi"></Menu>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section class="medio py-10" dark>
      <v-container>
        <v-row>
          <v-col cols="12" sm="4" class="d-flex align-center justify-center">
            <n-link to="/">
              <v-img
                height="150"
                src="/logos/logo-completo-footer.png"
                alt="Logo MarSol Propiedades"
                contain
                :position="$vuetify.breakpoint.mobile ? 'center' : 'left'"
                class="ml-3"
              ></v-img>
            </n-link>
          </v-col>
          <v-col cols="12" sm="8" class="d-flex flex-column justify-center">
            <Redes></Redes>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <v-footer class="d-flex justify-center white--text" color="#302e35">
      <span>MarSol Propiedades &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "~/components/Menu";
import Contacto from "~/components/Contacto";
import Ultimas from "~/components/Ultimas";
import Redes from "~/components/Redes";

export default {
  components: { Menu, Contacto, Ultimas, Redes },
  data: () => ({
    posi: true,
  }),
  computed: {
    ...mapGetters(["listadoUltimas"]),
  },
};
</script>

<style lang="sass">
#foot
  background: #302e35
  color: #999ca9
  .arriba
    background: #3e3b45
  .medio
    background: #37353d
  .contacto a
    color: white
</style>