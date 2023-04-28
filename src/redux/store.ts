import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filter-slice";
import productReducer from "./features/product-slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    filter: filterReducer,
  },
});
