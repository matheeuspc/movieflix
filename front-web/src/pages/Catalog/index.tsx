import { useCallback, useEffect, useState } from 'react';
import Select from 'react-select';
import MovieCard from './components/MovieCard';
import { Genre, MoviesResponse } from 'core/types/Movie';
import './styles.scss';
import { makePrivateRequest } from 'core/utils/request';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import Pagination from 'core/components/Pagination';
import { Link } from 'react-router-dom';


const Catalog = () => { 
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage]= useState(0);
    const [name] = useState('');
    const [genre, setGenre] = useState<Genre>();
    const [isLoadingGenres, setIsLoadingGenres] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);

    const getMovies = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 10,
            name,
            genreId: genre?.id
        }
        setIsLoading(true);
        makePrivateRequest({url: '/movies', params})
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            })
    }, [activePage, name, genre]);

    const handleChangeGenre = (genre: Genre) => {
        setGenre(genre);
        setActivePage(0);
    }

    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({ url: '/genres'})
            .then(response => setGenres(response.data))
            .finally(() => setIsLoadingGenres(false));
    }, []);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return (
        <div className="catalog-container">
            <div className="genres-container card-base border-radius-10">
            <Select
                name="genres"
                key={`select-${genre?.id}`}
                value={genre}
                isLoading={isLoadingGenres}
                options={genres}
                getOptionLabel={(option: Genre) => option.name}
                getOptionValue={(option: Genre) => String(option.id)}
                placeholder="Gêneros"
                className="genre-select-container"
                classNamePrefix="movie-genres-select"
                inputId="genres"
                onChange={value => handleChangeGenre(value as Genre)}
                isClearable
            />
            </div>
            <div className="catalog-movies">
                {
                    isLoading ? <MovieCardLoader /> : (
                        moviesResponse?.content.map(movie => (
                            <Link to={`/movies/${movie.id}`} key={movie.id}>
                                <MovieCard movie={movie} />
                            </Link>
                        ))
                    )
                }
            </div>
            {moviesResponse && (
                <Pagination
                    totalPages={moviesResponse?.totalPages}
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            )}
        </div>
    );
};

export default Catalog;