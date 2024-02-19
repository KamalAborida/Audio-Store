import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    removeAll(state) {
      state.totalQuantity = 0;
      state.cartItems = [];
      state.totalPrice= 0
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          name: newItem.name,
        });
      } else {
        existingItem.quantity += newItem.quantity;
      }
      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        state.totalPrice -= existingItem.price;
      }
    },
    oneItemAction(state, action) {
      const id = parseInt(action.payload.id);
      const operation = action.payload.operation;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (existingItem) {
        if (operation === "+") {
          existingItem.quantity++;
          state.totalPrice += existingItem.price
          state.totalQuantity++
        } else if (operation === "-") {
          existingItem.quantity--;
          state.totalPrice -= existingItem.price
          state.totalQuantity--
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
