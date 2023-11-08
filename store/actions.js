export default {
  async listaPropiedades({ commit, state }) {
    const propiedades = await this.$axios.post(
      "https://marsolpropiedades.cl/data/graphql",
      {
        query: `{
          propiedades(where: {categoryId: 2}, first: 30) {
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
  async ultimasVendidas({ commit }) {
    const propiedades = await this.$axios.post(
      "https://marsolpropiedades.cl/data/graphql",
      {
        query: `{
          propiedades(first: 3, where: {categoryId: 4}) {
            nodes {
              title
              slug
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
                }
              }
              direccion {
                ciudad
                direccion
              }
              datos {
                areaTotal
                banos
                habitaciones
              }
              categoriaGraphql {
                categoria
              }
            }
          }
        }`
      }
    );
    commit("SET_VENDIDAS", propiedades.data.data.propiedades.nodes);
  },
  async indiceUf({ commit }) {
    const indice = await this.$axios.get("https://mindicador.cl/api/uf");
    commit("SET_INDICE", indice.data.serie[0].valor);
  },
  quitarPropiedad({ commit }) {
    commit("SET_PROPIEDAD", null);
  },
};
