import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import './SignupForm.css';

const SignupForm = ({ signup }) => {
  const initialState = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  };
  const navigate = useNavigate();

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
    let result = await signup(formData);
    if (result.success) {
      navigate('/');
    } else {
      console.log(result.errors);
    }
  }

  return (
    <div className="SignupForm">
      <h1 className="text-center">Sign up here!</h1>
      <form className="SignupForm" onSubmit={handleSubmit}>
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
        <input
          required
          type="text"
          name="firstName"
          placeholder="first name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          name="lastName"
          placeholder="last name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="text-center">
          <Button className="btn" color="success">
            Signup!
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
