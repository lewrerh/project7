import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
      <nav className="main-nav">  
        <ul>
          <li><NavLink to='/lilies'>Lilies</NavLink></li>
          <li><NavLink to='/lakes'>lakes</NavLink></li>
          <li><NavLink to='/ballons'>ballons</NavLink></li>
        </ul>
      </nav>
  );
}

export default Nav;
