import React from 'react';

function LanguageToggle({ lan, setLan }) {
  const isEnglish = lan === 'en';

  return (
    <div className="inline-flex bg-gray-800 p-1  rounded-full shadow-inner relative transition-colors duration-300 mr-10">
      <div
        className={` absolute top-1 left-1  w-1/2 h-[calc(100%-0.5rem)] rounded-full bg-white transition-all duration-300 
        ${isEnglish ? 'translate-x-0' : 'translate-x-9/10'}`}
      />

      <button
        onClick={() => setLan('en')}
        className={`relative z-10 w-16 text-sm px-3 py-1 rounded-full transition-colors duration-300 
          ${isEnglish ? 'text-black font-bold' : 'text-white'}`}
      >
        ENG
      </button>

      <button
        onClick={() => setLan('es')}
        className={`relative z-10 w-16 text-sm px-3 py-1 rounded-full transition-colors duration-300 
          ${!isEnglish ? 'text-black font-bold' : 'text-white'}`}
      >
        ESP
      </button>
    </div>
  );
}

export default LanguageToggle;