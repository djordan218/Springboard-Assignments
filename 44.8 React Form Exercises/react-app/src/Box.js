import React from 'react';
import './Box.css';

const Box = ({ id, width = 100, height = 100, backgroundColor, removeBox }) => {
  const remove = () => removeBox(id);
  return (
    <div
      className="Box"
      id={id}
      key={id}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: backgroundColor,
      }}
    >
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box;
