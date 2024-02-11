import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice.js';
import dataSlice from './data-slice.js';

const store = configureStore({
  reducer: { ui: cartSlice.reducer, data: dataSlice.reducer },
});

export default store;