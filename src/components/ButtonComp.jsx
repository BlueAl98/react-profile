import React from "react";

function ButttonComp({event, title, icon}) {
    return ( 
        <button  onClick={event}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-400 text-white font-bold	 px-8 py-4 rounded-2xl shadow-md transition duration-300">
               
        <i className= {`${icon} text-white text-lg`}  ></i>

         {title}
</button>
    );
}

export default ButttonComp
