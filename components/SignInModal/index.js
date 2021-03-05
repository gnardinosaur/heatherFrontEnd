import React, { useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';

function SignInModal(props) {
  const [nameInput, setNameInput] = useState(false);
  
  function addNameInput() {
    setNameInput(true)
  }

  console.log(nameInput)
  
  return (
    <div className={cn(
      styles.modal,
      props.show && styles.show
      )}> 
      <div className={styles.formContainer}>
        <form>
          <input type='text' name='firstname' placeholder='firstname' className={cn(styles.firstName, nameInput && styles.show)}></input>
          <input type='text' name='username' placeholder='username'></input>
          <input type='password' name='pw' placeholder='password'></input>
          <input type='submit' value='sign in.' className={styles.btn}></input>
          <h3 onClick={addNameInput}>Create New Account</h3>
        </form>
      </div>
    </div>
  )
};

export default SignInModal;