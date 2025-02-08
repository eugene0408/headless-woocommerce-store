import api from './api';

export const fetchCategories = async () => {
  const response = await api.get('/products/categories');
  return response.data;
};
