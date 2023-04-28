import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./features/cart-slice";
import filterReducer from "./features/filter-slice";
import productReducer from "./features/product-slice";

const reducers = combineReducers({
  products: productReducer,
  filter: filterReducer,
  carts: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["carts"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
