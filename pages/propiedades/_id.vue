<template>
  <div v-if="null != soloPropiedad">
    <portada-prop :imagen="`https://marsolpropiedades.cl/images/propiedades/${soloPropiedad.slug}/1.webp`" :direccion="soloPropiedad.direccion.ciudad"
      :categoria="soloPropiedad.categoriaGraphql.categoria[0]" :nombre="soloPropiedad.title"
      :opera="soloPropiedad.operacion.operacion"></portada-prop>
    <v-container id="propiedad">
      <v-row class="body">
        <v-col cols="12" md="8" class="main">
          <carrusel :id="propiedad(3)" :images="soloPropiedad.datos.galeria"></carrusel>
          <section class="datos">
            <v-card>
              <v-tabs color="red accent-4" background-color="grey lighten-4">
                <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
                <v-tab-item>
                  <section class="datos">
                    <datos :propiedad="{
                      titulo: soloPropiedad.title,
                      categoria: soloPropiedad.categoriaGraphql.categoria[0],
                      operacion: soloPropiedad.operacion.operacion,
                      valor: soloPropiedad.precio.precio,
                      uf: soloPropiedad.precio.precioUf,
                      datos: soloPropiedad.datos,
                      direccion: direccionPropi,
                      estacionamiento: estacionamiento
                    }"></datos>
                  </section>
                  <section class="compartir">
                    <compartir :propiedad="soloPropiedad"></compartir>
                  </section>
                </v-tab-item>
                <v-tab-item>
                  <section class="descripcion">
                    <descripcion titulo="Detalles" :texto="soloPropiedad.detallesAdicionales.detalles"></descripcion>
                  </section>
                </v-tab-item>
                <v-tab-item>
                  <section class="incluye">
                    <listado titulo="Incluye" :datos="soloPropiedad.incluye.incluye"
                      v-if="soloPropiedad.incluye.incluye"></listado>
                    <listado titulo="Espacios Comunes" :datos="soloPropiedad.espaciosComunes.espaciosComunes"
                      v-if="soloPropiedad.espaciosComunes.espaciosComunes"></listado>
                    <div v-if="
                      !soloPropiedad.espaciosComunes.espaciosComunes &&
                      !soloPropiedad.incluye.incluye
                    ">
                      <h3>Sin Extras</h3>
                    </div>
                  </section>
                </v-tab-item>
                <v-tab-item>
                  <section class="mapa">
                    <div v-if="
                      soloPropiedad.direccion.ciudad ||
                      soloPropiedad.direccion.direccion
                    ">
                      <mapa :ciudad="soloPropiedad.direccion.ciudad" :direccion="soloPropiedad.direccion.direccion">
                      </mapa>
                    </div>
                    <div v-else>
                      <h3>Sin Mapa</h3>
                    </div>
                  </section>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </section>
        </v-col>
        <v-col cols="12" md="4" class="aside">
          <aside>
            <section class="contacto">
              <agente :agente="agente"></agente>
            </section>
            <v-card dark tile class="mt-3 pa-5" color="#37353d" v-if="!$vuetify.breakpoint.mobile">
              <section class="tags">
                <tags></tags>
              </section>
              <div>
                <v-divider class="my-5"></v-divider>
                <section class="ultimas">
                  <ultimas></ultimas>
                </section>
              </div>
            </v-card>
          </aside>
        </v-col>
      </v-row>
    </v-container>
    <foot />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Carrusel from "@/components/propiedades/Carrusel";
import Datos from "@/components/propiedades/Datos";
import Compartir from "@/components/propiedades/Compartir";
import Mapa from "@/components/propiedades/Mapa";
import Descripcion from "@/components/propiedades/Descripcion";
import Contacto from "@/components/propiedades/Contacto";
import Tags from "@/components/propiedades/Tags";
import Ultimas from "@/components/propiedades/Ultimas";
import Agente from "@/components/propiedades/Agente";
import Foot from "@/components/Foot";
import Listado from "@/components/propiedades/Listado.vue";
import VideoPropiedad from "@/components/propiedades/VideoPropiedad.vue";

export default {
  data: () => ({
    tab: null,
    items: ["Información", "Detalles", "Extras", "Mapa"],
    agente: {
      id: 1,
      nombre: "Marlene Alarcón",
      titulo: "Administradora de Empresas",
      fono: "56995999796",
      correo: "contacto@marsolpropiedades.cl",
      slug: "marlene",
    }
  }),

  layout: 'propiedad',

  components: {
    Agente,
    Carrusel,
    Datos,
    Compartir,
    Mapa,
    Descripcion,
    Contacto,
    Tags,
    Ultimas,
    Foot,
    Listado,
    VideoPropiedad
  },

  head() {
    return {
      title: this.propiedad(0),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.propiedad(1)
        },
        {
          property: "og:url",
          content: `https://marsolpropiedades.cl/propiedades/${this.$route.params.id}`
        },
        { property: "og:title", content: this.propiedad(0) },
        { property: "og:image", itemprop: "image", content: this.propiedad(2) },
        { property: "og:description", content: this.propiedad(1) },
        {
          property: "twitter:title",
          content: this.propiedad(0)
        },
        {
          property: "twitter:description",
          content: this.propiedad(1)
        },
        { property: "twitter:image", content: this.propiedad(2) }
      ],
      link: [
        {
          rel: "canonical",
          href: `https://marsolpropiedades.cl/propiedades/${this.$route.params.id}`
        }
      ]
    };
  },

  methods: {
    propiedad(valor) {
      let aux = "";
      switch (valor) {
        case 0: {
          if (this.soloPropiedad != null) {
            aux = this.soloPropiedad.seo.title;
          }
          break;
        }
        case 1: {
          if (this.soloPropiedad != null) {
            aux = this.soloPropiedad.seo.metaDesc;
          }
          break;
        }
        case 2: {
          if (this.soloPropiedad != null) {
            aux = `https://marsolpropiedades.cl/images/propiedades/${this.soloPropiedad.slug}/1.webp`;
          }
          break;
        }
        case 3: {
          if (this.soloPropiedad != null) {
            aux = this.$route.params.id;
          }
          break;
        }
      }
      return aux;
    }
  },

  computed: {
    ...mapGetters(["listadoUltimas"]),
    direccionPropi() {
      let direccion = this.soloPropiedad.direccion.ciudad;
      if (this.soloPropiedad.direccion.direccion)
        direccion = `${this.soloPropiedad.direccion.direccion}, ${this.soloPropiedad.direccion.ciudad}`;
      return direccion;
    },
    estacionamiento() {
      let estac = this.soloPropiedad.incluye.incluye;
      let hayEsta = false;
      if (estac) hayEsta = estac.some(est => est === "Estacionamiento");
      return hayEsta;
    }
  },

  async asyncData(context) {
    return context.$axios
      .post("https://marsolpropiedades.cl/data/graphql", {
        query: `{
          propiedad(id: "${context.params.id}", idType: URI) {
            title
            slug
            categoriaGraphql {
              categoria
            }
            datos {
              banos
              habitaciones
              areaTotal
              galeria
            }
            detallesAdicionales {
              detalles
            }
            direccion {
              ciudad
              direccion
            }
            espaciosComunes {
              espaciosComunes
            }
            incluye {
              incluye
            }
            operacion {
              operacion
            }
            precio {
              precio
              precioUf
            }
            seo {
              metaDesc
              metaKeywords
              title
            }
          }
        }`
      })
      .then(result => {
        return {
          soloPropiedad: result.data.data.propiedad
        };
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="sass">
#propiedad
  background: #e3e3e3
</style>
