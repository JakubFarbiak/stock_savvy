import React, { useState } from 'react';
import { createProduct } from '../api/api';

export default function ProductForm({ onCreated }) {
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = { name, sku, description, price: parseFloat(price), quantity: parseInt(quantity) };
      await createProduct(newProduct);
      onCreated && onCreated();
      setName(''); setSku(''); setDescription(''); setPrice(''); setQuantity('');
      alert('Product created!');
    } catch (err) {
      console.error(err);
      alert('Error creating product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Product</h3>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="SKU" value={sku} onChange={e => setSku(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <input type="number" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} required />
      <button type="submit">Create Product</button>
    </form>
  );
}
