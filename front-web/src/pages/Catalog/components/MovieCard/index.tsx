import { Movie } from 'core/types/Movie';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ( {movie} : Props ) => {
    return (
        <div className="card-base border-radius-10 movie-card">
            <img src={movie.imgUrl} alt={movie.title} className="movie-card-image" />
            <div className="movie-info">
                <h6 className="movie-title">{movie.title}</h6>
                <p className="movie-year">{movie.year}</p>
                <p className="movie-subtitle">{movie.subTitle}</p>
            </div>
        </div>
    );
};

export default MovieCard;