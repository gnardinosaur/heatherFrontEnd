import React from 'react';
import styles from './styles.scss';
import { Search } from 'react-feather';

function Header(props) {

  return (
    <div className='header'>
      <div>navHam.</div>
      <h2>recipes.</h2>
      <div className='header-right'>
        <h4>SIGN IN</h4>
        {/* how style search icon --> https://github.com/feathericons/react-feather */}
        <Search onClick={props.handleAddSearch} /> 
      </div>
    </div> 
  )
};

export default Header;