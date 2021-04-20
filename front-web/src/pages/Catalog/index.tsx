import MovieCard from './components/MovieCard';
import './styles.scss';

const Catalog = () => {
    return (
        <div className="catalog-container">
            <div className="categories-container card-base border-radius-10">Categoria</div>
            <div className="catalog-movies">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    );
};

export default Catalog;