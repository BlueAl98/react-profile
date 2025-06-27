import React from "react";
import { useState } from "react";

function BarExperience({selected, setSelected, tabs}) {


  return (
    <div className="flex w-full space-x-6 text-md text-tm p-5">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className={`relative pb-2 transition-all duration-200 ${
            selected === tab ? "font-semibold text-blue-500" : "text-gray-400"
          }`}
        >
          {tab}
          {selected === tab && (
            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-600 rounded-full"></span>
          )}
        </button>
      ))}
    </div>
  );
}

export default BarExperience;