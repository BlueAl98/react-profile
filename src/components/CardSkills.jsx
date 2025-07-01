import React from "react";
import Marquee from "react-fast-marquee";

function CardSkills({skills}) {

    return ( 
             

 <div className="flex h-50 w-full  flex-col rounded-2xl ms-3 p-5 overflow-hidden">

<h1 className="text-2xl leading-relaxed mb-4 font-semibold text-tm">My Skills</h1>
       
       <div className="max-w-200">
        <Marquee gradient={false} speed={40} pauseOnHover={false} style={{ width: "100%" }}>
          {skills.map((skill, index) => (
           <div
           key={index}
           className="flex flex-col items-center justify-center w-20 h-20  text-xl text-tm mx-2"
         >
              <i className={`${skill.icon} text-4xl hover:text-blue-500`}></i>
              <span className="text-sm mt-2">{skill.name}</span>
            </div>
          ))}
        </Marquee>
        </div>
      </div>
   
            
   
     );
}

export default CardSkills;