import api from "./api";

export const fetchProducts = async (perPage = 100) => {
  const response = await api.get("/products", {
    params: {
      per_page: perPage,
    },
  });
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
