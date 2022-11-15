import React from 'react';

const Box = ({ id, todo, removeTodo }) => {
  const remove = () => removeTodo(id);
  return (
    <div className="Todo" id={id} key={id}>
      -{todo}
      <button onClick={remove}>remove it.</button>
    </div>
  );
};

export default Box;
