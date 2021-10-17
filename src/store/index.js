import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";
//cartIsvisible
const initialisShownState = { isshow: false };
const isshownSlice = createSlice({
  name: "isshownSlice",
  initialState: initialisShownState,
  reducers: {
    toggle(state) {
      state.isshow = !state.isshow;
    },
  },
});
//cartSLice
const cartSlice = createSlice({
  name: "cartSlice",
  //totalAmount here can be omitted  since the initial state is 0
  initialState: { items: [], totalQuantity: 0, totalAmount: 0 },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      // no matter if the item is already in the cart or not, the total quantity should be added one
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemToCart(state, action) {
      const id = action.payload;
      state.totalQuantity--;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
  },
});
// if you want to use isshown or  cart later,you shoulse use state.cart
const store = configureStore({
  reducer: { isshown: isshownSlice.reducer, cart: cartSlice.reducer },
});

export const isshownActions = isshownSlice.actions;
export const cartActions = cartSlice.actions;

export default store;
