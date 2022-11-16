<template>
  <div class="agentes d-flex justify-center">
    <v-card class="mb-3" width="350" :color="color">
      <v-row no-gutters>
        <v-col cols="12" sm="5" class="pa-3">
          <v-img
            :src="`/images/agentes/${agente.slug}.webp`"
            :alt="agente.nombre"
            :height="$vuetify.breakpoint.xsOnly ? '' : '150'"
            width="100%"
          ></v-img>
        </v-col>
        <v-col cols="12" sm="7" class="pa-0">
          <v-card-title v-text="agente.nombre"></v-card-title>
          <v-card-subtitle v-text="agente.titulo"></v-card-subtitle>
        </v-col>
        <v-col cols="12">
          <v-list class="pa-0" color="transparent">
            <v-list-item>
              <v-list-item-icon class="mr-2">
                <v-icon color="red">mdi-cellphone</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-text="`+${agente.fono}`"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon class="mr-2">
                <v-icon color="red">mdi-email-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="agente.correo"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item-action class="mt-2">
              <v-btn
                :href="`https://wa.me/${agente.fono}`"
                target="_blank"
                large
                color="#c93126"
                class="white--text"
                tile
                >Contacto</v-btn
              >
            </v-list-item-action>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    agente: {
      type: Object,
    },
    color: {
      type: String,
      default: "rgba(255,255,255,.5)",
    },
  },
};
</script>

<style lang="sass">
.agentes
  .v-card
    &__title
      line-height: 1.1
      margin-bottom: 5px
      word-break: normal
    &__subtitle
      line-height: 1.1
</style>
