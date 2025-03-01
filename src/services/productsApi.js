import api from "./api";

export const fetchProducts = async (perPage = 100) => {
  // const response = await api.get("/products", {                    // for real API
  //   params: {
  //     per_page: perPage,
  //   },
  // });

  const response = await api.get("data/products.json"); // for local JSON
  return response.data;
};

// export const fetchProductById = async (id) => {
//   const response = await api.get(`/products/${id}`);
//   return response.data;
// };
