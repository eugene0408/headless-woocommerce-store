import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage
import productsReducer from "@/redux/slices/productsSlice";
import categoriesReducer from "@/redux/slices/categoriesSlice";
import cartReducer from "@/redux/slices/cartSlice";
import cartStatusReducer from "@/redux/slices/cartStatusSlice";
import favoritesReducer from "@/redux/slices/favoritesSllice";

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  cartStatus: cartStatusReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
