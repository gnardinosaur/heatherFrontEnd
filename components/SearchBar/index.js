import React from 'react';
import styles from './styles.scss';
import classnames from 'classnames';

function SearchBar(props) {

  return (
    <div className={classnames(
      styles.searchBar,
      props.show && styles.show
    )}>
    Copy Bon Appetite Search Bar.
    </div>
  )
};

export default SearchBar;