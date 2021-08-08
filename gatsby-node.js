/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

//Importar el plugin para los slug
const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
    const resultado = await graphql(`
    query {
        allStrapiPaginas{
          nodes{
            nombre
            id
          }
        }
        allStrapiPropiedades {
          nodes {
            id
            nombre
          }
        }
      }      
    `);
    //console.log(JSON.stringify(resultado.data.allStrapiPropiedades));

    //Si no hay resultados mostrar error en consola
    if(resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    //Si hay resultados generar los archivos estáticos
    const paginas = resultado.data.allStrapiPaginas.nodes;
    const propiedades = resultado.data.allStrapiPropiedades.nodes;
   // console.log(propiedades)

   //Crear los templates para las paginas nosotros y propiedades
   paginas.forEach( pagina => {
    actions.createPage({
        path: urlSlug(pagina.nombre),
        component: require.resolve('./src/components/paginas.js'),
        context: {
          id: pagina.id
        }
    })
  });

   //Crear los templates pàra los slug de propiedades
   propiedades.forEach( propiedad => {
     actions.createPage({
         path: urlSlug(propiedad.nombre),
         component: require.resolve('./src/components/propiedades.js'),
         context: {
           id: propiedad.id
         }
     })
   });
}
