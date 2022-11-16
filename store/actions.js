export default {
  async listaPropiedades({ commit, state }) {
    const propiedades = await this.$axios.post(
      "https://marsolpropiedades.cl/data/graphql",
      {
        query: `{
          propiedades(where: {categoryId: 2}, first: 100) {
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
};
