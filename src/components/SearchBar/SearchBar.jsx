import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(query);
        setQuery('');
    };

    return (
        <form className={css.searchForm} onSubmit={handleSubmit}>
            <input
                type="text"
                className={css.searchInput}
                value={query}
                onChange={handleChange}
                placeholder="Search movies..."
            />
            <button type="submit" className={css.searchButton}>Search</button>
        </form>
    );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
