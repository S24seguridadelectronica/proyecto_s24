// front_apps24/app/(tabs)/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/inventario/api/camaras/';  // Ajusta según tu configuración

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 1000,
});

export const getCamaras = () => api.get('/camaras/');

export default api;
