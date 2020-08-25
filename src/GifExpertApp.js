import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


//funcional component... Componente en base de funciones 
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Breaking Bad"]);

  // const handleAdd = ()=>{
  //     //setCategories([...categories, "HunterXHunter"]);
  //     setCategories( (cate) => [...cate, "HunterXHunter"] );
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* se pasa la funcion setCategories al componente para que sea ejecutda desde el */}
        <AddCategory setCategories={setCategories}/>
      <hr />

      <ol>
        {categories.map((category) =>  (
            <GifGrid key= {category} category={category} />) 
        )}
      </ol>
    </>
  );

};
