import { Movie } from 'core/types/Movie';
import './styles.scss';

// type Props = {
//     // movie: Movie;
//     movie: {
//         imgUrl: 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2/eFw5YSorHidsajLTayo1noueIxI.jpg',
//         title: 'Esquadrão 6',
//         subtitle: 'Dizem que ninguém pode salvar o mundo. Conheça Ninguém',
//         year: '2019',
//         synopsys: 'Após forjar a própria morte, um bilionário monta uma equipe de profissionais internacionais para a ousada e sanguinária missão de derrubar um ditador cruel.',
//     }
// }

const MovieCard = ( ) => {
    return (
        <div className="card-base border-radius-10 movie-card">
            <img src='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/eFw5YSorHidsajLTayo1noueIxI.jpg' alt='Esquadrão 6' className="movie-card-image" />
            <div className="movie-info">
                <h6 className="movie-title">Esquadrão 6</h6>
                <p className="movie-year">2019</p>
                <p className="movie-synopsis">Após forjar a própria morte, um bilionário monta uma equipe de profissionais internacionais para a ousada e sanguinária missão de derrubar um ditador cruel.</p>
            </div>
        </div>
    );
};

export default MovieCard;