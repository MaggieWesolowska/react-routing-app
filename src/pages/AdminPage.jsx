import React from 'react';
// import { Route, Routes, redirect } from 'react-router-dom';
import LoginPage from './LoginPage';

// const permission = false;

const AdminPage = () => {
  return (
    // <Routes>
    //   <Route
    //     element={() =>
    //       permission ? (
    //         <h4>Admin Panel - Welcome!</h4>
    //       ) : (
    //         redirect('/login')
    //       )
    //     }
    //   />
    // </Routes>

    <LoginPage />
  );
};

export default AdminPage;
