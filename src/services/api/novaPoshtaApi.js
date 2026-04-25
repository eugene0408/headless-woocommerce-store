import axios from "axios";

const novaPoshtaApi = axios.create({
  baseURL: "https://api.novaposhta.ua/v2.0/json/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default novaPoshtaApi;
