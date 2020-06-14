import './Navbar.less';
import React from 'react';
import { NavLink } from 'react-router-dom';
  
const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                  <NavLink to='/login' activeClassName='active'>login</NavLink>
                </li>
                <li>
                  <NavLink to='/recipes' activeClassName='active'>recipes</NavLink>
                </li>
            </ul>
        </nav>
      );
}

export default Navbar;