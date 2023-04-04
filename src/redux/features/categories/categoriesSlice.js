import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  currentStatus: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => state.currentStatus,
  },
});
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
