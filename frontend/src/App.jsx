import React from 'react';
import ProductList from './pages/ProductsList';
import Suppliers from './pages/Suppliers';
import Sales from './pages/Sales';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="mb-4">
          <Link className="btn btn-primary me-2" to="/products">Products</Link>
          <Link className="btn btn-secondary me-2" to="/suppliers">Suppliers</Link>
          <Link className="btn btn-success" to="/sales">Sales</Link>
        </nav>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
