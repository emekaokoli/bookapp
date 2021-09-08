import React from 'react';
import PropTypes from 'prop-types';
import { shelfs } from '../App';
import { BookShelf } from './BookShelf';

export const BookList = ({ books, loading, setBooks, handleBookUpdate }) => {
  return (
    <div className='book'>
      {shelfs.map(([shelfId, shelfName]) => {
        const filteredShelfBooks = books
          .map((booksInShelf) => booksInShelf)
          .filter((filteredBooks) => filteredBooks.shelf === shelfId);
        return (
          <BookShelf
            key={shelfId}
            shelf={shelfName}
            shelfBooks={filteredShelfBooks}
            loading={loading}
            setBooks={setBooks}
            books={books}
            handleBookUpdate={handleBookUpdate}
          />
        );
      })}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  setBooks: PropTypes.func,
  handleBookUpdate: PropTypes.func.isRequired,
};
