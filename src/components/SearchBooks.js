import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book } from './Book';
import * as API from '../utils/BooksAPI';

export const SearchBooks = ({ books }) => {
  const [query, setQuery] = useState('');
  const [searchRepo, setSearchRepo] = useState([]);

  const search = (e) => {
    e.preventDefault();
    e.persist();
    setQuery(e.target.value);
    API.search(query, 20).then(
      (res) =>
        setSearchRepo(
          res &&
            res.map((book) => ({
              id: book.id,
              shelf: book.shelf,
              title: book.title,
              authors: book.authors,
              bookphoto: book.imageLinks.thumbnail,
            })),
        ),
      //window.location = '/',
    );
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
            onChange={(event) => search(event)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <header className='App-header'>
          <h1>Search</h1>
        </header>
        <ol className='books-grid'>
          {searchRepo &&
            searchRepo.map((book) => {
              //console.log(book);
              return (
                <li key={book.id}>
                  <Book book={book} />
                </li>
              );
            })}
        </ol>
      </div>
    </div>
  );
};
