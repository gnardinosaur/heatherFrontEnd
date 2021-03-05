import React, { useState } from 'react';
import styles from './styles.scss';
import { Search } from 'react-feather'; //icons
import SearchBar from '../SearchBar';
import SignInModal from '../SignInModal';

function Header() {
  const [modals, setModals] = useState({
    signIn: false,
    searchBar: false
  });

  function toggleModals(e) {
    let newM = {...modals}
    for (let k in newM) {
      k === e.target.id ? newM[k] = !newM[k] : newM[k] = false;
    }
    setModals(newM)
  };

  return (
    <div>
      <div className={styles.header}>
        <div>navHam.</div>
        <h1>recipes.</h1>
        <div className={styles.headerRight}>
          <h4 id='signIn' onClick={toggleModals}>SIGN IN</h4>
          <Search id='searchBar' onClick={toggleModals} /> 
        </div>
      </div> 
      <div>
        <SearchBar show={modals.searchBar} />
      </div>
      <div>
        <SignInModal show={modals.signIn} />
      </div>
    </div>
  )
};

export default Header;