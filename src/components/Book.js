import React from 'react';
import PropTypes from 'prop-types';
import { shelfs } from '../App';
import { imageData } from '../icons/data';

export const Book = ({
  books,
  book,
  loading,
  setBooks,
  handleBookUpdate,
  defaultValue,
  shelf,
}) => {
  const { authors, title, imageLinks } = book;

  const bookImage =
    imageLinks.thumbnail && imageLinks.thumbnail
      ? imageLinks.thumbnail
      : imageData;
  const bookTitle = title ? title : 'No title available';
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookImage})`,
          }}
        ></div>
        <div className='book-shelf-changer'>
          <select
            onChange={(event) => handleBookUpdate(book, event.target.value)}
            value={book.shelf}
            defaultValue={defaultValue}
          >
            <option value='move' disabled>
              Move to...
            </option>
            {Array.from(shelfs).map(([shelfId, shelfName]) => {
              return (
                <option key={shelfId} value={shelfId}>
                  {shelfName}
                </option>
              );
            })}
            <option value='none'>None</option>
          </select>
        </div>
      </div>
      <div className='book-title'>{bookTitle}</div>
      <div>
        {authors &&
          authors.map((author, index) => (
            <div className='book-authors' key={index}>
              {author}
            </div>
          ))}
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  setBooks: PropTypes.func,
  defaultValue: PropTypes.string,
  handleBookUpdate: PropTypes.func.isRequired,
};
