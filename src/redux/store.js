import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage
import productsReducer from "./slices/productsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import cartReducer from "./slices/cartSlice";
import cartStatusReducer from "./slices/cartStatusSlice";
import favoritesReducer from "./slices/favoritesSllice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
  reducer: {
    products: persistedReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    cartStatus: cartStatusReducer,
    favorites: favoritesReducer,
  },
});

export const persistor = persistStore(store);
