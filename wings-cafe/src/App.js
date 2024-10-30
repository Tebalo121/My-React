import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductManagement from './components/ProductManagement';
import StockManagement from './components/StockManagement';
import UserManagement from './components/UserManagement';
import Login from './components/Login';
import './styles/styles.css';
import wingsLogo from './assets/wings-logo.png'; // Import the logo
import background from './assets/junk.jpg';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const addProduct = (product) => {
    setProducts([...products, product]);
    alert('Product added successfully');
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    alert('Product deleted successfully');
  };

  const editProduct = (index, updatedProduct) => {
    const updatedProducts = products.map((product, i) => (i === index ? updatedProduct : product));
    setProducts(updatedProducts);
    alert('Product updated successfully');
  };

  return (
    <Router>
      <div className="api">
        <img src={background} alt= "background" style={{width:'9000px',marginBottom:'20px'}}/>
        <div className="app">
          {!isLoggedIn ? (
            <Login onLogin={handleLogin} />
          ) : (
            <>
              <header className="header">
                <h1>Welcome to Wings Cafe</h1>
                {/* Logo image added below the heading */}
                <img src={wingsLogo} alt="Wings Cafe Logo" className="logo" />
                <nav>
                  <Link to="/">Dashboard</Link>
                  <Link to="/product-management">Product Management</Link>
                  <Link to="/stock-management">Stock Management</Link>
                  <Link to="/user-management">User Management</Link>
                </nav>
              </header>
              <div className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route
                    path="/product-management"
                    element={
                      <ProductManagement
                        products={products}
                        onAddProduct={addProduct}
                        onDeleteProduct={deleteProduct}
                        onEditProduct={editProduct}
                      />
                    }
                  />
                  <Route path="/stock-management" element={<StockManagement products={products} />} />
                  <Route path="/user-management" element={<UserManagement onLogout={handleLogout} />} />
                </Routes>
              </div>
            </>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;