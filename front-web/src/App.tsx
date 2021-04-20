import './app.scss';
import './core/assets/styles/custom.scss';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';

const App = () => {
    return (
        <>
            <Routes />
            <ToastContainer />
        </>
    );
}

export default App;