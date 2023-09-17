import React from 'react';
import { Route, Routes } from 'react-router-dom';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';
import img4 from '../images/header4.jpg';
import '../styles/Header.css';

const Header = () => {
  //to choose background randomly:
  // const images = [img1, img2, img3];
  // const index = Math.floor(Math.random() * 3);
  // const img = images[index];
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<img src={img1} alt='city1' />}></Route>
        <Route
          path='/products'
          element={<img src={img2} alt='city2' />}></Route>
        <Route
          path='/contact'
          element={<img src={img3} alt='city3' />}></Route>
        <Route
          path='/admin'
          element={<img src={img4} alt='lake' />}></Route>
        <Route
          path='/*'
          element={<img src={img4} alt='lake' />}></Route>
      </Routes>
      {/* <img src={img} alt='header-img' /> */}
    </>
  );
};

export default Header;
