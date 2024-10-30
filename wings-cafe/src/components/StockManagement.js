// src/components/StockManagement.js
import React from 'react';

const StockManagement = ({ products }) => {
  return (
    <div className="stock-management">
      <h2>Current Stock</h2>
      <ul>
        {products.length > 0 ? (
          products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
            </li>
          ))
        ) : (
          <p>No products in stock</p>
        )}
      </ul>
    </div>
  );
};

export default StockManagement;
