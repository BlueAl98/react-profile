import React from "react";


function CardProfile() {
    return ( 

<div className="bg-card text-tm max-w-sm mx-auto p-9  rounded-2xl shadow-2xs text-center space-y-4">
  {/* Profile Image */}
  <div className="flex justify-center">
    <img
      src="https://avatars.githubusercontent.com/u/125913672?s=400&u=2b81ec6b0d6bbc9f18a1c730cb1d964c5f37c982&v=4"
      alt="Profile"
      className="w-50 h-50 rounded-full border-4  shadow-md object-cover"
    />
  </div>

  {/* Name */}
  <h2 className="text-3xl font-semibold">Najib Alejandro Loera Rodriguez</h2>

  {/* Description */}
  <p className="text-md text-tm opacity-80">
    Full Stack Developer & UI Designer. Passionate about clean code and beautiful interfaces.
  </p>

  {/* Social Icons */}
  <div className="flex justify-center space-x-4 pt-2">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter text-2xl hover:text-blue-400"></i>
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github text-2xl hover:text-gray-500"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin text-2xl hover:text-blue-600"></i>
    </a>
  </div>
</div>
     );
}

export default CardProfile;