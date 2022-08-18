<template>
  <div id="buscador">
    <v-form ref="form" v-model="valido" class="pa-5" v-if="tgs">
      <v-row>
        <v-col cols="12" class="py-0">
          <v-select
            v-model="tipo"
            :items="tipos"
            label="Tipo de Propiedad"
          ></v-select>
        </v-col>
        <v-col cols="12" class="py-0">
          <v-select
            v-model="operacion"
            :items="operaciones"
            label="Operación"
          ></v-select>
        </v-col>
        <v-col cols="12" v-if="listadoCiudades != null" class="py-0">
          <v-select
            v-model="ciudad"
            :items="listadoCiudades"
            label="Ciudad"
          ></v-select>
        </v-col>
        <v-col cols="12" class="buscador-slider">
          <v-card flat color="transparent">
            <v-subheader class="pa-0" dark>
              <v-icon class="pr-1" dark>mdi-floor-plan</v-icon>
              Área Total
              <v-spacer></v-spacer>
              <v-input
                v-if="10000 > metros"
                hide-details
                dark
                class="buscador-slider__text"
                >{{ `${metros} mt2` }}</v-input
              >
              <v-input v-else hide-details dark class="slider-text"
                >Cualquiera</v-input
              >
            </v-subheader>
            <v-card-text class="pa-0">
              <v-slider
                v-model="metros"
                min="0"
                max="10000"
                hide-details
              ></v-slider>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" class="buscador-slider">
          <v-card flat color="transparent">
            <v-subheader class="pa-0" dark>
              <v-icon class="pr-1" dark>mdi-bed-queen-outline</v-icon>
              Piezas
              <v-spacer></v-spacer>
              <v-input
                v-if="10 > piezas"
                hide-details
                dark
                class="buscador-slider__text"
                >{{ piezas }}</v-input
              >
              <v-input v-else hide-details dark class="slider-text"
                >Cualquiera</v-input
              >
            </v-subheader>
            <v-card-text class="pa-0">
              <v-slider
                v-model="piezas"
                min="0"
                max="10"
                hide-details
              ></v-slider>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-switch
            v-model="estacionamiento"
            label="Estacionamiento"
            dark
          ></v-switch>
        </v-col>
        <v-col cols="12" class="d-flex justify-end align-center">
          <v-btn plain large class="mr-4 white--text" @click="reset">
            Resetear
          </v-btn>
          <v-btn
            large
            tile
            depressed
            @click="buscarPropiedad()"
            color="#c93126"
            class="white--text"
            name="btn-buscar"
            id="btn-buscar"
            ><v-icon>mdi-magnify</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-form>
    <v-divider v-if="tgs"></v-divider>
    <v-col cols="12" class="buscador-tags pa-5">
      <tags></tags>
    </v-col>
    <v-divider v-if="!tgs"></v-divider>
    <v-col cols="12" v-if="!tgs" class="buscador-tags pa-5">
      <ultimas></ultimas>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PropiedadesCardAlterno from "~/components/PropiedadesCardAlterno";
import Ultimas from "~/components/Ultimas";
import Tags from "~/components/Tags";

export default {
  components: {
    PropiedadesCardAlterno,
    Ultimas,
    Tags
  },
  props: {
    tgs: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    valido: false,
    tipo: "",
    tipos: ["Casa", "Departamento", "Local", "Parcela", "Terreno"],
    operacion: "",
    operaciones: ["Venta", "Arriendo"],
    ciudad: "",
    prpds: [],
    tituloBus: false,
    estacionamiento: false,
    piezas: 10,
    metros: 10000
  }),
  computed: {
    ...mapGetters(["listadoCiudades", "listadoPropiedades"])
  },
  methods: {
    buscarPropiedad() {
      this.tituloBus = true;
      this.prpds = this.listadoPropiedades.filter(pro => {
        let tp = true,
          op = true,
          ci = true,
          are = true,
          piz = true,
          est = true;
        if ("" != this.tipo)
          if (this.tipo != pro.categoriaGraphql.categoria) tp = false;
        if ("" != this.operacion)
          if (this.operacion != pro.operacion.operacion) op = false;
        if ("" != this.ciudad)
          if (this.ciudad != pro.direccion.ciudad) ci = false;
        if (this.estacionamiento)
          if (
            pro.incluye.incluye &&
            !pro.incluye.incluye.includes("Estacionamiento")
          )
            est = false;
        if (10000 > this.metros) {
          if (this.numero(pro.datos.areaTotal) > this.metros) are = false;
        }
        if ("" != pro.datos.habitaciones)
          if (pro.datos.habitaciones > this.piezas) piz = false;
        if (tp && op && ci && est && are && piz) return pro;
      });
      this.$emit("ppdds", this.prpds);
    },
    numero(valor) {
      let aux = valor.replaceAll(".", "");
      let aux2 = aux.replaceAll(",", ".");
      return Number(aux2);
    },
    reset() {
      this.tipo = "";
      this.operacion = "";
      this.ciudad = "";
      this.prpds = [];
      this.estacionamiento = false;
      this.metros = 10000;
      this.piezas = 10;
      this.tituloBus = false;
      this.$emit("borrado");
    },
    movil(pro) {
      let movil = "";
      if (pro.incluye.includes("Estacionamiento")) movil = "1";
      return movil;
    }
  }
};
</script>

<style lang="sass">
#buscador
  .buscador-tags
    background: #37353d
  .v-form
    background: #37353d
    .buscador-slider
      .v-subheader
        height: 18px
        .v-input__slot
          display: flex
          justify-content: flex-end
      .v-slider
        margin: 0
    .v-select
      .v-input__slot
        background: #4e4a59
        color: white
        padding: 5px
        label, i, .v-select__selection
          color: white !important
</style>
