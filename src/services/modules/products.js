import woocommerceApi from "@/services/api/woocommerceApi";
// For real API
// export const fetchProducts = async (perPage = 100) => {
//   const response = await api.get("/products", {
//     params: {
//       per_page: perPage,
//     },
//   });
//   return response.data;
// };

// For local JSON file
export const fetchProducts = async () => {
  const response = await woocommerceApi.get("data/products.json");
  return response.data;
};
