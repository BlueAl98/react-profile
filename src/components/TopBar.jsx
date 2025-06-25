import React from "react";
import ThemeSwitch from "./ThemeSwitch";

function TopBar({ tem, setTem}) {
    return ( 
        <div className= "flex h-13  items-center justify-end me-10">
        
         <h1 className="me-4">{tem === "dark" ? "Dark mode" : "Ligth mode" }</h1>
         <ThemeSwitch
          theme={tem}
          onToggle={setTem}
        />
        </div>
     );
}

export default TopBar;