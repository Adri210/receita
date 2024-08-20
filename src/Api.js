import axios from 'axios';

export const getReceitas = async () => {
  try {
    const response = await axios.get("http://localhost:5004/receitas");

    if (Array.isArray(response.data)) {
      return response.data;
    } else if (response.data && Array.isArray(response.data.receitas)) {
      return response.data.receitas;
    } else {
      console.error('Formato inesperado dos dados:', response.data);
      return [];
    }
  } catch (error) {
    console.error('Erro ao buscar receitas:', error);
    return [];
  }
};