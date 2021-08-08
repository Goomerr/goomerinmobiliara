import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';
import  {css} from '@emotion/react';
import Image from 'gatsby-image';
import Layout from './layout';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

const Boton = styled(Link)`
margin-top: 2rem;
padding: 0%;
background-color: #0091ad;
width: 100%;
color: #fff;
display: block;
text-align: center;
text-decoration: none;
font-weight: 700;
text-transform: uppercase;
`;

const Contenido = styled.div`
max-width: 1600px;
margin: 3rem auto;
width: 95%;

@media(min-width:768px){
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
}
`;

const Sidebar = styled.aside`
box-shadow: 0px 0px 3px rgba(0,0,0,0.75);
border: 1px solid #e1e1e1;
padding: 2rem;
border-radius: 2rem;
.precio{
    font-size: 2rem;
    color: #0091ad;
}
.agente{
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #0091ad;
    padding: 3rem;
    color: #fff;
}
p{
    margin: 0;
}
`;

export const query = graphql`
query ($id: String!) {
    allStrapiPropiedades(filter: {id: {eq: $id}}) {
      nodes {
        nombre
        descripcion
        wc
        habitaciones
        precio
        estacionamiento
        agentes{
            Nombre
            telefono
            email
        }
        imagen{
            localFile{
                sharp: childImageSharp {
                    fluid( maxWidth: 1200) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }

      }
    }
  }  
`;

const Propiedades = ({data: {allStrapiPropiedades: {nodes}}}) => {
    
    const {nombre, descripcion, estacionamiento, wc, habitaciones, agentes, imagen, precio} = nodes[0];

    return (
        <Layout>
            <h1 css={css`
            margin-top: 3rem;
            `}>{nombre} </h1>
            <Contenido>
                <main>
                    <Image
                    fluid={imagen.localFile.sharp.fluid}
                    />
                    <p>{descripcion} </p>
                </main>
                <Sidebar>
                    <p className="precio">{precio} €</p>
                    <Iconos
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}
                />
                <div className="agente">
                    <h2>Vendedor:</h2>
                    <p>{agentes.Nombre} </p>
                    <p>Tel: {agentes.telefono} </p>
                    <p>Email: {agentes.email} </p>
                </div>
                </Sidebar>
            </Contenido>
            <Boton to='/propiedades'>Ver Todas </Boton>

        </Layout>
    )
}

export default Propiedades;
