import React from "react";
import ButttonComp from "./ButtonComp";

function CardDescription() {
    return ( 
        <div className="  h-fit w-full border-2 rounded-2xl sm:ms-3 p-5 space-y-5">
             <h2 className="text-gray-400">Hello There!</h2>
           
             <h1 className="text-3xl leading-relaxed">I’m passionate about software development and building elegant, functional user experiences.
             I have experience in iOS and Android with SwiftUI and Jetpack Compose, as well as React for web and Spring Boot for backend systems. </h1>
            

             <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
             <span className="text-medium text-green-600 font-medium">Available for Freelancing</span>
             </div>

              <ButttonComp icon= "fas fa-download" title={"Download CV"} event={() => console.log("here", "other")}/>
          
        </div>

     );
}

export default CardDescription;