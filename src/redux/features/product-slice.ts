import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import products from "../../assets/data/products.json";
import { ProductState, ProductType } from "../../types";

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

  reducers: {
    updateProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },

    // update price filter data
    updatePriceFilter: (state, action: PayloadAction<string>) => {
      const { price } = state.filters;

      if (!price.includes(action.payload)) {
        state.filters.price.push(action.payload);
      }
    },

    // update content filter data
    updateContentFilter: (state, action: PayloadAction<string>) => {
      const { content } = state.filters;

      if (!content.includes(action.payload)) {
        state.filters.content.push(action.payload);
      }
    },

    // update polygon filter data
    updatePolygonFilter: (state, action: PayloadAction<string>) => {
      const { polygon } = state.filters;

      if (!polygon.includes(action.payload)) {
        state.filters.polygon.push(action.payload);
      }
    },

    // update auto support filter data
    updateAutoSupportFilter: (state, action: PayloadAction<string>) => {
      const { autoSupport } = state.filters;

      if (!autoSupport.includes(action.payload)) {
        state.filters.autoSupport.push(action.payload);
      }
    },

    // update category filter data
    updateCategoryFilter: (state, action: PayloadAction<string>) => {
      state.filters.category = action.payload;
    },

    // remove price filter data
    updatePriceFilterRemove: (state, action: PayloadAction<string>) => {
      const { price } = state.filters;
      const index = price.indexOf(action.payload);

      if (index !== -1) {
        state.filters.price.splice(index, 1);
      }
    },

    // remove content filter data
    updateContentFilterRemove: (state, action: PayloadAction<string>) => {
      const { content } = state.filters;
      const index = content.indexOf(action.payload);

      if (index !== -1) {
        state.filters.content.splice(index, 1);
      }
    },

    // remove polygon filter data
    updatePolygonFilterRemove: (state, action: PayloadAction<string>) => {
      const { polygon } = state.filters;
      const index = polygon.indexOf(action.payload);

      if (index !== -1) {
        state.filters.polygon.splice(index, 1);
      }
    },

    // remove auto support filter data
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
