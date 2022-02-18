<template>
  <v-card tile flat hover>
    <v-img :src="imagen" :alt="titulo"></v-img>
    <v-card-subtitle class="red-text"
      >{{ categoria }} PARA {{ operacion }}
    </v-card-subtitle>
    <v-card-title v-text="titulo"></v-card-title>
    <v-divider></v-divider>
    <v-card-actions>
      <v-row no-gutters>
        <v-col cols="5">
          <v-list-item v-if="'' != area">
            <v-icon class="pr-1">mdi-floor-plan</v-icon>{{ area }}&nbsp;mt2
          </v-list-item>
        </v-col>
        <v-col cols="7">
          <v-row no-gutters class="d-flex align-center justify-end">
            <v-col cols="4" v-if="'' != habitaciones">
              <v-list-item>
                <v-icon class="pr-2">mdi-bed-queen-outline</v-icon
                >{{ habitaciones }}
              </v-list-item>
            </v-col>
            <v-col cols="4" v-if="'' != banos">
              <v-list-item>
                <v-icon class="pr-2">mdi-shower</v-icon>{{ banos }}
              </v-list-item>
            </v-col>
            <v-col cols="4" v-if="'' != automv">
              <v-list-item>
                <v-icon class="pr-2">mdi-car</v-icon>
              </v-list-item>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: [
    "imagen",
    "titulo",
    "categoria",
    "operacion",
    "area",
    "habitaciones",
    "banos",
    "automv",
  ],
};
</script>

<style>
</style>