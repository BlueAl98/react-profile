import React from "react";


function ItemExperience({imageUrl, info, date = null, text = null }) {

    
    return (  

    <div className="flex flex-col items-center space-y-6 bg-cx rounded-2xl drop-shadow-lg w-full p-4 transform transition-transform duration-300 hover:scale-105">
     <div className="flex max-h-40 min-h-30">
            <img src={imageUrl}  />
            </div>
           
            {date != null && (
             <h4 className="flex w-full justify-end text-sm font-bold">{date}</h4>
              )}

           {text != null && (
             <h4 className="flex w-full pt-4 justify-end text-md font-bold">{text}</h4>
              )}
          
           <div className="text-justify leading-7 ">

           <ul className="list-disc pl-6 space-y-3">
                 {info.map((item, index) => (
              <li key={index}>{item}</li>
                ))}
                 </ul>
           </div>

        </div>
    );
}

export default ItemExperience;