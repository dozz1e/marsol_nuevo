<template>
  <v-card class="mx-auto listado">
    <v-card-text>
      <h2 class="mb-2 text--accent-2 red--text">{{ titulo }}</h2>
      <ul class="ml-4">
        <li v-for="dat in datos" :key="dat">{{ dat }}</li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    datos: {
      type: Array,
      default: []
    },
    titulo: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="sass">
.listado
  ul
    list-style: none

  ul li::before
    content: "\2022"
    color: #FF5252
    font-weight: bold
    display: inline-block
    width: 1em
    margin-left: -1em
</style>
