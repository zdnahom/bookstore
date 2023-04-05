import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Book from './Book';
import { addBook, getBooks } from '../redux/features/books/booksSlice';

const BookList = () => {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  const [newBookInfo, setNewBookInfo] = useState({
    title: '',
    author: '',
  });

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const handleInputs = (e) => {
    if (e.target.name === 'title') {
      setNewBookInfo((prevState) => ({
        ...prevState,
        title: e.target.value,
      }));
    } else if (e.target.name === 'author') {
      setNewBookInfo((prevState) => ({
        ...prevState,
        author: e.target.value,
      }));
    }
  };

  const addNewBook = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100000);
    if (newBookInfo.title.trim() && newBookInfo.author.trim()) {
      dispatch(addBook({
        item_id: id.toString(),
        title: newBookInfo.title,
        author: newBookInfo.author,
      }));
    }

    setNewBookInfo({
      title: '',
      author: '',
    });
  };
  return (
    <section>
      <div className="booklist-wrapper">
        <h1>Books Available in Bookstore</h1>
        <ul className="booklist">
          {books.map((book) => <Book key={book.item_id} bookInfo={book} />)}
        </ul>
      </div>
      <div className="add-book-wrapper">
        <h2 className="add-book-header">ADD NEW BOOK</h2>
        <form className="add-book">
          <input name="title" type="text" placeholder="Book title" className="book-title-input" onChange={handleInputs} value={newBookInfo.title} />
          <input name="author" type="text" placeholder="Author" className="book-author-input" onChange={handleInputs} value={newBookInfo.author} />
          <button type="submit" className="add-book-button" onClick={addNewBook}>Add book</button>
        </form>
      </div>
    </section>
  );
};

export default BookList;
