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
                galeria
              }
              categoriaGraphql {
                categoria
              }
              seo {
                metaKeywords
                metaDesc
                title
              }
              categories(first: 10) {
                nodes {
                  categoryId
                }
              }
            }
          }
        }`,
      }
    );
    this.$axios.onError((error) => {
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
              direccion {
                ciudad
                direccion
              }
              datos {
                areaTotal
                banos
                habitaciones
                galeria
              }
              categoriaGraphql {
                categoria
              }
            }
          }
        }`,
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
