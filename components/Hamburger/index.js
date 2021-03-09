import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

function Hamburger(props) {

  console.log(props)

  return (
    <div id='drawer' className={styles.hamburger} onClick={props.toggleModals}>
      <div className={cn(
        styles.bar,
        styles.one,
        props.showX && styles.showX
      )}></div>
      <div className={cn(
        styles.bar,
        styles.two,
        props.showX && styles.showX
      )}></div>
      <div className={cn(
        styles.bar,
        styles.three,
        props.showX && styles.showX
      )}></div>
    </div>
  )
}

export default Hamburger;