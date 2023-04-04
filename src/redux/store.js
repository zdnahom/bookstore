import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './features/books/booksSlice';
const store = configureStore({
  reducer: {
    books:booksSlice
  },
});
export default store;
