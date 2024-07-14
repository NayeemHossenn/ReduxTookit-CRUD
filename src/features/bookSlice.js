import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "x", author: "Nayeem", price: 100, quantity: 5 },
    { id: 2, title: "y", author: "Hossen", price: 120, quantity: 10 },
  ],
};

const bookSlice = createSlice({
  name: "books",
  //initialState: initialState,
  initialState, //we can write this way if key and value are same. object literal rules
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, author, price, quantity } = action.payload;
      const existingBook = state.books.find((book) => book.id === id);
      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.price = price;
        existingBook.quantity = quantity;
      }
    },
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});
export const { deleteBook, addBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
