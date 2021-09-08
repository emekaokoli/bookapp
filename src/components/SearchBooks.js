import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book } from './Book';
import * as API from '../utils/BooksAPI';
import PropTypes from 'prop-types';

export const SearchBooks = ({ books, setBooks, handleBookUpdate }) => {
  const [query, setQuery] = useState('');
  const [searchRepo, setSearchRepo] = useState([]);
  const [error, setError] = useState(false);
  //const [defaultValue, setdefaultValue] = useState('none')

  let defaultValue = 'none';

  const searchBooks = async (e) => {
    e.preventDefault();
    e.persist();
    setQuery(e.target.value);
    try {
      await API.search(query.trim(), 20).then((res) => {
        books.find((bk) => {
          if (bk.id === books.id) {
            defaultValue = bk.shelf;
          }
          return defaultValue;
        });

        return setSearchRepo(
          res &&
            res.map((book) => ({
              id: book.id,
              shelf: book.shelf,
              title: book.title,
              authors: book.authors,
              bookphoto: book.imageLinks.thumbnail,
            })),
        );
      });
    } catch (error) {
      setError(true);
      console.error(error.message);
    }
  };
  //console.log(defaultValue);

  const ErrorComponent = () => {
    return <h3>{`No results found for ${query}`}</h3>;
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title or author'
            value={query}
            onChange={(event) => searchBooks(event)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <header className='App-header'>
          <h1>Search</h1>
        </header>
        <ol className='books-grid'>
          {query &&
            searchRepo &&
            searchRepo.map((newbook) => {
              return (
                <li key={newbook.id}>
                  <Book
                    newbook={newbook}
                    setBooks={setBooks}
                    books={books}
                    handleBookUpdate={handleBookUpdate}
                    defaultValue={defaultValue}
                  />
                </li>
              );
            })}
          {query && []}
          {error && <ErrorComponent />}
        </ol>
      </div>
    </div>
  );
};
SearchBooks.propTypes = {
  books: PropTypes.array,
  query: PropTypes.string,
  searchRepo: PropTypes.array,
  setBooks: PropTypes.func,
  handleBookUpdate: PropTypes.func,
};
