import React from 'react';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';
import ListadioPropiedades from './listadoPropiedades';

const ContenidoPagina = styled.div`
max-width: 1600px;
margin: 3rem auto;
width: 95%;

@media(min-width:768px){
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
}
`;

export const query = graphql`
query ($id: String!) {
    allStrapiPaginas(filter: {id: {eq: $id}}) {
      nodes {
        nombre
        contenido
        imagen{
            localFile{
                sharp: childImageSharp{
                    fluid(maxWidth: 1200){
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
      }
    }
  }  
`;

const Propiedades = ({ data: { allStrapiPaginas: { nodes } } }) => {
   // console.log(nodes);

    const { nombre,  imagen, contenido } = nodes[0];

    return (
        <Layout>
            <main className="contenedor">
                <h1>{nombre} </h1>
                <ContenidoPagina>
                    <Image
                    fluid={imagen.localFile.sharp.fluid}
                    />
                    <p>{contenido} </p>
                </ContenidoPagina>
            </main>
            {nombre === "Propiedades" && (
                <ListadioPropiedades/>
            )}
        </Layout>
    )
}

export default Propiedades;