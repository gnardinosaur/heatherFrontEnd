import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

function Drawer(props) {

  return (
    <div className={cn(
      styles.drawer,
      props.show && styles.show
    )}>
      <div className={styles.linksContainer}>
        <h2>Create Recipe.</h2>
        <hr></hr>
        <h2>Your Recipes.</h2>
        <hr></hr>
        <h2 id='signIn' onClick={props.toggleModals}>Sign In.</h2>
      </div>
    </div>
  )
}

export default Drawer;