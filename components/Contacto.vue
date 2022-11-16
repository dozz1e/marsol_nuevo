<template>
  <div class="contacto">
    <v-list color="transparent" :dark="oscuro">
      <v-list-item class="d-flex align-center pa-0">
        <v-list-item-icon class="mr-2">
          <v-icon :color="colorIcono">mdi-map-marker</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            Independencia 1725 709-A Edificio Plaza Victoria, Valparaíso, Chile
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="d-flex align-center pa-0">
        <v-list-item-icon class="mr-2">
          <v-icon :color="colorIcono">mdi-cellphone</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <a href="tel:+56995999796">+56 9 9599 9796</a>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="d-flex align-center pa-0">
        <v-list-item-icon class="mr-2">
          <v-icon :color="colorIcono">mdi-email</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <a href="mailto:contacto@marsolpropiedades.cl">
              contacto@marsolpropiedades.cl
            </a>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item class="d-flex align-center pa-0">
        <v-list-item-icon class="mr-2">
          <v-icon :color="colorIcono">mdi-alarm</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> Lunes – Viernes: 09:00 – 19:00 </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    oscuro: {
      type: Boolean,
      default: true,
    },
    colorIcono: {
      type: String,
      default: "#878fd6",
    },
  },
};
</script>

<style lang="sass">
.contacto
  a
    color: white
  .v-list
    .v-list-item
      &__title
        white-space: initial
</style>
