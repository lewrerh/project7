import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {  //Created Nav component & below removed href with links to navigate to each link
  return (
      <nav className="main-nav">  
        <ul>
          <li><NavLink to='/lilies'>Lilies</NavLink></li>
          <li><NavLink to='/lakes'>lakes</NavLink></li>
          <li><NavLink to='/balloons'>ballons</NavLink></li>
        </ul>
      </nav>
  );
}

export default Nav;
