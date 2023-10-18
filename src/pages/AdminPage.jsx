import React from 'react';
import LoginPage from './LoginPage';

const permission = false;

const AdminPage = () => {
  return permission ? (
    <h4 className='adminPanel'>Admin Panel - Welcome!</h4>
  ) : (
    <LoginPage />
  );
};

export default AdminPage;
