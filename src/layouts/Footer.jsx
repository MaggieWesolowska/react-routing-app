import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <>
            <p>
              You are on{' '}
              <span style={{ color: 'lightgreen' }}>
                Welcome Page
              </span>
            </p>
          </>
        }
      />
      <Route
        path='/products'
        element={
          <>
            <p>
              You are on{' '}
              <span style={{ color: 'lightskyblue' }}>
                Product Page
              </span>
            </p>
          </>
        }
      />
      <Route
        path='/contact'
        element={
          <>
            <p>
              You are on{' '}
              <span style={{ color: 'goldenrod' }}>
                Contact Page
              </span>
            </p>
          </>
        }
      />
      <Route
        path='/admin/*'
        element={
          <>
            <p>
              You are on{' '}
              <span style={{ color: 'orangered' }}>
                Admin Page
              </span>
            </p>
          </>
        }
      />
    </Routes>
  );
};

export default Footer;
