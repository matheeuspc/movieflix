import Catalog from 'pages/Catalog';
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
            <Route path="/catalog" exact>
                <Catalog />
            </Route>
        </Switch>
    </Router>
);

export default Routes;