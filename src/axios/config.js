import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5003', // Replace with your API URL
});

export const postReceita = async (novaReceita) => {
  try {
    const response = await api.post('/receitas', novaReceita);
    return response.data;
  } catch (error) {
    throw error;
  }
};