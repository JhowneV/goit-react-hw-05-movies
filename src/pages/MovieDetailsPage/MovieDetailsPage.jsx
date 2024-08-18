import { useEffect, useState, Suspense } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "services/movie-api";
import Button from '../components/Button/Button'; 
import Loader from '../components/Loader/Loader'; 
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { movieDetails, setMovieDetails } = useState(null);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        (async () => {
            try {
                const movie = await fetchMovieDetails(movieId);
                setMovieDetails(movie);
            } catch (error) {
                console.error(error);
            }
        })();
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
                </div >
            </div >
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default MovieDetailsPage;
