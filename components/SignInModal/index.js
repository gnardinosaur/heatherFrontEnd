import React from 'react';
import styles from './styles.scss';
import cn from 'classnames';

function SignInModal(props) {
  
  return (
    <div className={cn(
      styles.modal,
      props.show && styles.show
      )}> 
      <div className={styles.formContainer}>
        <form>
          <input type='text' name='username' placeholder='username'></input>
          <input type='password' name='pw' placeholder='password'></input>
          <input type='submit' value='sign in.' className={styles.btn}></input>
        </form>
      </div>
    </div>
  )
};

export default SignInModal;