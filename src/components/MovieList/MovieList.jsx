import PropTypes from 'prop-types';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
    return (
        <ul className={css.movieList}>
            {movies.map(movie => (
                <li key={movie.id} className={css.movieItem}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    })).isRequired,
};

export default MovieList;
