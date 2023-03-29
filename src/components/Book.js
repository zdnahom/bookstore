import PropTypes from 'prop-types';

const Book = ({ bookInfo }) => (
  <li>
    <div className="book-content">
      <p>{bookInfo.title}</p>
      <span>{bookInfo.author}</span>
    </div>
  </li>
);

export default Book;
Book.propTypes = {
  bookInfo: PropTypes.instanceOf({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
