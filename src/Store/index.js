import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice.js';
import dataSlice from './data-slice.js';
import paymentSlice from './payment-slice.js';

const store = configureStore({
  reducer: { cart: cartSlice.reducer, data: dataSlice.reducer, paymentValidation: paymentSlice.reducer },
});

export default store;