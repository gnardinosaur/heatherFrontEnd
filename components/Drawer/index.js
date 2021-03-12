import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

function Drawer(props) {

  function navigate(e) {
    switch (e.target.id) {
      case 'userRecipes':
        console.log('hey')
        // navigate to user's recipes page
        break;
      case 'addRecipe': 
        console.log('heyoooo')
        // navigate to create recipes page
        break;
    }
  }

  return (
    <div className={cn(
      styles.drawer,
      props.show && styles.show
    )}>
      <div className={styles.linksContainer}>
        <h2 id='userRecipes' onClick={navigate}>My Recipes</h2>
        <hr></hr>
        <h2 id='addRecipe' onClick={navigate}>Add New Recipe</h2>
        <hr></hr>
        <h2 id='signIn' onClick={props.toggleModals}>Sign In</h2>
      </div>
    </div>
  )
}

export default Drawer;