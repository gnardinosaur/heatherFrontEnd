import React from 'react';
import styles from './styles.scss';
import { Search } from 'react-feather';


function Header() {
  return (
    <div className="header">
      <div>hamburgerComponent.</div>
      <h2>recipes.</h2>
      {/* position these two within their own div */}
      <div>
        <h4>SIGN IN</h4>
        {/* style search icon --> https://github.com/feathericons/react-feather */}
        <Search /> 
      </div>
    </div>
  )
};

export default Header;