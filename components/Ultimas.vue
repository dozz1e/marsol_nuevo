<template>
  <div id="ultimas">
    <h3>Últimas propiedades</h3>
    <v-list color="transparent" dark>
      <v-list-item
        v-for="(ult, index) in listadoUltimas"
        :key="index"
        nuxt
        :to="`/propiedades/${ult.slug}`"
        color="#37353d"
      >
        <v-list-item-avatar horizontal tile>
          <v-img :src="imagenPro(ult)" :alt="ult.title.rendered"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            v-text="ult.title.rendered"
            class="white--text"
          ></v-list-item-title>
          <v-list-item-subtitle
            v-text="ult.ciudad"
            class="white--text"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["listadoUltimas"]),
  },
  methods: {
    imagenPro(pro) {
      let imgpro = "";
      pro.yoast_meta.forEach((propiedad) => {
        if ("og:image" === propiedad.property) {
          imgpro = propiedad.content;
        }
      });
      return imgpro;
    },
  },
};
</script>

<style lang="sass">
#ultimas
  h3
    color: #999
</style>