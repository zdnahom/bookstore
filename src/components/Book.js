import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/features/books/booksSlice';

const Book = ({ bookInfo }) => {
  const dispatch = useDispatch();
  const randomPercent = Math.floor(Math.random() * 100);
  return (
    <li className="book-card">
      <div className="book-content">
        <div className="book-info">
          <span className="book-category">Action</span>
          <span className="book-title">{bookInfo.title}</span>
          <span className="book-author">{bookInfo.author}</span>
        </div>
        <div className="button-container">
          <button type="button" className="interact-btn">
            Comments
          </button>
          <div className="vertical-line" />
          <button
            type="button"
            onClick={() => dispatch(deleteBook(bookInfo.item_id))}
            className="interact-btn remove"
          >
            Remove
          </button>
          <div className="vertical-line" />
          <button type="button" className="interact-btn">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-content">
        <div className="progress-bar-container">
          <div className="progress-bar" />
          <div className="progress-text">
            <span className="progress-percent">
              {randomPercent}
              %
            </span>
            <span className="progress-status">Completed</span>
          </div>
        </div>
        <div className="progress-line-divider" />
        <div className="book-chapter">
          <span className="current-chapter-text">CURRENT CHAPTER</span>
          <span className="chapter-text">Chapter 17</span>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
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
