import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

import './LoginForm.css';

const LoginForm = ({ login }) => {
  const initialState = {
    username: '',
    password: '',
  };
  let navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setFormData(initialState);
    let result = await login(formData);
    console.log(result);
    navigate('/');
  }

  return (
    <div className="LoginForm">
      <h1 className="text-center">Login here!</h1>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          required
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <div className="text-center">
          <Button color="success" className="btn">
            Login!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
