import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/", // Базова URL для WooCommerce API
  auth: {
    username: import.meta.env.VITE_WOOCOMMERCE_KEY, // Ключ WooCommerce
    password: import.meta.env.VITE_WOOCOMMERCE_SECRET, // Секрет WooCommerce
  },
  headers: {
    "Content-Type": "application/json", // Заголовок для JSON-запитів
  },
});

export default api;
