import React from 'react'
import PropTypes from 'prop-types'
import {Book} from './Book'

export const BookShelf = ({ shelfBooks, shelf, loading, setBooks }) => {
  return (
    <div>
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{shelf}</h2>
        <div className='bookshelf-books'>
          <ul className='books-grid'>
            {shelfBooks &&
              shelfBooks.map((book) => {
                return (
                  <li key={book.id}>
                    <Book
                      book={book}
                      loading={loading}
                      //books={books}
                      setBooks={setBooks}
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
  shelfBooks: PropTypes.array.isRequired,
};
