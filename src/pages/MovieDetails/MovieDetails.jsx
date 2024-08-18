import React, { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/movie-api';
import Button from '../../components/Button/Button'; 
import Loader from '../../components/Loader/Loader'; 
import css from './MovieDetails.module.css';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movie = await getMovieDetails(movieId);
                setMovieDetails(movie);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovieDetails();
    }, [movieId]);
    
    if (!movieDetails) {
        return <Loader />;
    }

    return (
        <>
            <Link to={backLinkHref}>
                <Button text="- Go Back" />
            </Link>

            <div className={css.movieDetailsContainer}>
                <img
                    className={css.image}
                    src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                />
                <div>
                    <h2>{movieDetails.title}</h2>
                    <p>{movieDetails.overview}</p>
                    <p>Release date: {movieDetails.release_date}</p>
                    <p>Rating: {movieDetails.vote_average}</p>
                </div>
            </div>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default MovieDetails;
