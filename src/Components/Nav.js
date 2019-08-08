import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
  return (
      <nav className="main-nav">  
        <ul>
          <li><NavLink to='/lilies'>Lilies</NavLink></li>
          <li><NavLink to='/lakes'>lakes</NavLink></li>
          <li><NavLink to='/pupies'>pupiess</NavLink></li>
        </ul>
      </nav>
  );
}

export default Nav;

///*do nav links here...props if needed

// import React from 'react';
// import PropTypes from 'prop-types';

// const Nav = props => {
//   return (
//     <div>
      
//     </div>
//   );
// };

// Nav.propTypes = {
  
// };

// export default Nav;