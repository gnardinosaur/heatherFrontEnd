import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

function Hamburger(props) {

  return (
    <div className={styles.hamburger} >
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