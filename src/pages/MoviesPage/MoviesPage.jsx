import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from '../services/movie-api'; 
import SearchBar from '../components/SearchBar/SearchBar'; 
import MovieList from '../components/MovieList/MovieList'; 
import {Loader} from '../components/Loader/Loader'; 

const MoviesPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('query') ?? '';
    const [isLoading, setIsLoading] = useState(false);

    const updateQueryString = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
    };

    useEffect(() => {
        if (!movieName) return;

        const fetchMovies = async () => {
            setIsLoading(true);
            try {
                const movies = await fetchMovieByQuery(movieName);
                setSearchResults(movies);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, [movieName]);

    return (
        <div>
            <SearchBar onSubmit={updateQueryString} />
            {isLoading ? <Loader /> : <MovieList movies={searchResults} />}
        </div>
    );
};

export default MoviesPage;
