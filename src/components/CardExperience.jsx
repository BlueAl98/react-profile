import React from "react";
import ItemExperience from "./ItemExperience";
import { useState, useEffect } from "react";
import Modal from "../modals/Modal"
import BarExperience from "./BarExperience";
import ItemCertificate from "./ItemCertificate";

function CardExperince({exp}) {

    const [isModalOpen, setModalOpen] = useState(false);
    const tabs = exp.tabsTitle;
    const [selected, setSelected] = useState(tabs[0]);

         useEffect(() => {
         setSelected(tabs[0]);
        }, [tabs]);
   

    const renderContent = () => {
        if (selected === tabs[0]) {
          return (
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
              {
                exp.cardsExperience.companies.map( (com, index) => (
                    <ItemExperience
                     key={index} 
                     imageUrl={com.urlImage} 
                     info = {com.info}
                     date={com.date}  />
                ) )
              }
        
            </div>
          );
        } else if (selected === tabs[1]) {
          return (
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
              {
               exp.cardsExperience.projects.map( (pro, index) => (
                    <ItemExperience key={index} 
                    imageUrl={pro.urlImage}
                    info = {pro.info}
                    text={pro.text}
                     />
                ) )
        }
            </div>
          );
        }else{
          return (
         <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
          {
           exp.cardsExperience.certificates.map( (cert, index) => (
              <ItemCertificate
              key={index}
              downloadUrl={cert.urlPdf}
              previewImage = {cert.imageUrl}
              title={cert.title}
              btnText = {exp.btnText} 
              />
            ) )
    }
        </div>
          );
        }
      };

     

    return ( 
        <div className="flex bg-card  rounded-2xl p-3 flex-col">

            <div className="flex flex-col items-center space-y-5">
            <h1 className="text-3xl">Experience</h1>
            <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-md text-gray-400 text-center leading-relaxed">
            {exp.info}
             </h2>
          </div>
       </div>

       
       <BarExperience tabs={tabs} selected={selected} setSelected={setSelected}/>

    <br />
    
    <div>
        {renderContent()}
      </div>

    </div>
     );
}

export default CardExperince;

