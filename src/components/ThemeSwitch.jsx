import React from 'react'

function ThemeSwitch({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-14 h-8 bg-inv rounded-full p-1 flex items-center transition-all duration-300 shadow-inner"
      aria-label="Toggle Theme"
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-blue-600 mx-auto mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-yellow-500 mx-auto mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-11.34l-.7.7M4.34 19.66l-.7.7m16.36 0l-.7-.7M4.34 4.34l-.7-.7M21 12h1M2 12H1m10-9a9 9 0 100 18 9 9 0 000-18z" />
          </svg>
        )}
      </div>
    </button>
  )
}

export default ThemeSwitch
