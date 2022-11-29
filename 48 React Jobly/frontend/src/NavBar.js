import React, { useContext } from 'react';
import UserContext from './Hooks/UserContext';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

function NavBar({ logout }) {
  const { user } = useContext(UserContext);

  function loggedInNavBar() {
    return (
      <>
        <NavItem>
          <NavLink to="/companies">Companies</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/jobs">Jobs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">{user.username}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/" onClick={logout}>
            Logout
          </NavLink>
        </NavItem>
      </>
    );
  }

  function loggedOutNavBar() {
    return (
      <>
        <NavItem>
          <NavLink to="/signup">Signup</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">Login</NavLink>
        </NavItem>
      </>
    );
  }
  return (
    <div>
      <Navbar expand="md">
        <NavLink end to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <Nav className="ml-auto" navbar>
          {user ? loggedInNavBar() : loggedOutNavBar()}
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
