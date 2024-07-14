import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../features/bookSlice";

const BookForm = ({ bookToEdit, onCancel }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
      console.log(book);
    }
  }, [bookToEdit]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...book, id: nanoid() });
    if (bookToEdit) {
      //update
      dispatch(updateBook(book));
    } else {
      dispatch(addBook({ ...book, id: nanoid() }));
    }
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={book.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="author"
        value={book.author}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="price"
        value={book.price}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="quantity"
        placeholder="quantity"
        value={book.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit">{bookToEdit ? "Update Book" : "Add Book"}</button>
      {bookToEdit && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default BookForm;
