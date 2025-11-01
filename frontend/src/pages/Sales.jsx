import React, { useEffect, useState } from 'react';
import api from '../api/api';

export default function Sales() {
  const [sales, setSales] = useState([]);

  useEffect(() => { fetchSales(); }, []);

  async function fetchSales() {
    try {
      const res = await api.get('/sales');
      setSales(res.data || []);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <h2>Sales</h2>
      <div className="row">
        {sales.map(s => (
          <div key={s.id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <p>Product ID: {s.product.id}</p>
                <p>Quantity: {s.quantity}</p>
                <p>Total Price: ${s.totalPrice}</p>
                <p>Created: {new Date(s.createdAt).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
