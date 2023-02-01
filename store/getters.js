export default {
  listadoPropiedades: state => state.propiedades,
  listadoVendidas: state => state.vendidas,
  soloPropiedad: state => state.propiedad,
  soloMapa: state => state.mapa,
  listadoAgentes: state => state.agentes,
  listadoDichos: state => state.dichos,
  listadoImportantes: state => {
    let importantes = []
    let arrAux = []
    let aux = 1
    state.propiedades.forEach(pro => {
      if ("Alto" === pro.importancia.importancia) {
        if (3 >= aux) {
          arrAux.push(pro);
          aux++;
        }
        if(3 < aux){
          aux = 1;
          importantes.push(arrAux);
          arrAux = [];
        }
      }
    });
    return importantes
  },
  listadoCiudades: state => {
    let ciudades = [];
    state.propiedades.forEach(pro => {
      if (!ciudades.includes(pro.direccion.ciudad) && pro.direccion.ciudad) {
        ciudades.push(pro.direccion.ciudad);
      }
    })
    return ciudades
  },
  listadoTags: state => {
    let tags = ["venta", "arriendo"];
    state.propiedades.forEach(pro => {
      if (!tags.includes(pro.categoriaGraphql.categoria.toLowerCase()) && pro.categoriaGraphql.categoria) {
        tags.push(pro.categoriaGraphql.categoria.toLowerCase());
      }
    })
    return tags
  },
  listadoUltimas: state => {
    let ultimas = state.propiedades.slice(-6)
    return ultimas
  }
}
