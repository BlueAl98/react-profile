import React from "react";
import ItemExperience from "./ItemExperience";
import { useState, useEffect } from "react";
import Modal from "../modals/Modal"
import lgShitsu from '../assets/lgShitsu.png';
import BarExperience from "./BarExperience";

function CardExperince() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [selected, setSelected] = useState("Empresas");
    const tabs = ["Empresas", "Projects"];

   /* useEffect(() => {
        if (isModalOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
    
        // Clean up when component unmounts
        return () => {
          document.body.style.overflow = '';
        };
      }, [isModalOpen]);
      
       <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <h2>Transparent Overlay</h2>
            <p>This modal overlays your existing content with transparency.</p>
        </Modal>
      
      */

    return ( 
        <div className="flex bg-card  rounded-2xl p-3 flex-col">

            <div className="flex flex-col items-center space-y-5">
            <h1 className="text-3xl">Experience</h1>
            <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-md text-gray-400 text-center leading-relaxed">
            Check out some of my design projects, meticulously crafted with love and dedication, 
            each one reflecting the passion and soul I poured into every detail.
             </h2>
          </div>
       </div>

       
       <BarExperience tabs={tabs} selected={selected} setSelected={setSelected}/>

    <br />
         <div className=" grid w-full  grid-cols-1 md:grid-cols-3   gap-6">
            <ItemExperience imageUrl={"https://www.informaticaelectoral.com/images/logo_informatica.png"}/>
            <ItemExperience imageUrl={"https://www.ie-soluciones.com/images/logo_iesoluciones.png"}/>
            <ItemExperience imageUrl={lgShitsu}/>
         </div>

        </div>
     );
}

export default CardExperince;