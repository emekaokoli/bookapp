import React from 'react';
import PropTypes from 'prop-types';
import { shelfs } from '../App';
import * as API from '../utils/BooksAPI';

export const Book = ({ book, loading, setBooks }) => {
  const { bookphoto, shelf, title, authors } = book;
  const {imageLinks} = book

  const handleSelect = async (book, shelf) => {
    const res = await API.update(book, shelf).then((response) =>
      API.getAll(response),
    );
    const result = Array.from(res);
    setBooks(result);
  };
  console.log('bbosk');
  console.log(shelf);
  console.log('bookphoto');
   console.log(bookphoto);
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
            onChange={(event) => handleSelect(book, event.target.value)}
            value={shelf}
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
            <option value='none' defaultValue='none'>
              None
            </option>
          </select>
        </div>
      </div>
      <div className='book-title'>{title}</div>
      <div>{authors}</div>
      {/* {Array.from(book).map(({authors}, i) => {
        console.log(authors);
        return (
          <div key={i} className='book-authors'>
            {authors}
          </div>
        );
      })} */}
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
};
