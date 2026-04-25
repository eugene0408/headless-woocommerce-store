import woocommerceApi from "@/services/api/woocommerceApi";

export const fetchCategories = async () => {
  // const response = await woocommerceApi.get('/products/categories');    // for real API
  const response = await woocommerceApi.get("data/categories.json"); // for local JSON
  return response.data;
};
