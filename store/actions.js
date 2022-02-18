const base =
  "https://marsolpropiedades.cl/data/wp-json/wp/v2/ms-propiedades?categories=2";

export default {
  async listaPropiedades({ commit, state }) {
    const propiedades = await this.$axios.$get(`${base}&per_page=100`);
    this.$axios.onError(error => {
      console.log(error);
    });
    let tags = ["venta", "arriendo"];
    let ciudades = [];
    let importantes = [];
    let aux = 1;
    let arrAux = [];
    propiedades.forEach(pro => {
      if (!tags.includes(pro.ciudad) && "" != pro.ciudad) {
        ciudades.push(pro.ciudad);
      }
      if (!tags.includes(pro.categoria) && "" != pro.categoria) {
        tags.push(pro.categoria);
      }
      if ("Alto" === pro.importancia) {
        if (3 >= aux) {
          arrAux.push(pro);
          aux++;
        } else {
          aux = 1;
          importantes.push(arrAux);
          arrAux = [];
        }
      }
    });
    commit("SET_PROPIEDADES", propiedades);
    commit("SET_CIUDADES", ciudades);
    commit("SET_TAGS", tags);
    commit("SET_IMPORTANTES", importantes);
  },
  async ultimasPropiedades({ commit }) {
    const propiedades = await this.$axios.$get(`${base}&per_page=6`);
    commit("SET_ULTIMAS", propiedades);
  },
  quitarPropiedad({ commit }) {
    commit("SET_PROPIEDAD", null);
  },
  setIOS({ commit }) {
    const aux =
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    let ext = "jpg";
    if (!aux) ext = "webp";
    commit("SET_EXTENSION", ext);
  }
};
