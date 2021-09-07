import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book } from './Book';
import * as API from '../utils/BooksAPI';
import PropTypes from 'prop-types';

export const SearchBooks = ({ books, setBooks }) => {
  const [query, setQuery] = useState('');
  const [searchRepo, setSearchRepo] = useState([]);
  const {shelf} = books
 

  const search = async (e) => {
    e.preventDefault();
    e.persist();
    setQuery(e.target.value);
    try {
       await API.search(query, 20).then((res) =>
         setSearchRepo(
           res &&
             res.map((book) => ({
               id: book.id,
               shelf,
               title: book.title,
               authors: book.authors,
               bookphoto: book.imageLinks.thumbnail,
             })),
         ),
       );
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log('searchRepo');
  console.log(books);

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
            onChange={(e) => search(e)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <header className='App-header'>
          <h1>Search</h1>
        </header>
        <ol className='books-grid'>
          {query
            ? searchRepo &&
              searchRepo.map((book) => {
                return (
                  <li key={book.id}>
                    <Book book={book} setBooks={setBooks} />
                  </li>
                );
              })
            : []}
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
};
