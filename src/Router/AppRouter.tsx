import { Routes, Route } from 'react-router-dom';
import Register from '../RegisterForm/Register';
import App from '../App';

const AppRouter = () => {



    return (
        <Routes>
             <Route path='/App' element={<App/>} />
            <Route path='/Register' element={<Register />} />
           
        </Routes>
    );
}

export default AppRouter;
