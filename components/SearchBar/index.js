import React from 'react';
import styles from './styles.scss';
import classnames from 'classnames';

function SearchBar(props) {

  return (
    <div className={classnames(
      styles.searchBar,
      props.show && styles.show
    )}>
      <div className={styles.inputWrap}>
        <form> 
          <input type='text' placeholder='what are you looking for?' className={styles.searchInput}></input>
          <input type='submit' value='search.' className={styles.btn}></input>
        </form>
      </div>
    </div>
  )
};

export default SearchBar;