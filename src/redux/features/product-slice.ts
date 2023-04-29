import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductState, ProductType } from "../../types";
import products from "../../utils/data/products.json";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: products,
    productTitle: "All Items",
  } as ProductState,

  reducers: {
    updateProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },

    updateProductTitle: (state, action: PayloadAction<string>) => {
      state.productTitle = action.payload;
    },
  },
});

export const { updateProducts, updateProductTitle } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProducts = (state: { products: ProductState }) =>
  state.products.products;
export const selectProductTitle = (state: { products: ProductState }) =>
  state.products.productTitle;

export default productSlice.reducer;
