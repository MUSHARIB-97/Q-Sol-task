import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: any;
}

const CustomModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg shadow-lg p-6 w-96 z-10">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
