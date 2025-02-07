import React, { useState } from 'react';
import './DropComponent.css';

const DropComponent = ({ children }) => {
  // Imposta l'indice della prima sezione come aperta per default
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    console.log(openIndex)
  };

  return (
    <div className="drop-component">
      {React.Children.map(children, (child, index) => (
        <div key={index} className="drop2-item">
          <div
            className={`drop2-header ${openIndex === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {child.props.title}
            <span className="arrow2">{openIndex === index ? '▼' : '▶'}</span>
          </div>
          {openIndex === index && (
            <div className="drop2-content">
              {child.props.children}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropComponent;
