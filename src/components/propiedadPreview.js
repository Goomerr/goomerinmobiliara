import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import urlSlug from 'url-slug';

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

const Card = styled.div`
border: 1px solid #e1e1e1;
box-shadow: 0px 0px 3px rgba(0,0,0,0.75);
@media (max-width: 480px){
    margin-bottom: 2rem;
}
img{
    max-width: 100%;
}
`;
const Contenido = styled.div`
padding: 2rem;
h3{ 
    text-align: center;
   font-size: 2.4rem;
}
.precio{
    font-size: 2rem;
    text-align: center;
    color: #b7094c;
}
`;

const PropiedadPreview = ({ propiedad }) => {
   // console.log(propiedad)
    const { nombre, imagen, wc, estacionamiento, precio, habitaciones } = propiedad;
    return (
        <Card>
            <Image
            fluid={imagen.localFile.sharp.fluid}
            />

            <Contenido>
                <h3>{nombre}</h3>
                <p className="precio">{precio} € </p>

                <Iconos
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones}
                />
               {/* <Boton to={urlSlug(nombre)}>Visitar Propiedad</Boton> */}
                <Boton to={`/${urlSlug(nombre)}`}>Visitar Propiedad</Boton>


            </Contenido>
        </Card>
    )
}

export default PropiedadPreview;
