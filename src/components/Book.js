import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/features/books/booksSlice';

const Book = ({ bookInfo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="book-content">
        <p>{bookInfo.title}</p>
        <span>{bookInfo.author}</span>
        <button type="button" onClick={() => dispatch(removeBook(bookInfo.item_id))}>Remove</button>
      </div>
    </li>
  );
};

export default Book;
Book.propTypes = {
  bookInfo: PropTypes.instanceOf({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
