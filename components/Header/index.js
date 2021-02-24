import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Search } from 'react-feather'; //icons
import SearchBar from '../SearchBar';
import SignInModal from '../SignInModal';

function Header() {
  const [openSignInModal, setOpenSignInModal] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);

  function handleOpenSignInModal() {
    setOpenSignInModal(!openSignInModal)
  };
  
  function handleOpenSearch() {
    setOpenSearchBar(!openSearchBar)
  };

  return (
    <div>
      <div className={styles.header}>
        <div>navHam.</div>
        <h1>recipes.</h1>
        <div className={styles.headerRight}>
          <h4 onClick={handleOpenSignInModal}>SIGN IN</h4>
          <Search onClick={handleOpenSearch} /> 
        </div>
      </div> 
      <div>
        <SearchBar show={openSearchBar} />
      </div>
      <div>
        <SignInModal show={openSignInModal} />
      </div>
    </div>
  )
};

export default Header;