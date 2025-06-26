import React from "react";
import { useState } from "react";
import CardProfile from "./components/CardProfile";
import TopBar from "./components/TopBar";
import CardDescription from "./components/CardDescription";
import CardSkills from "./components/CardSkills";

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={`${theme} min-h-screen bg-tm text-tm flex 
    flex-col  transition-colors duration-300 `}>

        <TopBar tem = {theme} setTem = {() => setTheme(theme === 'light' ? 'dark' : 'light')}/> 

       <div className="flex flex-col  lg:flex-row lg:justify-start p-6 space-y-5  ">
        <CardProfile/>
        
        <div className="flex flex-1 flex-col  m-1 space-y-5 max-w-full">
            <CardDescription/>      
            <CardSkills/>
        </div>
        </div>
       
      
    </div>
  )
}

export default App;