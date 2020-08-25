//import React, { useState, useEffect } from 'react';
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import {getGifs} from '../helpers/getGifs'

export const GifGrid = ({category}) => {

   // const [images, setImages] = useState([]);
   

    //se dispara una unica vez cuando se renderiza el componente, asi si hay cambios en el componente no ejecuta constantemente la funcion con cada cambio
    //** */ useEffect( () =>{ funcion_a_ejecutar },[lista de dependencias]), si cambia la dependecia (category) se ejecuta nuevamente la funcion 
//     useEffect( () =>{
//         getGifs(category)
//             .then(setImages);
//    //         .then(imgs => setImages(imgs));
//     },[ category ]) 

   


    //** */ Crear custom Hook. Permitira que cuando el comp cargue, realizar la peticion fetch e indique cuando esta cargando y cuando termino
    //const state = useFetchGifs();
    //console.log(state);
    const {data:images, loading} = useFetchGifs(category);
    console.log(images, loading);

    return (
      <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        {loading && <p className="animate__animated animate__flash">Loading...</p>}

        <div className="card-grid">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} /> //...img envia cada propiedad de img en un objeto nuevo al componente GifGridItem
          ))}
        </div>

        
        
      </>
    );
}
