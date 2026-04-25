import novaPoshtaApi from "@/services/api/novaPoshtaApi";

const API_KEY = import.meta.env.VITE_NOVA_POSHTA_KEY;

// Список міст
export const getCities = async (query) => {
  const res = await novaPoshtaApi.post("/", {
    apiKey: API_KEY,
    modelName: "Address",
    calledMethod: "getCities",
    methodProperties: {
      FindByString: query,
      Limit: 10,
    },
  });

  return res.data.data;
};
// Список відділеннь
export const getWarehouses = async ({ cityRef, query = "" }) => {
  const res = await novaPoshtaApi.post("/", {
    apiKey: API_KEY,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityRef: cityRef,
      ...(query ? { FindByString: query } : {}),
      Limit: 10,
    },
  });

  return res.data.data;
};
