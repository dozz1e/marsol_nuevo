<template>
  <div class="precio">
    {{ moneda(valor) }}
  </div>
</template>

<script>
export default {
  props: ["valor"],
  methods: {
    moneda(valor) {
      let aux = valor.replace(".", "");
      aux = aux.replace(".", "");
      const formatterPeso = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0,
      });
      return `${formatterPeso.format(aux)} CLP`;
    },
  },
};
</script>

<style>
</style>