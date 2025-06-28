import React from "react";
import ButttonComp from "./ButtonComp";

function CardDescription({desc}) {
    return ( 
        <div className="bg-card h-fit w-full  rounded-2xl sm:ms-3 p-5 space-y-5">
             <h2 className="text-gray-400">{desc.greeting}</h2>
           
             <h1 className="text-3xl leading-relaxed"> {desc.me}</h1>
            
             <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-medium text-green-600 font-medium">{desc.status}</span>
             </div>

              <ButttonComp icon= "fas fa-download" title={desc.btnText} event={() => console.log("here", "other")}/>
          
        </div>

     );
}

export default CardDescription;