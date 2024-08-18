import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css'; // Adjust the path if needed

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for movies..."
        className={css.searchInput}
      />
      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
