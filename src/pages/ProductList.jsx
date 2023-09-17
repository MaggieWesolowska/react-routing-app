import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductList.css';

const products = [
  'Lorem ipsum',
  'laudantium laborum',
  'Consequuntur minima',
];

const ProductList = () => {
  const list = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));
  return (
    <div className='products'>
      <h2>Product List:</h2>
      <ul>{list}</ul>
    </div>
  );
};

export default ProductList;
