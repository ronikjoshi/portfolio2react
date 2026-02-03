import React from "react";

const PrimaryBtn = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md font-semibold 
        flex items-center gap-2 
        border-2 border-primary 
        bg-primary text-white
        hover:bg-transparent hover:text-primary
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
