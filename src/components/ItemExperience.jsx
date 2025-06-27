import React from "react";


function ItemExperience({imageUrl}) {

    const items = [
       " Desarrolle una aplicación para el registro de residencias universitarias, facilitando la conexión entre estudiantes y empresas"
        ,
       " Implementé un sistema de inicio de sesión, permitiendo a los usuarios crear cuentas seguras y personalizadas.",
        
        "Los usuarios podían subir su currículum, el cual era enviado automáticamente a las empresas registradas para su revisión."];

     
    return (  

        <div className="flex flex-col space-y-6 bg-card rounded-2xl border-amber-500 border-1 w-full p-4 ">
            <div >
            <img src={imageUrl}  />
            </div>

           <div className="text-justify leading-7 ">

           <ul className="list-disc pl-6 space-y-3">
                 {items.map((item, index) => (
              <li key={index}>{item}</li>
                ))}
                 </ul>
           </div>

        </div>
    );
}

export default ItemExperience;