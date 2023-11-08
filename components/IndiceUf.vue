<template>
  <div v-if="mostrarIndice" class="mostrarIndices">
    <v-icon color="red">mdi-finance</v-icon>
    <strong>UF</strong>{{ mostrarIndice }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["mostrarIndice"]),
  }
}
</script>

<style lang="sass">
.mostrarIndices
  display: flex
  justify-content: center
  i
    margin-right: 4px
  strong
    margin-right: 5px
</style>


