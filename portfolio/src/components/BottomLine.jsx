import React from "react";
import "./BottomLine.css";

const BottomLine = ({ size = "large" }) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className={`side-line ${size}`}></div>

      <div className={`middle-line ${size}`}>
        <div className={`inner-circle ${size}`}></div>
      </div>

      <div className={`side-line ${size}`}></div>
    </div>
  );
};

export default BottomLine;
