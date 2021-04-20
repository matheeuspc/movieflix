import './styles.scss';
import { ReactComponent as HomeImage } from '../../core/assets/images/background.svg';
import { Route, Switch } from 'react-router';
import Login from './components/Login';

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="home-info">
                    <h1 className="home-title">Avalie Filmes</h1>
                    <p className="home-subtitle">Diga o que você achou do seu filme favorito</p>
                    <HomeImage className="home-image" />
                </div>
                <div className="auth-content">
                    <Login />
                </div>
            </div>
        </div>
    );
};

export default Home;