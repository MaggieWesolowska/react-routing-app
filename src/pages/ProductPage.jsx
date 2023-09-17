import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = props => {
  return (
    <>
      <div>Product Page</div>
      <Product id={props.id} />
      <Link to='/products'>Return to Product List</Link>
    </>
  );
};

export default ProductPage;
