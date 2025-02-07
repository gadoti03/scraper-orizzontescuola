import React, { useState } from 'react';
import './FourDropComponent.css';

const FourDropComponent = ({ children }) => {
  const [openIndices, setOpenIndices] = useState([0]); // Default to the first section being open

  const handleToggle = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="four-drop-component">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="drop-item">
          <div 
            className={`drop-header ${openIndices.includes(index) ? 'active' : ''}`} 
            onClick={() => handleToggle(index)}
          >
            {child.props.title}
            <span className="arrow">{openIndices.includes(index) ? '▼' : '▶'}</span>
          </div>
          {openIndices.includes(index) && (
            <div className="drop-content">
              {child.props.children}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FourDropComponent;
