import React, { useState } from 'react';
import styles from './styles.scss';
import { Search } from 'react-feather';
import SearchBar from '../SearchBar';


function Header() {

  const [addSearchBar, setAddSearchBar] = useState(false)

  function handleAddSearch() {
    setAddSearchBar(!addSearchBar)
  };

  return (
    <div>
      <div className='header'>
        <div>navHam.</div>
        <h2>recipes.</h2>
        <div className='header-right'>
          <h4>SIGN IN</h4>
          {/* how style search icon --> https://github.com/feathericons/react-feather */}
          <Search onClick={handleAddSearch} /> 
        </div>
      </div> 
      <div>
        {addSearchBar ? <SearchBar /> : <div></div>}
      </div>
    </div>
  )
};

export default Header;