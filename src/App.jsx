import React from "react";
import { useState } from "react";
import CardProfile from "./components/CardProfile";
import TopBar from "./components/TopBar";


function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={`${theme} min-h-screen bg-tm text-tm flex flex-col  transition-colors duration-300`}>

        <TopBar tem = {theme} setTem = {() => setTheme(theme === 'light' ? 'dark' : 'light')}/> 

       <div className="flex w-full justify-center h-150 mt-9 lg:w-1/4 lg:m-9 lg:justify-baseline">
       
        <CardProfile/>
         

        </div>
       
    </div>
  )
}

export default App;