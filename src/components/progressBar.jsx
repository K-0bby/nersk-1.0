import React from 'react'
import './progressBar.css'

const progressBar = ({ value }) => {
  return (
    <div className="progressBarContainer">
      {/* Progress bar with value set dynamically */}
      <progress 
        max="100" 
        value={value} 
        className="progressBar"
      ></progress>
      {/* Display the percentage */}
      <span className="percentageText">{value}%</span>
    </div>
  );
};

export default progressBar;
