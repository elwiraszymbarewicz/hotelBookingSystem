import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // domyślny adres dla backendu w Pythonie
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;