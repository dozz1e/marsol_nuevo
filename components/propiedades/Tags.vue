<template>
  <div class="tags">
    <h3 class="pb-3">Tags</h3>
    <v-btn
      v-for="(tg, index) in listadoTags"
      :key="index"
      v-text="tg"
      outlined
      nuxt
      :to="link(tg)"
      dark
      class="mb-1 mr-1"
    ></v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["listadoTags"]),
  },
  methods: {
    link(dato) {
      return `/links/${dato
        .toLowerCase()
        .replace(/\s+/g, "-")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")}`;
    },
  },
};
</script>

<style lang="sass">
.tags
  h3
    color: #999
</style>