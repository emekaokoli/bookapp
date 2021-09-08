import React from 'react';
import PropTypes from 'prop-types';
import { shelfs } from '../App';
import { imageData } from '../icons/data';

export const Book = ({
  books,
  newbook,
  loading,
  setBooks,
  handleBookUpdate,
  defaultValue,
  shelf,
}) => {
  const { authors, title, bookphoto } = newbook;

  const bookImage = bookphoto && bookphoto ? bookphoto : imageData;
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
            onChange={(event) => handleBookUpdate(newbook, event.target.value)}
            value={books.shelf}
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
      <div>{authors}</div>
    </div>
  );
};
Book.propTypes = {
  books: PropTypes.array.isRequired,
  newbook: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  setBooks: PropTypes.func,
  defaultValue: PropTypes.string,
  handleBookUpdate: PropTypes.func.isRequired,
};
