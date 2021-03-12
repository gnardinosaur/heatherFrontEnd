import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

function Hamburger(props) {

  return (
    <div id='drawer' className={styles.hamburger} onClick={props.toggleModals}>
      <div id='drawer' className={cn(
        styles.bar,
        styles.one,
        props.showX && styles.showX
      )}
        onClick={props.toggleModals}>
      </div>
      <div id='drawer' className={cn(
        styles.bar,
        styles.two,
        props.showX && styles.showX
      )}
        onClick={props.toggleModals}>
      </div>
      <div id='drawer' className={cn(
        styles.bar,
        styles.three,
        props.showX && styles.showX
      )}
      onClick={props.toggleModals}>
      </div>
    </div>
  )
}

export default Hamburger;