import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/bookSlice";

const BookList = ({ onHandleEdit }) => {
  const { books } = useSelector((state) => state.booksR);
  const dispatch = useDispatch();

  const handleEdit = (book) => {
    onHandleEdit(book);
  };

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
  return (
    <div>
      <h2>List Of books</h2>
      {books && books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} - ${book.price} - {book.quantity}{" "}
              pcs
              <button onClick={() => handleEdit(book)}>Edit</button>
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books exist!</p>
      )}
    </div>
  );
};

export default BookList;
