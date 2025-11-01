import React, { useEffect, useState } from 'react';
import api from '../api/api';

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => { fetchSuppliers(); }, []);

  async function fetchSuppliers() {
    try {
      const res = await api.get('/suppliers');
      setSuppliers(res.data || []);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <h2>Suppliers</h2>
      <div className="row">
        {suppliers.map(s => (
          <div key={s.id} className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5>{s.name}</h5>
                <p>Email: {s.contactEmail}</p>
                <p>Phone: {s.phone}</p>
                <p>Address: {s.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
