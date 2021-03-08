import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

function Drawer(props) {

  return (
    <div className={cn(
      styles.drawer,
      props.show && styles.show
    )}>
    </div>
  )
}

export default Drawer;