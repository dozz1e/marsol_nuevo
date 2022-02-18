<template>
  <div id="nosotros">
    <portada-otras titulo="Nuestro Equipo" fondo="nosotros"></portada-otras>
    <v-container>
      <v-row class="d-flex align-center py-5">
        <v-col cols="12" sm="6">
          <v-card-title>MARSOL PROPIEDADES</v-card-title>
          <v-card-text>
            Es una empresa dedicada al rubro inmobiliario, destaca por su
            profesionalismo y excelente servicio de calidad, integral y
            personalizado, interpretando lo que buscan sus clientes tanto en la
            compra, venta, arriendo y/o administración de propiedades.<br />El
            equipo de trabajo está formado por profesionales altamente
            calificados en el área administrativa, comercial y jurídica.<br />Sus
            personalidades espontáneas, carismáticas, alegres, responsables y
            sobre todo confiables, hacen que tengan una relación respetuosa,
            cercana y amigable con los clientes.
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img
            src="/logos/logo-completo.png"
            alt="Logo MarSol"
            class="nosotros__img"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <client-only>
          <v-row no-gutters>
            <v-col
              cols="12"
              sm="4"
              v-for="(emp, index) in empresa"
              :key="index"
              class="pa-2"
            >
              <v-dialog transition="dialog-top-transition" max-width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-card
                    v-bind="attrs"
                    v-on="on"
                    hover
                    height="150"
                    class="d-flex justify-center align-center empButton"
                  >
                    <v-card-title v-text="emp.titulo"></v-card-title>
                  </v-card>
                </template>
                <template>
                  <div class="pa-5 empDialog">
                    <h2 v-text="emp.titulo"></h2>
                    <p v-html="emp.texto" class="pt-5"></p>
                  </div>
                </template>
              </v-dialog>
            </v-col>
          </v-row>
        </client-only>
      </v-row>
      <section class="agentes">
        <nosotros></nosotros>
      </section>
    </v-container>
    <Foot></Foot>
  </div>
</template>

<script>
import PortadaOtras from "~/components/PortadaOtras";
import Nosotros from "~/components/Nosotros";
import Foot from "~/components/Foot";
export default {
  components: { PortadaOtras, Nosotros, Foot },
  data: () => ({
    dialog1: false,
    dialog2: false,
    dialog3: false,
    empresa: [
      {
        titulo: "VISIÓN",
        texto:
          "Ser una empresa líder y prestigiosa, reconocida a nivel nacional en el mercado inmobiliario."
      },
      {
        titulo: "MISIÓN",
        texto:
          "Escuchar las necesidades y requerimientos de nuestros clientes, entregando un servicio integral y personalizado, asesorándolos  de manera cercana, eficaz y confiable tanto en la compra, venta, arriendo y/o administración de las propiedades.<br>Acompañándolos en este proceso de principio a fin, ofreciendo un servicio de calidad y excelencia."
      },
      {
        titulo: "VALORES",
        texto: `<ul>
          <li>Honestidad y transparencia: Siempre tendrás el servicio ofrecido.</li>
          <li>Servicio y orientación al cliente: Nunca estarás solo.</li>
          <li>Ética profesional: Precios justos, sana competencia.</li>
          <li>Empatía, Respeto y Cercanía: Relación amigable con el cliente.</li>
        </ul>`
      }
    ]
  }),
  head() {
    return {
      title: "Nuestro Equipo | MarSol Propiedades",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Nuestro Equipo | MarSol Propiedades"
        },
        {
          property: "og:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        },
        {
          property: "og:url",
          content: "https://www.marsolpropiedades.cl/nosotros"
        },
        {
          property: "twitter:title",
          content: "Nuestro Equipo | MarSol Propiedades"
        },
        {
          property: "twitter:description",
          content:
            "Dedicados al rubro inmobiliario, compra, venta, arriendo y/o administración de propiedades. Profesionales en el área administrativa, comercial y jurídica."
        }
      ],
      link: [
        { rel: "canonical", href: "https://www.marsolpropiedades.cl/nosotros" }
      ]
    };
  }
};
</script>

<style lang="sass">
#nosotros
  background: #e3e3e3
  .nosotros__img
    .v-image__image
      @media (min-width: 960px)
        background-position: right
        background-size: 500px 300px
.empButton
  background: rgba(255,255,255,.4) !important
  color: $texto
  .v-card__title
    font-size: 1.8rem
    font-weight: bold
.empDialog
  background: #e3e3e3
  h2
    color: $rojo
  ul
    padding: 0 20px !important
    li
      list-style-type: disc
      padding: 10px
</style>
