import React from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  return (
    <div>
      <form className='formAdmin'>
        <label htmlFor='Enter email'>
          <input type='text' placeholder='Email'></input>
        </label>
        <label htmlFor='Enter password'>
          <input
            type='password'
            placeholder='Password'></input>
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
