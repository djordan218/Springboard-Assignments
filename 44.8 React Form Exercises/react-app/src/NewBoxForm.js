import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    width: '',
    height: '',
    backgroundColor: '',
  };

  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: '',
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
    addBox({ ...formData, id: uuidv4() });
    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width of Box</label>
      <input
        id="width"
        type="number"
        name="width"
        placeholder="Width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height for Box</label>
      <input
        id="height"
        type="number"
        name="height"
        placeholder="Height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Background Color</label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        placeholder="Background Color"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <button>Add a Box!</button>
    </form>
  );
};

export default NewBoxForm;
