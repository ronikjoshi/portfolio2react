import React from "react";

const SecondaryBtn = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-md font-semibold 
        flex items-center gap-2 
        border-2 border-primary 
        bg-transparent text-primary
        hover:bg-primary hover:text-white
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
