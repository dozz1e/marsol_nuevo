<template>
  <iframe :src="`https://www.youtube.com/embed/${src}?rel=0`" :title="name" width="100%" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="video_propiedad"></iframe>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
    name: {
      type: String,
    }
  },
};
</script>

<style lang="sass">
#video_propiedad
  height: 300px
@media (min-width: 720px)
  #video_propiedad
    height: 500px
</style>
