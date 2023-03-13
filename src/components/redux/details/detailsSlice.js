import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  citystore: [],
  status: 'idle',
  error: null,
};

export const detailsSlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
  },

  extraReducers() {
  },

});
export default detailsSlice.reducer;
