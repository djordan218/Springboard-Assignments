import React, { useState } from 'react';
import SnackOrBoozeApi from './Api';
import './AddItemForm.css';

const AddItemForm = () => {
  const initialState = {
    type: '',
    name: '',
    description: '',
    recipe: '',
    serve: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SnackOrBoozeApi.addItem(formData);
    setFormData(initialState);
  };

  return (
    <div className="AddItemForm">
      <form className="AddItemForm" onSubmit={handleSubmit}>
        <select
          type="text"
          name="type"
          id="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="">Choose one:</option>
          <option value="snacks">Snack</option>
          <option value="drinks">Drink</option>
        </select>
        <input
          required
          id="name"
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          required
          id="description"
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          required
          id="recipe"
          type="text"
          name="recipe"
          placeholder="What's the recipe?"
          value={formData.recipe}
          onChange={handleChange}
        />
        <input
          required
          id="serve"
          type="text"
          name="serve"
          placeholder="How do you serve it?"
          value={formData.serve}
          onChange={handleChange}
        />
        <button>Add it!</button>
      </form>
    </div>
  );
};

export default AddItemForm;
