import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navegacion from './navegacion';
import { css } from '@emotion/react';


const Header = () => {
    //Consultar el logo con graphql
   const {logo} = useStaticQuery(graphql`
    query {
        logo: file(relativePath: {eq: "logo1.svg"}) {
           publicURL
         }
       }      
    `);

    return (
        <header
            css={css`
                    background-color: #b7094c ;
                    padding: 1rem;
                `}
        >
            <div
                css={css`
            max-width: 1600px;
            margin: 0 auto;
            text-align: center;

            @media(min-width:768px){
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            `}
            >
                <Link to='/'>
                   <img src={logo.publicURL} alt="Imagen Logo"/>
                </Link>

                <Navegacion />
            </div>
        </header>
    )
}

export default Header
