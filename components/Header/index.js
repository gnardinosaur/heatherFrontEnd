import React, { useState } from 'react';
import styles from './styles.scss';
import { Search } from 'react-feather'; //icons
import SearchBar from '../SearchBar';
import SignInModal from '../SignInModal';
import Drawer from '../Drawer';
import Hamburger from '../Hamburger';

function Header() {
  const [modals, setModals] = useState({
    signIn: false,
    searchBar: false,
    drawer: false
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
        <Hamburger id='drawer' onClick={toggleModals}/>
        <h1>recipes.</h1>
        <div className={styles.headerRight}>
          <h4 id='signIn' onClick={toggleModals}>SIGN IN</h4>
          <Search id='searchBar' onClick={toggleModals} /> 
        </div>
      </div> 
      <div>
        <Drawer show={modals.drawer} />
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