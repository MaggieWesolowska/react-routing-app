import React from 'react';
import { Route, Routes, redirect } from 'react-router-dom';

const permission = true;

const AdminPage = () => {
  return (
    <Routes>
      <Route
        render={() =>
          permission ? (
            <h4>Admin Panel - Welcome!</h4>
          ) : (
            redirect('/login')
          )
        }
      />
    </Routes>
  );
};

export default AdminPage;
