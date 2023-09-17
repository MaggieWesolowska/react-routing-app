import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <label htmlFor='Enter email'>
        <input type='text'></input>
      </label>
      <label htmlFor='Enter password'>
        <input type='password'></input>
      </label>
      <button>Login</button>
    </div>
  );
};

export default LoginPage;
