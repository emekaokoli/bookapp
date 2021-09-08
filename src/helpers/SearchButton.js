import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SearchButton = ({ loading }) => {
  return (
    <Link to='search' className='open-search'>
      <button disabled={loading}>add book</button>
    </Link>
  );
};
SearchButton.prototype = {
  loading: PropTypes.bool,
};
