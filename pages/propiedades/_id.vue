<template>
  <div v-if="soloPropiedad != null" id="proPagina">
    <portada-prop
      :imagen="imagenPro"
      :direccion="direPro"
      :categoria="catePro"
      :operacion="opePro"
      :nombre="nombrePro"
      :opera="opePro"
    ></portada-prop>
    <v-container class="mt-5">
      <v-row>
        <v-col cols="12" md="8">
          <div class="ma-3 proPagina">
            <section class="proPagina-data">
              <v-img :src="imagenPro" :alt="nombrePro">
                <span v-text="opePro" class="white--text pa-2 opera"></span>
              </v-img>
              <header class="py-2">
                EN <n-link :to="`/links/${opePro}`" v-text="opePro"></n-link> /
                INICIADO
                <span v-text="fecha(soloPropiedad.date)"></span>
              </header>
              <v-row no-gutters>
                <v-col
                  cols="12"
                  lg="8"
                  class="d-flex flex-column justify-center"
                >
                  <h2 v-text="dir()"></h2>
                  <div
                    v-text="soloPropiedad.title.rendered"
                    class="black--text subtitle"
                  ></div>
                </v-col>
                <v-col cols="12" lg="4" class="d-flex justify-end">
                  <v-chip large label class="valor white--text my-5">
                    <precio
                      :valor="soloPropiedad.precio"
                      v-if="'' != soloPropiedad.precio"
                    ></precio>
                    <precioUf
                      :valor="soloPropiedad.precio_uf"
                      v-else
                    ></precioUf>
                  </v-chip>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="5">
                  <v-list-item
                    class="d-flex align-center pa-0"
                    v-if="'' != soloPropiedad.area_total"
                  >
                    <v-icon class="pr-1">mdi-floor-plan</v-icon
                    >{{ soloPropiedad.area_total }}&nbsp;mt2
                  </v-list-item>
                </v-col>
                <v-col cols="7">
                  <v-row class="d-flex justify-end">
                    <v-col cols="4" v-if="'' != soloPropiedad.habitaciones">
                      <v-list-item
                        class="d-flex align-center justify-center pa-0"
                      >
                        <v-icon class="pr-2">mdi-bed-queen-outline</v-icon
                        >{{ soloPropiedad.habitaciones }}
                      </v-list-item>
                    </v-col>
                    <v-col cols="4" v-if="'' != soloPropiedad.banos">
                      <v-list-item
                        class="d-flex align-center justify-center pa-0"
                      >
                        <v-icon class="pr-2">mdi-shower</v-icon
                        >{{ soloPropiedad.banos }}
                      </v-list-item>
                    </v-col>
                    <v-col
                      cols="4"
                      v-if="soloPropiedad.incluye.includes('Estacionamiento')"
                    >
                      <v-list-item
                        class="d-flex align-center justify-center pa-0"
                      >
                        <v-icon class="pr-2">mdi-car</v-icon>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <v-row no-gutters v-if="false">
                <v-col cols="12" class="d-flex align-center">
                  <h3>Compartir</h3>
                  <ShareNetwork
                    network="facebook"
                    :url="
                      `https://marsolpropiedades.cl/propiedades/${this.$route.params.id}`
                    "
                    :title="titlePro"
                    :description="descripcionPro"
                    quote="MarSol Propiedades Compra Venta Arriendo Inmobiliario"
                  >
                    <v-img
                      src="/logos/social/facebook.png"
                      alt="Facebook"
                      height="45"
                      width="45"
                      class="ml-3"
                    ></v-img>
                  </ShareNetwork>
                  <ShareNetwork
                    network="whatsapp"
                    :url="
                      `https://marsolpropiedades.cl/propiedades/${this.$route.params.id}`
                    "
                    :title="titlePro"
                    :description="descripcionPro"
                    quote="MarSol Propiedades Compra Venta Arriendo Inmobiliario"
                  >
                    <v-img
                      src="/logos/social/whatsapp.png"
                      alt="Whatsapp"
                      height="45"
                      width="45"
                      class="ml-3"
                    ></v-img>
                  </ShareNetwork>
                </v-col>
              </v-row>
            </section>
            <section
              v-if="'' != soloPropiedad.inpost_gallery_data"
              class="proPagina-images-extras pb-5 pt-3"
            >
              <v-expansion-panels flat>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <strong>MÁS IMÁGENES</strong>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <coolLightBox
                      :items="imagesEx(soloPropiedad.inpost_gallery_data)"
                      :index="lightbox"
                      @close="lightbox = null"
                    ></coolLightBox>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        lg="4"
                        class="image d-flex child-flex"
                        v-for="(image, imageIndex) in imagesEx(
                          soloPropiedad.inpost_gallery_data
                        )"
                        :key="imageIndex"
                        @click="lightbox = imageIndex"
                      >
                        <v-img
                          :src="image"
                          :alt="`Imagen ${imageIndex + 1}`"
                          class="galeria"
                        ></v-img>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </section>
            <section v-if="'' != soloPropiedad.detalles">
              <section class="proPagina-detalles">
                <v-card flat class="pa-5">
                  <v-card-title>Detalles</v-card-title>
                  <v-card-text v-html="soloPropiedad.detalles"></v-card-text>
                </v-card>
              </section>
              <v-divider class="py-3"></v-divider>
            </section>
            <section v-if="'' != soloPropiedad.incluye">
              <section class="proPagina-incluye">
                <v-card flat class="pa-5">
                  <v-card-title class="py-0">Incluye</v-card-title>
                  <div class="proPagina__list py-5">
                    <div
                      v-for="(inc, index) in soloPropiedad.incluye"
                      :key="index"
                    >
                      <v-icon color="red">mdi-square-medium</v-icon>
                      {{ inc }}
                    </div>
                  </div>
                </v-card>
              </section>
              <v-divider class="py-3"></v-divider>
            </section>
            <section v-if="'' != soloPropiedad.espacios_comunes">
              <section class="proPagina-espacios">
                <v-card flat class="pa-5">
                  <v-card-title class="py-0">Espacios comunes</v-card-title>
                  <div class="proPagina__list py-5">
                    <div
                      v-for="(inc, index) in soloPropiedad.espacios_comunes"
                      :key="index"
                    >
                      <v-icon color="red">mdi-square-medium</v-icon>
                      {{ inc }}
                    </div>
                  </div>
                </v-card>
              </section>
              <v-divider class="py-3"></v-divider>
            </section>
            <section
              v-if="
                '' != soloPropiedad.playa ||
                  '' != soloPropiedad.tren ||
                  '' != soloPropiedad.farmacias ||
                  '' != soloPropiedad.tiendas ||
                  '' != soloPropiedad.restaurantes ||
                  '' != soloPropiedad.panaderias ||
                  '' != soloPropiedad.locomocion
              "
            >
              <section class="proPagina-lugares">
                <v-card flat class="pa-5">
                  <v-card-title class="pt-0"
                    >Lugares públicos cercanos y transporte</v-card-title
                  >
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      class="d-flex justify-space-between align-center"
                      v-if="'' != soloPropiedad.playa"
                    >
                      <strong><v-icon>mdi-beach</v-icon> Playa:</strong>
                      <div>{{ soloPropiedad.playa }} mts.</div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      class="d-flex justify-space-between align-center"
                      v-if="'' != soloPropiedad.tren"
                    >
                      <strong><v-icon>mdi-train</v-icon> Metro - Tren:</strong>
                      <div>{{ soloPropiedad.tren }} mts.</div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      class="d-flex justify-space-between align-center"
                      v-if="'' != soloPropiedad.farmacias"
                    >
                      <strong
                        ><v-icon>mdi-hospital-box-outline</v-icon>
                        Farmacias:</strong
                      >
                      <div>{{ soloPropiedad.farmacias }} mts.</div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      class="d-flex justify-space-between align-center"
                      v-if="'' != soloPropiedad.tiendas"
                    >
                      <strong
                        ><v-icon>mdi-home-city-outline</v-icon> Tiendas:</strong
                      >
                      <div>{{ soloPropiedad.tiendas }} mts.</div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      class="d-flex justify-space-between align-center"
                      v-if="'' != soloPropiedad.restaurantes"
                    >
                      <strong
                        ><v-icon>mdi-food-fork-drink</v-icon>
                        Restaurantes:</strong
                      >
                      <div>{{ soloPropiedad.restaurantes }} mts.</div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      class="d-flex justify-space-between align-center"
                      v-if="'' != soloPropiedad.panaderias"
                    >
                      <strong
                        ><v-icon>mdi-food-croissant</v-icon> Panaderías:</strong
                      >
                      <div>{{ soloPropiedad.panaderias }} mts.</div>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      class="d-flex justify-space-between align-center"
                      v-if="'' != soloPropiedad.locomocion"
                    >
                      <strong><v-icon>mdi-bus-stop</v-icon> Locomoción:</strong>
                      <div>{{ soloPropiedad.locomocion }} mts.</div>
                    </v-col>
                  </v-row>
                </v-card>
              </section>
              <v-divider class="py-3"></v-divider>
            </section>
            <section v-if="'' != soloPropiedad.youtube">
              <v-card tile color="transparent" height="350">
                <iframe
                  width="100%"
                  height="350"
                  :src="video(soloPropiedad.youtube)"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-card>
            </section>
            <section class="proPagina-contacto pt-10">
              <h2 class="mb-3">Contacto</h2>
              <div>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    v-if="
                      soloPropiedad.agentes.includes(
                        listadoAgentes[0].id.toString()
                      )
                    "
                  >
                    <Agente :agente="listadoAgentes[0]" color="#fff"></Agente>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    v-if="
                      soloPropiedad.agentes.includes(
                        listadoAgentes[1].id.toString()
                      )
                    "
                  >
                    <Agente :agente="listadoAgentes[1]" color="#fff"></Agente>
                  </v-col>
                </v-row>
              </div>
              <v-divider class="py-3 mt-10"></v-divider>
            </section>
            <section class="proPagina-mapa">
              <div
                id="map-wrap"
                style="height: 400px; width: 100%"
                v-if="verMap"
              >
                <h2 class="mb-2">Mapa de la propiedad</h2>
                <client-only>
                  <l-map :zoom="16" :center="[mapLat, mapLon]">
                    <l-tile-layer
                      url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    ></l-tile-layer>
                    <l-marker :lat-lng="[mapLat, mapLon]"></l-marker>
                  </l-map>
                </client-only>
              </div>
              <v-divider class="py-3 mt-10"></v-divider>
            </section>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="lateral">
          <v-card dark tile class="mt-3 pa-5" color="#37353d">
            <section class="tags">
              <tags></tags>
            </section>
            <v-divider class="my-5"></v-divider>
            <section class="ultimas">
              <ultimas></ultimas>
            </section>
          </v-card>
          <cercanas :cerca="buscarCercanas"></cercanas>
        </v-col>
      </v-row>
    </v-container>
    <foot></foot>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PortadaProp from "~/components/PortadaProp";
