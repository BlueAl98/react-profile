import React from "react";

function ItemCertificate({ previewImage, downloadUrl, title }) {
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
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        View / Download
      </a>
    </div>
  );
}

export default ItemCertificate;