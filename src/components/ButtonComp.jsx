import React from "react";
import { useState } from "react";

function ButttonComp({ event, title, icon }) {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleClick = () => {
      setIsClicked(true);
      if (event) event();
      // reset the animation class after 150ms
      setTimeout(() => {
        setIsClicked(false);
      }, 150);
    };
  
    return (
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 bg-blue-600 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-2xl shadow-md transition-transform duration-150 ${
          isClicked ? "scale-85" : "scale-100"
        }`}
      >
        <i className={`${icon} text-white text-lg`}></i>
        {title}
      </button>
    );
  }
  
  export default ButttonComp;
