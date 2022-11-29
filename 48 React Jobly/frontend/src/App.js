import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import NavRoutes from './NavRoutes';
import { decodeToken } from 'react-jwt';
import JoblyAPI from './JoblyAPI';
import useLocalStorage from './Hooks/useLocalStorage';
import UserContext from './Hooks/UserContext';
export const TOKEN_STORAGE_ID = 'joblyToken';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  console.debug('***USER***', user, '***TOKEN***', token);

  useEffect(
    function loadInfo() {
      async function getCurrentUser() {
        if (token) {
          try {
            JoblyAPI.token = token;
            const { username } = decodeToken(token);
            let currentUser = await JoblyAPI.getCurrentUser(username, token);
            setUser(currentUser);
          } catch {
            console.log('no token');
          }
        }
        setInfoLoaded(true);
      }
      setInfoLoaded(false);
      getCurrentUser();
    },
    [token]
  );

  function logout() {
    console.log('logging out');
    localStorage.setItem('joblyToken', null);
    setUser(null);
  }

  async function signup(data) {
    try {
      let token = await JoblyAPI.register(data);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error('signup failed', errors);
      return { success: false, errors };
    }
  }

  async function login(data) {
    try {
      let token = await JoblyAPI.login(data);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error('login failed', errors);
      return { success: false, errors };
    }
  }

  if (!infoLoaded) return <h1 className="text-center">Loading...</h1>;

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <NavBar logout={logout} />
          <NavRoutes login={login} signup={signup} />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
