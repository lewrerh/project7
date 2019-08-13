import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  pageLink = e => {
      this.props.onClick(e.target.innerText);
      this.props.istrue(true);
//Created Nav component & below removed href with links to navigate to each link
  return (

      <nav className="main-nav">  
        <ul>
          <li><NavLink to='/lilies'>Lilies</NavLink></li>
          <li><NavLink to='/lakes'>lakes</NavLink></li>
          <li><NavLink to='/balloons'>balloons</NavLink></li>
        </ul>
      </nav>
  );
}
