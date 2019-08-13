import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
  ourLink = e => {
      this.props.onClick(e.target.innerText);
      this.props.istrue(true);
  }
//Created Nav component & below removed href-a tags with links to navigate to each link
  render() {
  return (

      <nav className="main-nav">  
        <ul>
          <li><NavLink to='/performSearch/lilies' onClick={this.ourLink}>Lilies</NavLink></li>
          <li><NavLink to='/performSearch/lakes' onClick={this.ourLink}>Lakes</NavLink></li>
          <li><NavLink to='/performSearch/balloons' onClick={this.ourLink}>Balloons</NavLink></li>
        </ul>
      </nav>
     );
   }
 }

