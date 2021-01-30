import React from 'react';
import styles from './styles.scss';

function SearchBar(props) {

  return (
    <div className={props.show ? styles.show : styles.hide}>
      Copy Bon Appetite Search Bar.
    </div>
  )
};

export default SearchBar;