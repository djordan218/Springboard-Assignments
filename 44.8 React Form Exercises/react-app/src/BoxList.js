import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuidv4 } from 'uuid';
import './BoxList.css';

function BoxList() {
  const INITIAL_STATE = [
    { id: uuidv4(), width: '100', height: '100', backgroundColor: 'blue' },
    { id: uuidv4(), width: '150', height: '150', backgroundColor: 'red' },
    { id: uuidv4(), width: '200', height: '200', backgroundColor: 'yellow' },
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, newBox]);
  };

  const removeBox = (id) => {
    console.log(boxes);
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="BoxListBody">
      <NewBoxForm addBox={addBox} />
      <h1>BOXES.</h1>
      <div className="BoxList">
        {boxes.map(({ id, width, height, backgroundColor }) => (
          <Box
            id={id}
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            key={id}
            removeBox={removeBox}
          />
        ))}
      </div>
    </div>
  );
}

export default BoxList;
