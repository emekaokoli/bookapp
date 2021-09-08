import React from 'react';
import PropTypes from 'prop-types';
import { shelfs } from '../App';

export const Book = ({
  books,
  book,
  loading,
  setBooks,
  handleBookUpdate,
  defaultValue,
}) => {
  const { bookphoto, title, authors } = book;
  const { imageLinks } = books;
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookphoto || imageLinks.thumbnail})`,
          }}
        ></div>
        <div className='book-shelf-changer'>
          <select
            onChange={(event) => handleBookUpdate(book, event.target.value)}
            value={defaultValue}
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
      <div className='book-title'>{title}</div>
      <div>{authors}</div>
    </div>
  );
};
Book.propTypes = {
  books: PropTypes.array.isRequired,
  book: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  setBooks: PropTypes.func,
  defaultValue: PropTypes.string,
  handleBookUpdate: PropTypes.func.isRequired,
};
