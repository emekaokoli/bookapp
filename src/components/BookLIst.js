import React from 'react';
import PropTypes from 'prop-types';
import { shelfs } from '../App';
import { BookShelf } from './BookShelf';

export const BookList = ({ books, loading, setBooks, handleBookUpdate }) => {
  return (
    <div className='book'>
      {shelfs.map(([shelfId, shelfName]) => {
        const newbk = books
          .map((booksInShelf) => booksInShelf)
          .filter((filteredBooks) => filteredBooks.shelf === shelfId);
        const shelfedfBooks = Array.from(newbk);
        return (
          <BookShelf
            key={shelfId}
            shelf={shelfName}
            shelfedfBooks={shelfedfBooks}
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
