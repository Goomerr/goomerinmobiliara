import React, {useState, useEffect} from 'react';
import { css } from '@emotion/react';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import {clase_propiedades} from '../css/listadoPropiedades.module.css';
import useFiltro from '../hooks/useFiltro';


const ListadioPropiedades = () => {

    const resultado = usePropiedades();
    const [propiedades] = useState(resultado );
    const [filtradas, guardarFiltradas] = useState([])
    //console.log(propiedades);
    
    //Filtrado de las propiedades
    const { categoria, FiltroUI} = useFiltro();
  //  console.log(categoria)

    useEffect(() => {
        if(categoria){
        const filtro = propiedades.filter(propiedad => propiedad.categoria.nombre === categoria);
        guardarFiltradas(filtro);
        }else{
            guardarFiltradas(propiedades);
        }
    }, [categoria, propiedades])
    return (
        <>
     <h2 css={css`
     margin-top: 5rem;
     `}>Nuestras Propiedades</h2>

     {FiltroUI()}

     <ul className={clase_propiedades}>
        {filtradas.map( propiedad => (
            <PropiedadPreview
            key={propiedad.id}
            propiedad= {propiedad}
            />
        ))}
     </ul>
     </>
    )
}

export default ListadioPropiedades
