import React, { useContext, useState } from 'react';
import { Button, Input } from 'reactstrap';
import UserContext from '../Hooks/UserContext';
import './Profile.css';
import JoblyAPI from '../JoblyAPI';

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    username: user.username,
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    let username = formData.username;
    let updatedUser;
    try {
      updatedUser = await JoblyAPI.saveProfile(username, profileData);
    } catch (errors) {
      console.log(errors);
      return;
    }
    setUser(updatedUser);
  }

  if (!user) return <h1>Loading...</h1>;

  return (
    <div className="ProfileForm">
      <h1 className="text-center">Making some changes?</h1>
      <form onSubmit={handleSubmit}>
        <Input
          required
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          required
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Input
          required
          type="text"
          name="firstName"
          placeholder="first name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          required
          type="text"
          name="lastName"
          placeholder="last name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Input
          required
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="text-center">
          <Button className="btn" color="success">
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
