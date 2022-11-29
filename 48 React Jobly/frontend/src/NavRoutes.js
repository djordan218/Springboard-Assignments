import React from 'react';
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import FourOhFour from './FourOhFour';
import Companies from './Companies/Companies';
import Jobs from './Jobs/Jobs';
import Job from './Jobs/Job';
import SignupForm from './User/SignupForm';
import LoginForm from './User/LoginForm';
import Profile from './User/Profile';

function NavRoutes({ login, signup }) {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<FourOhFour />} />
        </Routes>
      </main>
    </div>
  );
}

export default NavRoutes;
