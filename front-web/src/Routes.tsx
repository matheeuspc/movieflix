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
        <Route path="/" exact>
                <Home />
            </Route>
            <PrivateRoute path="/movies">
                <Catalog />
            </PrivateRoute>
            <PrivateRoute path="/movies/:movieId">
                <MovieDetails />
            </PrivateRoute>
        </Switch>
    </Router>
);

export default Routes;