import './styles.scss';
import { useForm } from 'react-hook-form';
import MovieReview from '../MovieReview';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Movie, Review } from 'core/types/Movie';
import { makePrivateRequest, makeRequest } from 'core/utils/request';

type FormState = {
    review: string;
    userId: string;
}

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => setIsLoading(false));
    }, [movieId]);

    return (
        <div className="movie-details-container">
            <div className="movie-details card-base border-radius-10">
                <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-image" />
                <div className="movie-details-info">
                    <h4 className="movie-details-title">{movie?.title}</h4>
                    <p className="movie-details-year">{movie?.year}</p>
                    <p className="movie-details-subtitle">{movie?.subTitle}</p>
                    <p className="movie-details-synopsis">{movie?.synopsis}</p>
                </div>
            </div>
            <form className="movie-post-review card-base border-radius-10">
                <textarea
                    className="review-input input-base form-control"
                    {...register("review")}
                    placeholder="Deixe sua avaliação aqui"
                    cols={30}
                    rows={10}
                />
                <button className="btn btn-primary btn-submit-review">
                    <h5 className="btn-submit-text">salvar</h5>
                </button>
            </form>
            <div className="movie-old-reviews card-base border-radius-10">
                {
                    movie?.reviews.map(review => (
                        <MovieReview review={review}/>
                    ))
                }   
            </div>
        </div>
    );
};

export default MovieDetails;