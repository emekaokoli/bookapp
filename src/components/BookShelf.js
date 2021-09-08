import React from 'react';
import PropTypes from 'prop-types';
import { Book } from './Book';

export const BookShelf = ({
  shelfedfBooks,
  shelf,
  loading,
  setBooks,
  books,
  handleBookUpdate,
}) => {
  
  return (
    <div>
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{shelf}</h2>
        <div className='bookshelf-books'>
          <ul className='books-grid'>
            {shelfedfBooks &&
              shelfedfBooks.map((newbook) => {
                return (
                  <li key={newbook.id}>
                    <Book
                      shelf={shelf}
                      newbook={newbook}
                      loading={loading}
                      books={books}
                      setBooks={setBooks}
                      handleBookUpdate={handleBookUpdate}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
BookShelf.propTypes = {
  shelfedfBooks: PropTypes.array.isRequired,
  shelf: PropTypes.string,
  loading: PropTypes.bool,
  setBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  handleBookUpdate: PropTypes.func.isRequired,
};
