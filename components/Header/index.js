import React, { useState } from 'react';
import styles from './styles.scss';
import { Search } from 'react-feather'; //icons
import SearchBar from '../SearchBar';

function Header() {

  const [addSearchBar, setAddSearchBar] = useState(false)

  function handleAddSearch() {
    setAddSearchBar(!addSearchBar)
  };

  return (
    <div className={styles.conatiner}>
      <div className={styles.header}>
        <div>navHam.</div>
        <h1>recipes.</h1>
        <div className={styles.headerRight}>
          <h4>SIGN IN</h4>
          <Search onClick={handleAddSearch} /> 
        </div>
      </div> 
      <div>
        <SearchBar show={addSearchBar} />
      </div>
    </div>
  )
};

export default Header;