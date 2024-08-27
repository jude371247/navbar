import React from 'react';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      image: "(link unavailable)",
      description: "This is a description of Product 1"
    },
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      image: "(link unavailable)",
      description: "This is a description of Product 1"
    },
  
  
  ]; 

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {Products.map((Product) => (
          <div key={(products.id)} className="product-item">
            <img src={(Products.image)} alt={`Products of ${Products.name}`} />
            <h3>{Product.name}</h3>
            <p>${Product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

