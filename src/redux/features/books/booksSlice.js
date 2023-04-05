import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/3bBtDENuMJAbrkmZcLs3/books';
const initialState = {
  books: [
    // {
    //   item_id: 'item1',
    //   title: 'The Great Gatsby',
    //   author: 'John Smith',
    //   category: 'Fiction',
    // },
    // {
    //   item_id: 'item2',
    //   title: 'Anna Karenina',
    //   author: 'Leo Tolstoy',
    //   category: 'Fiction',
    // },
    // {
    //   item_id: 'item3',
    //   title: 'The Selfish Gene',
    //   author: 'Richard Dawkins',
    //   category: 'Nonfiction',
    // },
  ],
};
export const getBooks = createAsyncThunk('books/getBooks', async (_, thunkAPI) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something is wrong');
  }
});
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const filteredBooks = state.books.filter((book) => book.item_id !== action.payload);
      return { ...state, books: filteredBooks };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => {
        const booksObj = action.payload;
        const bookIdArray = Object.keys(booksObj);
        const books = bookIdArray.map((bookId) => ({
          item_id: bookId,
          title: booksObj[bookId][0].title,
          author: booksObj[bookId][0].author,
          category: booksObj[bookId][0].category,
        }));
        return { ...state, books };
      });
  },
});
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
