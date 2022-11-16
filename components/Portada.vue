<template>
  <div id="portada">
    <v-carousel cycle hide-delimiters show-arrows-on-hover height="600">
      <v-carousel-item v-for="(item, i) in items" :key="i" eager>
        <v-img
          :src="`${item.src}.webp`"
          sizes="(max-width: 1904px) 100vw, 1904px"
          :srcset="
            `${item.src}@1x.webp 960w, ${item.src}@2x.webp 1264w, ${item.src}@3x.webp 1904w`
          "
          height="600"
          :alt="item.nombre"
          gradient="to top right, rgba(25,32,72,.4), rgba(25,32,72,.4)"
          eager
        >
          <v-card
            class="container d-flex flex-column align-center justify-center"
            color="transparent"
            flat
          >
            <div class="v-card__body">
              <v-card-title
                v-text="listadoDichos[i].titulo"
                class="text-center mb-5"
              ></v-card-title>
              <v-card-subtitle
                v-text="listadoDichos[i].sub"
                class="text-center"
              ></v-card-subtitle>
            </div>
          </v-card>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    items: [
      {
        nombre: "1",
        src: "/images/slider/1"
      },
      {
        nombre: "2",
        src: "/images/slider/2"
      },
      {
        nombre: "3",
        src: "/images/slider/3"
      },
      {
        nombre: "4",
        src: "/images/slider/4"
      },
      {
        nombre: "5",
        src: "/images/slider/5"
      }
    ]
  }),
  computed: {
    ...mapGetters(["listadoDichos"])
  }
};
</script>

<style lang="sass">
#portada
  .v-card
    .v-card__body
      background: rgba(200,200,200,.1)
      backdrop-filter: blur(5px)
      .v-card__title
        color: #eee
        font-size: 2.2rem
        font-weight: bold
        line-height: 1.1
        text-shadow: 1px 1px 1px black
      .v-card__subtitle
        color: #bbb
        font-size: 2.2rem
        line-height: 1.1
        text-shadow: 1px 1px 1px rgba(0,0,0,.6)
  .v-image
    .v-responsive__content
      display: flex
  @media (min-width: 600px)
    .v-card
      .v-card__body
        padding: 30px 25px
  @media (min-width: 960px)
    .v-card
      .v-card__body
        padding: 60px 50px
      .v-card__title
        font-size: 3rem !important
</style>
