<template>
  <div v-if="images" class="carrusel">
    <v-carousel height="600" hide-delimiters>
      <v-carousel-item
        eager
        v-for="(image, i) in images"
        :key="i"
        :src="`https://marsolpropiedades.cl/images/propiedades/${id}/${image}.webp`"
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
      type: String,
      default: "0",
    },
    images: {
      type: Number,
      default: 0,
    },
  },

  data: () => ({
    slickOptions: {
      accessibility: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  }),
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
