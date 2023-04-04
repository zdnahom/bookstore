import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      let { books } = state;
      books = [...books, action.payload];
    },
    removeBook: (state, action) => {
      let { books } = state;
      books = books.filter((book) => book.id !== action.payload);
    },
  },
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