import Cercanas from "~/components/Cercanas";
import Ultimas from "~/components/Ultimas";
import Agente from "~/components/Agente";
import Foot from "~/components/Foot";
import CoolLightBox from "vue-cool-lightbox";
import Precio from "~/components/Precio";
import PrecioUf from "~/components/PrecioUf";
import Tags from "~/components/Tags";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {
  components: {
    PortadaProp,
    Cercanas,
    Ultimas,
    Agente,
    Tags,
    Foot,
    CoolLightBox,
    Precio,
    PrecioUf
  },
  data: () => ({
    mapaUrl: "https://nominatim.openstreetmap.org/search?format=json&q=",
    mes: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ],
    lightbox: null,
    verMap: false,
    mapLat: "",
    mapLon: ""
  }),
  head() {
    return {
      title: this.titlePro,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.descripcionPro
        },
        { property: "og:type", content: "og:website" },
        {
          property: "og:url",
          content: `https://marsolpropiedades.cl/propiedades/${this.$route.params.id}`
        },
        { property: "og:title", content: this.soloPropiedad.title.rendered },
        { property: "og:image", content: this.imagenPro },
        { property: "og:description", content: this.descripcionPro },
        {
          property: "twitter:title",
          content: this.soloPropiedad.title.rendered
        },
        {
          property: "twitter:description",
          content: this.descripcionPro
        },
        { property: "twitter:image", content: this.imagenPro }
      ],
      link: [
        {
          rel: "canonical",
          href: `https://marsolpropiedades.cl/propiedades/${this.$route.params.id}`
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["extension", "listadoAgentes", "listadoPropiedades"]),
    buscarCercanas() {
      let cercanas = [];
      if (this.soloPropiedad != null) {
        cercanas = this.listadoPropiedades.filter(pro => {
          if (
            pro.ciudad === this.soloPropiedad.ciudad &&
            pro.id != this.soloPropiedad.id
          ) {
            return pro;
          }
        });
      }
      this.mapaPro();
      return cercanas;
    },
    imagenPro() {
      let imgpro = "";
      if (this.soloPropiedad != null) {
        this.soloPropiedad.yoast_meta.forEach(propiedad => {
          if ("og:image" === propiedad.property) {
            imgpro = propiedad.content;
          }
        });
      }
      return imgpro;
    },
    titlePro() {
      let title = "";
      if (this.soloPropiedad != null) {
        this.soloPropiedad.yoast_meta.forEach(propiedad => {
          if ("og:title" === propiedad.property) {
            title = propiedad.content;
          }
        });
      }
      return title;
    },
    descripcionPro() {
      let despro = "";
      if (this.soloPropiedad != null) {
        this.soloPropiedad.yoast_meta.forEach(propiedad => {
          if ("og:description" === propiedad.property) {
            despro = propiedad.content;
          }
        });
      }
      return despro;
    },
    direPro() {
      let direpro = "";
      if (this.soloPropiedad != null) {
        if ("" != this.soloPropiedad.direccion)
          direpro = `${this.soloPropiedad.direccion}, ${this.soloPropiedad.ciudad}`;
        else direpro = this.soloPropiedad.ciudad;
      }
      return direpro;
    },
    catePro() {
      let catepro = "";
      if (this.soloPropiedad != null) {
        catepro = this.soloPropiedad.categoria;
      }
      return catepro.toLowerCase();
    },
    opePro() {
      let opepro = "";
      if (this.soloPropiedad != null) {
        opepro = this.soloPropiedad.operacion;
      }
      return opepro.toLowerCase();
    },
    nombrePro() {
      let nombrepro = "";
      if (this.soloPropiedad != null) {
        nombrepro = this.soloPropiedad.title.rendered;
      }
      return nombrepro;
    }
  },
  methods: {
    ...mapActions(["buscarPropiedad", "quitarPropiedad"]),
    dir() {
      return this.direPro;
    },
    async mapaPro() {
      let mapa = "";
      let city = this.soloPropiedad.ciudad.replace(/ /g, "+");
      let dire = this.soloPropiedad.direccion.replace(/ /g, "+");

      if (
        "" != this.soloPropiedad.direccion &&
        "" === this.soloPropiedad.ciudad
      )
        mapa = dire;
      if (
        "" != this.soloPropiedad.ciudad &&
        "" === this.soloPropiedad.direccion
      )
        mapa = city;
      if (
        "" != this.soloPropiedad.ciudad &&
        "" != this.soloPropiedad.direccion
      ) {
        mapa = `${dire}%2C+${city}`;
      }
      const mp = await this.$axios.$get(`${this.mapaUrl}${mapa}`);
      if (0 < mp.length) {
        this.verMap = true;
        this.mapLat = mp[0].lat;
        this.mapLon = mp[0].lon;
      }
      return mp;
    },
    video(url) {
      let aux = url.split("=");
      return "https://www.youtube.com/embed/" + aux[1];
    },
    fecha(valor) {
      let aux = "";
      aux = valor.split("T");
      aux = aux[0].split("-");
      return `${Number(aux[2])} de ${this.mes[Number(aux[1])]} ${aux[0]}`;
    },
    imagesEx(datos) {
      let aux = [];
      let claves = Object.values(datos);
      for (let i = 0; i < claves.length; i++) {
        let ax = claves[i].imgurl.split(".");
        let ext = ax[1].substring(0, ax[1].length - 8);
        aux.push(`${ax[0]}.${ext}.${ax[2]}`);
      }
      return aux;
    }
  },
  async asyncData(context) {
    return context.$axios
      .get(
        `https://marsolpropiedades.cl/data/wp-json/wp/v2/ms-propiedades/?slug=${context.params.id}`
      )
      .then(result => {
        return {
          soloPropiedad: result.data[0]
        };
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="sass">
#proPagina
  background: #e3e3e3
  color: #999ca9
  .galeria
    cursor: pointer
  .lateral
    .v-btn
      margin: 1px
  .proPagina-data
    header
      font-size: .8rem
      span, a
        color: $rojo
        text-transform: uppercase
  .proPagina
    &__list
      @media(min-width: 600px)
        column-count: 3
  .proPagina-lugares
    strong
      background: $rojo
      color: white
      padding: 5px
  h2
    color: $gris2
    font-size: 24px
    line-height: 1.4
  .opera
    background: $rojo
    position: absolute
    text-transform: uppercase
    @media (min-width: 960px)
      font-size: 30px
  .valor
    background: $rojo
    border-radius: initial !important
    font-size: 1.2rem
  .image
    background-size: cover
    height: 250px
</style>
