import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
  },
  reducers: {
    initiateData(state, action) {
      state.items = action.payload
    },

    deleteData(state) {
      state.items = []
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;