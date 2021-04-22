import PrivateRoute from 'core/components/Routes/PrivateRoute';
import Catalog from 'pages/Catalog';
import MovieDetails from 'pages/Catalog/components/MovieDetails';
import { Router, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import history from './core/utils/history';
import Home from './pages/Home';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
        <Route path="/" exact={true}>
                <Home />
            </Route>
            <Route path="/movies">
                <Catalog />
            </Route>
            <Route path="/movies/:movieId">
                <MovieDetails />
            </Route>
        </Switch>
    </Router>
);

export default Routes;