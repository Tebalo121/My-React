// src/components/ProductManagement.js
import React, { useState } from 'react';

const ProductManagement = ({ products, onAddProduct, onDeleteProduct, onEditProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [editIndex, setEditIndex] = useState(null);

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      onAddProduct(newProduct);
      setNewProduct({ name: '', price: '' });
    }
  };

  const handleEditProduct = (index) => {
    setNewProduct(products[index]);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    if (editIndex !== null) {
      onEditProduct(editIndex, newProduct);
      setNewProduct({ name: '', price: '' });
      setEditIndex(null);
    }
  };

  return (
    <div className="product-management">
      <h2>Product Management</h2>
      <div className="product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        {editIndex !== null ? (
          <button onClick={handleSaveEdit}>Save Edit</button>
        ) : (
          <button onClick={handleAddProduct}>Add Product</button>
        )}
      </div>
      <div className="product-list">
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              {product.name} - ${product.price}
              <button onClick={() => handleEditProduct(index)}>Edit</button>
              <button onClick={() => onDeleteProduct(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductManagement;
