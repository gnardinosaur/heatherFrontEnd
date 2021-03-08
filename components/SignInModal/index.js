import React, { useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';

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
        <form>
          <input type='text' name='email' placeholder='yourname@email.com'></input>
          <input type='password' name='pw' placeholder='password'></input>
          <input type='text' name='firstname' placeholder='firstname' className={cn(
            styles.firstName, 
            nameInput && styles.show)}>
          </input>
          <input type='submit' value={nameInput ? 'create account.' : 'sign in.'} className={styles.btn}></input>
          <h3 onClick={addNameInput}><em>{nameInput ? 'Sign In To Existing Account' : 'Create New Account'}</em></h3>
        </form>
      </div>
    </div>
  )
};

export default SignInModal;