import React from "react";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
 // In case use
 /* useEffect(() => {
        if (isModalOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = '';
        }
    
        // Clean up when component unmounts
        return () => {
          document.body.style.overflow = '';
        };
      }, [isModalOpen]);
      
       <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <h2>Transparent Overlay</h2>
            <p>This modal overlays your existing content with transparency.</p>
        </Modal>
      
      */


    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'pointer-events-none'}`}>
        {/* Transparent overlay */}
        <div
          className={`absolute inset-0  transition-opacity duration-300 ${
            isOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={onClose} // Optional: close modal by clicking outside
        />
  
        {/* Modal content */}
        <div
          className={`relative bg-inv text-tm p-8 rounded-2xl max-w-sm w-full shadow-xl transform transition-all duration-300 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        >
          {children}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>
      </div>
    );
  }