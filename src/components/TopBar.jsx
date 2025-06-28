import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import LanguageToggle from "./LanguageToggle";


function TopBar({ tem, setTem, lan, setLan}) {
    return ( 
        <div className= "flex h-13  items-center justify-end me-10 mt-3">
        
         <LanguageToggle lan={lan} setLan={setLan}/>
          
         <h1 className="me-4">{tem === "dark" ? "Dark mode" : "Ligth mode" }</h1>
         <ThemeSwitch
          theme={tem}
          onToggle={setTem}
        />
        </div>
     );
}

export default TopBar;