import { createSlice } from "@reduxjs/toolkit";
import products from "../../assets/data/products.json";
import { ProductType } from "../../types";

// The function below is called a thunk and allows us to perform async logic. It
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: products,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { updateProducts } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProducts = (state: {
  products: { products: ProductType[] };
}) => state.products.products;

export default productSlice.reducer;
