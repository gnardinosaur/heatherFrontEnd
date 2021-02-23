import React from 'react';
import styles from './styles.scss';
import classnames from 'classnames';

function SignInModal(props) {

  return (
    <div className={classnames(
      styles.modal,
      props.show && styles.show
      )}> 
      <form>
        <input type='text' name='username' placeholder='username'></input>
        <input type='password' name='pw' placeholder='password'></input>
        <input type='submit' value='sign in.'></input>
      </form>
    </div>
  )
};

export default SignInModal;