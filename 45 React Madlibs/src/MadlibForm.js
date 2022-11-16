import React, { useState } from 'react';
import './MadlibForm.css';

const MadlibForm = ({ getStory }) => {
  const INITIAL_STATE = { noun: '', noun2: '', adjective: '', color: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getStory({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form className="MadlibForm" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        name="noun"
        placeholder="Noun"
        value={formData.noun}
        onChange={handleChange}
      />

      <input
        required
        type="text"
        name="noun2"
        placeholder="Second Noun"
        value={formData.noun2}
        onChange={handleChange}
      />
      <input
        required
        type="text"
        name="adjective"
        placeholder="Adjective"
        value={formData.adjective}
        onChange={handleChange}
      />

      <input
        required
        type="text"
        name="color"
        placeholder="Color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Get Story!</button>
    </form>
  );
};

export default MadlibForm;
