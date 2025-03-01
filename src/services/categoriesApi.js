import api from "./api";

export const fetchCategories = async () => {
  // const response = await api.get('/products/categories');    // for real API
  const response = await api.get("data/categories.json"); // for local JSON
  return response.data;
};
