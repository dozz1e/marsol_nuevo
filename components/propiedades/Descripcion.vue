<template>
  <v-card class="mx-auto">
    <v-card-text>
      <span v-html="texto"></span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    texto: {
      type: String,
      default: ""
    },
    titulo: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
