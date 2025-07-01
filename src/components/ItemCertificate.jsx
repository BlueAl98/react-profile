import React from "react";

function ItemCertificate({ previewImage = null, downloadUrl, title, btnText }) {
  return (
    <div className="flex flex-col items-center space-y-4 bg-tm rounded-2xl drop-shadow-lg w-full p-4 transform transition-transform duration-300 hover:scale-105">
      
      <div className="w-full max-h-48 overflow-hidden rounded-md">
        <img
          src={previewImage}
          alt={title}
          className="w-full h-auto object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold text-center">{title}</h3>

      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
      >
        <div className="flex p-1 pl-6 pe-6 items-center">
        <i className= {`fas fa-eye text-white text-lg`}  ></i>
          <h1 className="pl-6">{btnText}</h1>
        </div>
      </a>
    </div>
  );
}

export default ItemCertificate;