// src/utils/api.js
import axios from 'axios';

const fetchUser = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('No token found');
  }

  const response = await axios.get('http://localhost:5000/api/users', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export { fetchUser };
