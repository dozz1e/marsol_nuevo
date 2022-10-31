export default {
  async listaPropiedades({ commit, state }) {
    const propiedades = await this.$axios.post(
      "https://marsolpropiedades.cl/data/graphql",
      {
        query: `{
          propiedades(where: {categoryId: 2}) {
            nodes {
              title
              slug
              youtube {
                youtube
              }
              precio {
                precio
                precioUf
              }
              operacion {
                operacion
              }
              incluye {
                incluye
              }
              importancia {
                importancia
              }
              featuredImage {
                node {
                  sourceUrl(size: MEDIUM)
                  altText
                  link
                }
              }
              espaciosComunes {
                espaciosComunes
              }
              direccion {
                ciudad
                direccion
              }
              detallesAdicionales {
                detalles
              }
              datos {
                areaTotal
                banos
                habitaciones
              }
              categoriaGraphql {
                categoria
              }
              agentes {
                agentes
              }
              seo {
                metaKeywords
                metaDesc
                title
              }
            }
          }
        }`
      }
    );
    this.$axios.onError(error => {
      console.log(error);
    });
    commit("SET_PROPIEDADES", propiedades.data.data.propiedades.nodes);
    let tags = ["venta", "arriendo"];
    let ciudades = [];
    let importantes = [];
    let aux = 1;
    let arrAux = [];
    propiedades.data.data.propiedades.nodes.forEach(pro => {
      if (!ciudades.includes(pro.direccion.ciudad) && pro.direccion.ciudad) {
        ciudades.push(pro.direccion.ciudad);
      }
      if (
        !tags.includes(pro.categoriaGraphql.categoria.toLowerCase()) &&
        pro.categoriaGraphql.categoria
      ) {
        tags.push(pro.categoriaGraphql.categoria.toLowerCase());
      }
      if ("Alto" === pro.importancia.importancia) {
        if (3 >= aux) {
          arrAux.push(pro);
          aux++;
        }
        if( 3 < aux){
          aux = 1;
          importantes.push(arrAux);
          arrAux = [];
        }
      }
    });
    commit("SET_CIUDADES", ciudades);
    commit("SET_TAGS", tags);
    commit("SET_IMPORTANTES", importantes);
  },
  async ultimasPropiedades({ commit }) {
    const propiedades = await this.$axios.post(
      "https://marsolpropiedades.cl/data/graphql",
      {
        query: `{
          propiedades(first: 6, where: {categoryId: 2}) {
            nodes {
              title
              slug
              youtube {
                youtube
              }
              precio {
                precio
                precioUf
              }
              operacion {
                operacion
              }
              incluye {
                incluye
              }
              importancia {
                importancia
              }
              featuredImage {
                node {
                  sourceUrl(size: MEDIUM)
                  altText
                  link
                }
              }
              espaciosComunes {
                espaciosComunes
              }
              direccion {
                ciudad
                direccion
              }
              detallesAdicionales {
                detalles
              }
              datos {
                areaTotal
                banos
                habitaciones
              }
              categoriaGraphql {
                categoria
              }
              agentes {
                agentes
              }
              seo {
                metaKeywords
                metaDesc
                title
              }
            }
          }
        }`
      }
    );
    commit("SET_ULTIMAS", propiedades.data.data.propiedades.nodes);
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
