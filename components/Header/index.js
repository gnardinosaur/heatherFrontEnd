import React, { useState } from 'react';
import styles from './styles.scss';
import { Search } from 'react-feather'; //icons
import Hamburger from '../Hamburger';
import SearchBar from '../SearchBar';
import SignInModal from '../SignInModal';
import Drawer from '../Drawer';

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
        <Hamburger toggleModals={toggleModals} showX={modals.drawer} /> 
        <h1>STAY COOKIN'</h1>
        <div className={styles.headerRight}>
          <h3 id='signIn' onClick={toggleModals}>SIGN IN</h3>
          <Search id='searchBar' onClick={toggleModals} /> 
        </div>
      </div> 
      <div>
        <Drawer show={modals.drawer} toggleModals={toggleModals}/>
      </div>
      <div>
        <SearchBar show={modals.searchBar} />
      </div>
      <div>
        <SignInModal show={modals.signIn} toggleModals={toggleModals} />
      </div>
    </div>
  )
};

export default Header;