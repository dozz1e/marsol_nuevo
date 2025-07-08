export default {
  listadoPropiedades: (state) => state.propiedades,
  listadoVendidas: (state) => state.vendidas,
  soloPropiedad: (state) => state.propiedad,
  soloMapa: (state) => state.mapa,
  listadoAgentes: (state) => state.agentes,
  listadoDichos: (state) => state.dichos,
  mostrarIndice: (state) => state.indice,
  listadoImportantes: (state) => {
    let importantes = [];
    state.propiedades.forEach((pro) => {
      pro.categories.nodes.forEach((cat) => {
        if (cat.categoryId === 11) {
          importantes.push(pro);
        }
      });
    });
    return importantes;
  },
  listadoCiudades: (state) => {
    let ciudades = [];
    state.propiedades.forEach((pro) => {
      if (!ciudades.includes(pro.direccion.ciudad) && pro.direccion.ciudad) {
        ciudades.push(pro.direccion.ciudad);
      }
    });
    return ciudades;
  },
  listadoTags: (state) => {
    let tags = ["venta", "arriendo"];
    state.propiedades.forEach((pro) => {
      if (
        !tags.includes(pro.categoriaGraphql.categoria[0].toLowerCase()) &&
        pro.categoriaGraphql.categoria
      ) {
        tags.push(pro.categoriaGraphql.categoria[0].toLowerCase());
      }
    });
    return tags;
  },
  listadoUltimas: (state) => {
    let ultimas = state.propiedades.slice(0, 6);
    return ultimas;
  },
};
