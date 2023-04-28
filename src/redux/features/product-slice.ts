import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import products from "../../assets/data/products.json";
import { ProductState, ProductType } from "../../types";

// The function below is called a thunk and allows us to perform async logic. It
export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: products,
    filters: {
      category: "",
      price: [],
      content: [],
      polygon: [],
      autoSupport: [],
    },
  } as ProductState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    updateProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },

    updatePriceFilter: (state, action: PayloadAction<string>) => {
      const { price } = state.filters;

      if (!price.includes(action.payload)) {
        state.filters.price.push(action.payload);
      }
    },

    updateContentFilter: (state, action: PayloadAction<string>) => {
      const { content } = state.filters;

      if (!content.includes(action.payload)) {
        state.filters.content.push(action.payload);
      }
    },

    updatePolygonFilter: (state, action: PayloadAction<string>) => {
      const { polygon } = state.filters;

      if (!polygon.includes(action.payload)) {
        state.filters.polygon.push(action.payload);
      }
    },

    updateAutoSupportFilter: (state, action: PayloadAction<string>) => {
      const { autoSupport } = state.filters;

      if (!autoSupport.includes(action.payload)) {
        state.filters.autoSupport.push(action.payload);
      }
    },

    updateCategoryFilter: (state, action: PayloadAction<string>) => {
      state.filters.category = action.payload;
    },

    updatePriceFilterRemove: (state, action: PayloadAction<string>) => {
      const { price } = state.filters;
      const index = price.indexOf(action.payload);

      if (index !== -1) {
        state.filters.price.splice(index, 1);
      }
    },

    updateContentFilterRemove: (state, action: PayloadAction<string>) => {
      const { content } = state.filters;
      const index = content.indexOf(action.payload);

      if (index !== -1) {
        state.filters.content.splice(index, 1);
      }
    },

    updatePolygonFilterRemove: (state, action: PayloadAction<string>) => {
      const { polygon } = state.filters;
      const index = polygon.indexOf(action.payload);

      if (index !== -1) {
        state.filters.polygon.splice(index, 1);
      }
    },

    updateAutoSupportFilterRemove: (state, action: PayloadAction<string>) => {
      const { autoSupport } = state.filters;
      const index = autoSupport.indexOf(action.payload);

      if (index !== -1) {
        state.filters.autoSupport.splice(index, 1);
      }
    },
  },
});

export const {
  updateProducts,
  updatePriceFilter,
  updateContentFilter,
  updatePolygonFilter,
  updateAutoSupportFilter,
  updateCategoryFilter,
  updatePriceFilterRemove,
  updateContentFilterRemove,
  updatePolygonFilterRemove,
  updateAutoSupportFilterRemove,
} = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProducts = (state: { products: ProductState }) =>
  state.products.products;

export const selectFilters = (state: { products: ProductState }) =>
  state.products.filters;

export const selectCategoryFilter = (state: { products: ProductState }) =>
  state.products.filters.category;

export default productSlice.reducer;
