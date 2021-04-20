import { useCallback, useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';
import { Genre, MoviesResponse } from 'core/types/Movie';
import './styles.scss';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import Pagination from 'core/components/Pagination';
import { Link } from 'react-router-dom';

const Catalog = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage]= useState(0);
    const [name, setName] = useState('');
    const [genre, setGenre] = useState<Genre>();

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

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    return (
        <div className="catalog-container">
            <div className="categories-container card-base border-radius-10">Categoria</div>
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