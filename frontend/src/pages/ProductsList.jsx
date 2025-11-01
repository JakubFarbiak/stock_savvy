import React, { useState, useEffect } from 'react';
import api, { createProduct } from '../api/api';

function ProductForm({ onCreated }) {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        name,
        sku,
        description,
        price: parseFloat(price),
        quantity: parseInt(quantity),
      };
      await createProduct(newProduct);
      setName(''); setSku(''); setDescription(''); setPrice(''); setQuantity('');
      onCreated(); // refresh product list
      alert('Product created!');
    } catch (err) {
      console.error(err);
      alert('Error creating product');
    }
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <h3>Create Product</h3>
      <div className="mb-2">
        <input className="form-control" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="mb-2">
        <input className="form-control" placeholder="SKU" value={sku} onChange={e => setSku(e.target.value)} />
      </div>
      <div className="mb-2">
        <textarea className="form-control" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="mb-2">
        <input type="number" className="form-control" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      </div>
      <div className="mb-2">
        <input type="number" className="form-control" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required />
      </div>
      <button className="btn btn-success" type="submit">Create Product</button>
    </form>
  );
}

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [size] = useState(10);

  useEffect(() => { fetchProducts(); }, [page]);

  async function fetchProducts() {
    try {
      const res = await api.get('/products', { params: { page, size } });
      setProducts(res.data.content || []);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <h2>Products</h2>

      {/* --- Add Product Form --- */}
      <ProductForm onCreated={fetchProducts} />

      <div className="row">
        {products.map(p => (
          <div key={p.id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5>{p.name}</h5>
                <p>Qty: {p.quantity}</p>
                <p>${p.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={() => setPage(p => Math.max(0, p - 1))}>Prev</button>
        <button className="btn btn-primary" onClick={() => setPage(p => p + 1)}>Next</button>
      </div>
    </div>
  );
}
