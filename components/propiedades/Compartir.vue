<template>
  <v-card flat>
    <v-card-text class="d-flex align-center pt-0">
      <h3>Compartir</h3>
      <share-network
        network="facebook"
        key="facebook"
        :url="`https://marsolpropiedades.cl/propiedades/${propiedad.slug}`"
        :title="propiedad.seo.title"
        :description="propiedad.seo.metaDesc"
        quote="MarSol Group Propiedades"
        hashtags="propiedades,arriendo, venta, administración"
      >
        <v-img
          src="/logos/social/facebook.png"
          alt="Facebook"
          height="45"
          width="45"
          class="ml-3"
        ></v-img>
      </share-network>
      <share-network
        network="whatsapp"
        key="whatsapp"
        :url="`https://marsolpropiedades.cl/propiedades/${propiedad.slug}`"
        :title="propiedad.seo.title"
        :descripcionPro="propiedad.seo.metaDesc"
        quote="MarSol Group Propiedades"
        hashtags="propiedades,arriendo, venta, administración"
      >
        <v-img
          src="/logos/social/whatsapp.png"
          alt="Whatsapp"
          height="45"
          width="45"
          class="ml-3"
        ></v-img>
      </share-network>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    propiedad: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style></style>
