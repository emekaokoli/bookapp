import React from 'react';
import PropTypes from 'prop-types';
import { shelfs } from '../App';
import { BookShelf } from './BookShelf';

const BookLIst = ({ books, loading, setBooks }) => {
  //console.log(books);

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
            //books={books}
          />
        );
      })}
    </div>
  );
};

BookLIst.propTypes = {
  books: PropTypes.array.isRequired,
  props: PropTypes.object,
};

export default BookLIst;
