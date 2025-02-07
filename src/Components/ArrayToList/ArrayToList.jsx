import React from 'react';

const ArrayToList = ({ array }) => {
  return (
    <div>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayToList;
