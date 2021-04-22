import './styles.scss';
import { useForm } from 'react-hook-form';
import MovieReview from '../MovieReview';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Movie } from 'core/types/Movie';
import { makePrivateRequest } from 'core/utils/request';
import { isAllowedByRole } from 'core/utils/auth';
import MovieDetailsLoader from '../Loaders/MovieDetailsLoader';

type FormState = {
    text: string;
    movieId: string;
}

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();
    const history = useHistory();

    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data))
            .finally(() => setIsLoading(false));
    }, [movieId]);

    const onSubmit = (data: FormState) => {
        const payload = {
            ...data,
            movieId
        }

        makePrivateRequest({
            url: '/reviews',
            method: 'POST',
            data: payload
        })
            .then(() => {
                toast.info('Review salva com sucesso!');
                window.location.reload();
                history.push(`/movies/${movieId}`);
            })
            .catch(() => {
                toast.error('Erro ao salvar review!');
            })
    }

    return (
        <div className="movie-details-container">
            {
                isLoading ? <MovieDetailsLoader /> : (
                    <>
                        <div className="movie-details card-base border-radius-10">
                            <img src={movie?.imgUrl} alt={movie?.title} className="movie-details-image" />
                            <div className="movie-details-info">
                                <h4 className="movie-details-title">{movie?.title}</h4>
                                <p className="movie-details-year">{movie?.year}</p>
                                <p className="movie-details-subtitle">{movie?.subTitle}</p>
                                <p className="movie-details-synopsis">{movie?.synopsis}</p>
                            </div>
                        </div>
                        {
                            isAllowedByRole(['ROLE_MEMBER']) && (
                                <form className="movie-post-review card-base border-radius-10" onSubmit={handleSubmit(onSubmit)}>
                                    <textarea
                                        className="review-input input-base form-control"
                                        {...register("text", {
                                            required: "Campo obrigatório"
                                        })}
                                        placeholder="Deixe sua avaliação aqui"
                                        cols={30}
                                        rows={10}
                                    />
                                    {errors.text && (
                                        <div className="invalid-feedback d-block">
                                            {errors.text.message}
                                        </div>
                                    )}
                                    <button className="btn btn-primary btn-submit-review">
                                        <h5 className="btn-submit-text">salvar</h5>
                                    </button>
                                </form>
                            )
                        }
                        <div className="movie-old-reviews card-base border-radius-10">
                            {
                                movie?.reviews.length === 0 && (
                                    <p>Ainda não existem reviews para esse filme.</p>
                                )
                            }
                            {
                                movie?.reviews.map(review => (
                                    <MovieReview review={review} />
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default MovieDetails;