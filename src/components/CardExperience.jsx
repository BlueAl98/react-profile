import React from "react";
import ItemExperience from "./ItemExperience";

function CardExperince() {
    return ( 
        <div className="flex bg-card rounded-2xl p-3 flex-col">
            <div className="flex flex-col items-center space-y-5">
            <h1 className="text-3xl">Experience</h1>
            <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-md text-gray-400 text-center leading-relaxed">
            Check out some of my design projects, meticulously crafted with love and dedication, 
            each one reflecting the passion and soul I poured into every detail.
             </h2>
          </div>
       </div>
<br />
         <div className=" grid w-full  grid-cols-1 sm:grid-cols-3 place-items-center gap-6">
            <ItemExperience imageUrl={"https://www.informaticaelectoral.com/images/logo_informatica.png"}/>
            <ItemExperience imageUrl={"https://www.informaticaelectoral.com/images/logo_informatica.png"}/>
            <ItemExperience imageUrl={"https://www.informaticaelectoral.com/images/logo_informatica.png"}/>

         </div>

        </div>
     );
}

export default CardExperince;