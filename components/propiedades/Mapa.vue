<template>
  <v-card flat>
    <v-card-text>
      <h2>Mapa de la propiedad</h2>
    </v-card-text>
    <div id="map-wrap" style="height: 400px; width: 100%">
      <client-only>
        <l-map :zoom="16" :center="[mapLat, mapLon]">
          <l-tile-layer
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker :lat-lng="[mapLat, mapLon]"></l-marker>
        </l-map>
      </client-only>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    direccion: {
      type: String,
      default: ""
    },
    ciudad: {
      type: String,
      default: ""
    }
  },

  data: () => ({
    mapLat: 0,
    mapLon: 0
  }),

  mounted() {
    this.mapa();
  },

  methods: {
    async mapa() {
      let mapa = "";
      let city = "";
      let dire = "";
      if (this.ciudad) city = this.ciudad.replace(/ /g, "+");
      if (this.direccion) dire = this.direccion.replace(/ /g, "+");

      if ("" != this.direccion && "" === this.ciudad) mapa = dire;
      if ("" != this.ciudad && "" === this.direccion) mapa = city;
      if ("" != this.ciudad && "" != this.direccion) {
        mapa = `${dire}+${city}`;
      }
      const mp = await this.$axios.$get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${mapa}`
      );
      if (0 < mp.length) {
        this.mapLat = mp[0].lat;
        this.mapLon = mp[0].lon;
      }
      return mapa;
    }
  }
};
</script>

<style></style>
