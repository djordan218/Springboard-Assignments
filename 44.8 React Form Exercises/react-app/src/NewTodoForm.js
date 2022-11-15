import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewTodoForm = ({ addTodo }) => {
  const initialState = {
    todo: '',
  };

  const [formData, setFormData] = useState({
    todo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData, id: uuidv4() });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">What you gotta do?</label>
      <input
        id="todo"
        type="text"
        name="todo"
        placeholder="Put your todo here."
        value={formData.todo}
        onChange={handleChange}
      />
      <button>add it.</button>
    </form>
  );
};

export default NewTodoForm;
