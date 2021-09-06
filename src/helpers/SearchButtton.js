import React from 'react'
import { Link } from 'react-router-dom';
// import {ReactComponent as Add }from "../icons/add.svg";


export const SearchButtton = () => {
  return (
    // <button className='search-button-container'>
      <Link to='search' className='open-search'>
        <button>add book</button>
      </Link>
    // </button>
  );
}
