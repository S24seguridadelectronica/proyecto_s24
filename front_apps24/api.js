// api.js
import axios from 'axios';

// Cambia la URL base por la de tu servidor
const API_BASE_URL = 'http://127.0.0.1:8000/inventario/api/';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000, // Opcional: tiempo de espera para las solicitudes
});

export default api;
