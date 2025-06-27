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


    const renderContent = () => {
        if (selected === "Empresas") {
          return (
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
              <ItemExperience imageUrl={"https://www.informaticaelectoral.com/images/logo_informatica.png"} />
              <ItemExperience imageUrl={"https://www.ie-soluciones.com/images/logo_iesoluciones.png"} />
              <ItemExperience imageUrl={lgShitsu} />
            </div>
          );
        } else if (selected === "Projects") {
          return (
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6">
              <ItemExperience imageUrl={"https://cdn-icons-png.flaticon.com/512/5968/5968672.png"} />
              <ItemExperience imageUrl={"https://cdn-icons-png.flaticon.com/512/174/174857.png"} />
              <ItemExperience imageUrl={"https://cdn-icons-png.flaticon.com/512/732/732212.png"} />
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
            Check out some of my design projects, meticulously crafted with love and dedication, 
            each one reflecting the passion and soul I poured into every detail.
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

