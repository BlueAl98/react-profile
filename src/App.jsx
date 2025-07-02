import React from "react";
import { useState } from "react";
import CardProfile from "./components/CardProfile";
import TopBar from "./components/TopBar";
import CardDescription from "./components/CardDescription";
import CardSkills from "./components/CardSkills";
import CardExperince from "./components/CardExperience";
import data from "./data/data.json"

function App() {
  const [theme, setTheme] = useState('dark')
  const [lan, setLan] = useState('es')

  const lnDta = data[lan]; 

  return (
    <div className={`${theme} min-h-screen bg-tm text-tm flex 
    flex-col  transition-colors duration-300 `}>

        <TopBar 
        tem = {theme} 
        setTem = {() => setTheme(theme === 'light' ? 'dark' : 'light')}
        lan = {lan}
        setLan = {() => setLan(lan === 'en' ? 'es' : 'en')}
        /> 

       <div className="flex flex-col  lg:flex-row lg:justify-start p-6 space-y-5  ">
        <CardProfile profile={lnDta.profile}/>
        
        <div className="flex flex-1 flex-col  m-1 space-y-5 max-w-full ">
            <CardDescription desc={lnDta.description} />      
            <CardSkills skills={data.general.skills} title={lnDta.skillTitle}/>
        </div>
      
        </div>
       
        <div className="p-4 ">
           <CardExperince exp={lnDta.experience}/>
        </div>
       
         



    </div>
  )
}

export default App;