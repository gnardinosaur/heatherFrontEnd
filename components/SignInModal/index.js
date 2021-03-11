import React, { useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';
import { X } from 'react-feather';

function SignInModal(props) {
  const [nameInput, setNameInput] = useState(false);
  
  function addNameInput() {
    setNameInput(!nameInput)
  }
  
  return (
    <div className={cn(
      styles.modal,
      props.show && styles.show,
      nameInput && styles.createAccount
      )}> 
      <div className={styles.formContainer}>
        <X id='signIn' onClick={props.toggleModals} />
        <form>
          <input type='text' name='email' placeholder='email'></input>
          <input type='password' name='pw' placeholder='password'></input>
          <input type='text' name='firstname' placeholder='firstname' className={cn(
            styles.firstName, 
            nameInput && styles.show)}>
          </input>
          <input type='submit' value={nameInput ? 'create account.' : 'sign in.'} className={cn(
            styles.btn,
            nameInput && styles.slide
            )}>
          </input>
          <h3 onClick={addNameInput} className={cn(nameInput && styles.slide)}>
            <em>
              {nameInput ? 'Sign In To Existing Account' : 'Create New Account'}
            </em>
          </h3>
        </form>
      </div>
    </div>
  )
};

export default SignInModal;