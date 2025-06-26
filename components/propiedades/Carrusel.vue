<template>
  <div v-if="images" class="carrusel">
    <v-carousel height="600" hide-delimiters>
      <v-carousel-item
        eager
        v-for="(image, i) in images"
        :key="i"
        :src="image.sourceUrl"
        contain
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },

  data: () => ({
    images: [],
    slickOptions: {
      accessibility: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  }),

  mounted() {
    this.imagenes();
  },

  methods: {
    async imagenes() {
      try {
        let datos = await this.$axios.$post(
          "https://marsolpropiedades.cl/data/graphql",
          {
            query: `{
            mediaItems(first: 30, where: {parent: "${this.id}", orderby: {order: ASC, field: DATE}}) {
              nodes {
                altText
                sourceUrl
              }
            }
          }`,
          }
        );
        this.images = await datos.data.mediaItems.nodes;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.carrusel .img-wrapper img {
  margin: auto;
  width: 100%;
  height: 400px;
  background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
