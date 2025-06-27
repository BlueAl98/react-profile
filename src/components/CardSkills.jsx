import React from "react";
import Marquee from "react-fast-marquee";

function CardSkills() {

    const skills = [
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "Java", icon: "devicon-java-plain" },
        { name: "Kotlin", icon: "devicon-kotlin-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "Spring boot", icon: "devicon-spring-plain" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "Swift", icon: "devicon-swift-plain" },
      ]

    return ( 
             

<div className="flex h-50 w-full  sm:w-150  flex-col rounded-2xl ms-3 p-5 overflow-hidden">

<h1 className="text-2xl leading-relaxed mb-4 font-semibold text-tm">My Skills</h1>
       
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
   
            
   
     );
}

export default CardSkills;