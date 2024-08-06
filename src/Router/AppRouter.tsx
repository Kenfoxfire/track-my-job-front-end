import { Routes, Route } from 'react-router-dom';
import Register from '../RegisterForm/Register';
import User from "../User/User";
import App from '../App';

const AppRouter = () => {



    return (
        <Routes>
             <Route path='/App' element={<App/>} />
            <Route path='/Register' element={<Register />} />
            <Route path='/User' element={<User />} />
           
        </Routes>
    );
}

export default AppRouter;
