import Book from './Book';

const BookList = () => {
  const books = [
    { id: '1', title: 'The Hunger games', author: 'Suzanne Collins' },
    { id: '2', title: 'Dune', author: 'Frank Herbert' },
    { id: '3', title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins' },
  ];
  return (
    <section>
      <ul>
        {books.map((book) => <Book key={book.id} bookInfo={book} />)}
      </ul>
      <div className="add-book-wrapper">
        <h3 className="add-book-header">ADD NEW BOOK</h3>
        <form className="add-book">
          <input type="text" placeholder="Book title" className="book-title-input" />
          <input type="text" placeholder="Author" className="book-author-input" />
          <button type="submit" className="add-book-button">Add book</button>
        </form>
      </div>
    </section>
  );
};

export default BookList;
