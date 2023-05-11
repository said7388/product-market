import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState, ProductType } from "../../types";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  } as CartState,

  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: ProductType; quantity: number }>,
    ) => {
      // check  if product is already in cart
      const product = state.carts.find(
        (cart) => cart.id === action.payload.product.id,
      );
      if (product) {
        product.quantity += action.payload.quantity;
        return;
      }
      state.carts.push({
        ...action.payload.product,
        quantity: action.payload.quantity,
      });
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const product = state.carts.find((cart) => cart.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity } =
  cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCarts = (state: { carts: CartState }) => state.carts.carts;

export default cartSlice.reducer;
