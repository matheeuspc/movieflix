import { Router, Switch, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import history from './core/utils/history';

const Routes = () => (
    <Router history={history}>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                
            </Route>
        </Switch>
    </Router>
)

export default Routes;