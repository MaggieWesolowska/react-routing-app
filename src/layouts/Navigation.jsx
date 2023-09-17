import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
  { name: 'main page', path: '/' },
  { name: 'products', path: '/products' },
  { name: 'contact', path: '/contact' },
  { name: 'user admin', path: '/admin/*' },
];

const Navigation = () => {
  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink
        to={item.path}
        // exact={item.exact ? item.exact : false}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className='nav'>
      <ul>
        {menu}
        {/* <li>
          <NavLink to='/' exact=true >Main Page</NavLink>
        </li>
        <li>
          <NavLink to='products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='contact'>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to='admin'>User Admin</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
