import React from "react";
import { Link } from "react-router-dom";
import StyledNav from "./Nav.styled";

const Nav = ({ logged, setLogged }) => {
  const logout = () => {
    window.localStorage.removeItem("loggedUser");
    setLogged(false);
  };

  return (
    <header>
      <StyledNav>
        <ul className='nav-links'>
          <li>
            <Link to='/folders'>Folders</Link>
          </li>
        </ul>
        {logged && (
          <button
            type='button'
            onClick={() => {
              logout();
            }}
          >
            Log out
          </button>
        )}
      </StyledNav>
    </header>
  );
};

export default Nav;
