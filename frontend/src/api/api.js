import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // relative to Spring Boot
});

// --- Products ---
export const getProducts = () => api.get('/products');
export const createProduct = (data) => api.post('/products', data);
export const updateProduct = (id, data) => api.put(`/products/${id}`, data);
export const deleteProduct = (id) => api.delete(`/products/${id}`);

// --- Suppliers ---
export const getSuppliers = () => api.get('/suppliers');
export const createSupplier = (data) => api.post('/suppliers', data);
export const updateSupplier = (id, data) => api.put(`/suppliers/${id}`, data);
export const deleteSupplier = (id) => api.delete(`/suppliers/${id}`);

// --- Sales ---
export const getSales = () => api.get('/sales');
export const createSale = (data) => api.post('/sales', data);

export default api;
