<template>
  <div id="serviciosPage">
    <portada-otras titulo="Servicios" fondo="servicios"></portada-otras>
    <section id="serviciosHeader">
      <v-container>
        <v-row
          class="d-flex align-center"
          :class="$vuetify.breakpoint.mobile ? 'py-5' : ''"
        >
          <v-col cols="12" sm="6">
            <v-card-title>EQUIPO DE PROFESIONALES</v-card-title>
            <v-card-text>
              Somos un apasionado equipo de corredores inmobiliarios.<br />
              Trabajamos con devoción a nuestros clientes.<br />
              Cada aspecto del negocio tiene como objetivo el éxito.<br />
              Agradecemos que confíe en nosotros para ayudarlo a encontrar las
              mejores soluciones para usted.
            </v-card-text>
          </v-col>
          <v-col cols="12" sm="6">
            <v-img
              :src="`/images/agentes/nosotros.${extension}`"
              alt="Equipo"
              class="servicios__img"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section id="serviciosBody" class="py-10">
      <v-container>
        <client-only>
          <v-row>
            <v-col
              cols="12"
              sm="4"
              v-for="(serv, index) in servicios"
              :key="index"
            >
              <v-dialog transition="dialog-top-transition" max-width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-card v-bind="attrs" v-on="on" hover height="200">
                    <v-img
                      :src="`/images/servicios/${index}.${extension}`"
                      height="200"
                      gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.5)"
                    >
                      <div class="imageCont d-flex justify-center flex-column">
                        <v-icon>{{ serv.icono }}</v-icon>
                        <v-card-title
                          v-text="serv.titulo"
                          class="d-flex justify-center"
                        ></v-card-title>
                      </div>
                    </v-img>
                  </v-card>
                </template>
                <template>
                  <div>
                    <v-img
                      :src="`/images/servicios/${index}.${extension}`"
                      height="250"
                    ></v-img>
                    <div class="dialogContent pa-5">
                      <h2 v-text="serv.titulo"></h2>
                      <p v-html="serv.texto"></p>
                    </div>
                  </div>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
        </client-only>
      </v-container>
    </section>
    <Foot></Foot>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PortadaOtras from "~/components/PortadaOtras";
import Foot from "~/components/Foot";
export default {
  components: { PortadaOtras, Foot },
  data: () => ({
    dialog1: false,
    dialog2: false,
    dialog3: false,
    servicios: [
      {
        titulo: "COMPRA Y VENTA",
        texto: `<ul>
            <li>Apoyo y asesoría (valorización, tasación, tramitación legal).</li>
            <li>Estrategias de venta, difusión y posicionamiento de la propiedad.</li>
            <li>Generamos compromisos de compraventa.</li>
            <li>Te orientamos y acompañamos durante el todo el proceso.</li>
          </ul>`,
        icono: "mdi-currency-usd"
      },
      {
        titulo: "ADMINISTRACIÓN",
        texto: `<ul>
            <li>Nos encargamos de gestionar el pago del arriendo y contribuciones de manera oportuna.</li>
            <li>Contamos con personal calificado para realizar las mantenciones de la propiedad.</li>
            <li>Te asesoramos y acompañamos cuando surgen desperfectos al interior de la propiedad.</li>
            <li>Gestionamos, buscamos y seleccionamos al mejor arrendatario según capacidad de pago, compromiso y responsabilidad.</li>
          </ul>`,
        icono: "mdi-key-variant"
      },
      {
        titulo: "ARRIENDOS",
        texto: `<ul>
            <li>Contamos con un gran stock de propiedades.</li>
            <li>Buscamos la mejor opción para ti.</li>
            <li>Gestionamos visitas de acuerdo a tu disponibilidad.</li>
            <li>Generamos contratos de arrendamiento y promesa de compraventa.</li>
          </ul>`,
        icono: "mdi-home-outline"
      }
    ]
  }),
  head() {
    return {
      title: "Servicios Inmobiliarios | MarSol Propiedades",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "og:title",
          content: "Servicios Inmobiliarios | MarSol Propiedades"
        },
        {
          property: "og:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "og:url",
          content: "https://www.marsolpropiedades.cl/servicios"
        },
        {
          property: "og:image",
          itemprop: "image",
          content: "https://www.marsolpropiedades.cl/logos/logo-completo.png"
        },
        {
          property: "twitter:title",
          content: "Servicios Inmobiliarios | MarSol Propiedades"
        },
        {
          property: "twitter:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "twitter:image",
          content: "https://www.marsolpropiedades.cl/logos/logo-completo.png"
        }
      ],
      link: [
        { rel: "canonical", href: "https://marsolpropiedades.cl/servicios" }
      ]
    };
  },
  computed: {
    ...mapGetters(["extension"])
  }
};
</script>

<style lang="sass">
#serviciosPage
  button
    padding: 100px 0

  #serviciosBody
    background: #e3e3e3
    .v-btn
      font-size: 1.2rem
      white-space: initial
      width: 100%
    .v-card
      .v-responsive__content
        .imageCont
          height: 100%
        .v-icon
          color: #e3e3e3
          font-size: 60px
        .v-card__title
          color: white
          font-size: 2rem
          text-align: center
        &:hover
          backdrop-filter: blur(3px)
  .servicios__img
    .v-image__image
      @media (min-width: 960px)
        background-position: right
        background-size: 500px 300px
.dialogContent
  background: #e3e3e3
  h2
    color: $rojo !important
  ul
    padding: 0 20px !important
    li
      list-style-type: disc
      padding: 10px
</style>
