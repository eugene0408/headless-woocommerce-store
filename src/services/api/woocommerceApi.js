import axios from "axios";

const woocommerceApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/", // Базова URL для WooCommerce API або корінь проекту для демо
  auth: {
    username: import.meta.env.VITE_WOOCOMMERCE_KEY, // Ключ WooCommerce
    password: import.meta.env.VITE_WOOCOMMERCE_SECRET, // Секрет WooCommerce
  },
  headers: {
    "Content-Type": "application/json", // Заголовок для JSON-запитів
  },
});

export default woocommerceApi;
