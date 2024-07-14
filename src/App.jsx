import { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {
  const [bookToEdit, setBookToEdit] = useState("");
  const handleEdit = (book) => {
    setBookToEdit(book);
  };
  const handleCanceEdit = () => {
    setBookToEdit(null);
  };
  return (
    <div className="App">
      <BookForm bookToEdit={bookToEdit} onCancel={handleCanceEdit}></BookForm>
      <BookList onHandleEdit={handleEdit}></BookList>
    </div>
  );
};

export default App;
