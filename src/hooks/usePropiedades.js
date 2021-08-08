import {graphql, useStaticQuery} from 'gatsby';

const usePropiedades = () => {
    const datos = useStaticQuery(graphql`
    query{
        allStrapiPropiedades {
          nodes {
            nombre
            descripcion
            id
            estacionamiento
            habitaciones
            precio
            wc
            categoria {
              nombre
            }
            imagen {
             localFile{
                sharp: childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 400, quality: 100 ){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
             }
            }
            agentes {
              Nombre
              email
              telefono
            }
          }
        }
      }
    `);
    //console.log(datos)
    return datos.allStrapiPropiedades.nodes.map(propiedad => ({
        nombre: propiedad.nombre,
        descripcion: propiedad.descripcion,
        imagen: propiedad.imagen,
        wc: propiedad.wc,
        id: propiedad.id,
        habitaciones: propiedad.habitaciones,
        estacionamiento: propiedad.estacionamiento,
        precio: propiedad.precio,
        categoria: propiedad.categoria,
        agentes: propiedad.agentes,
    }))
}

export default usePropiedades;