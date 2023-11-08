<template>
  <div class="mostrarIndices" v-if="hours">
    <v-icon color="red">mdi-clock-outline</v-icon>
    {{ hours }}:{{ minutes }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: 0,
      minutes: 0,
    }
  },
  mounted() {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    setTime() {
      const date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours;
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes;
      this.hours = hours;
      this.minutes = minutes;
    }
  }
}
</script>
