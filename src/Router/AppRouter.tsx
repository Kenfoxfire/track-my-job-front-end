import { Routes, Route } from 'react-router-dom';
import Register from '../RegisterForm/Register';
import User from "../User/User";
import App from '../App';
import { LoginForm } from '../LoginForm/LoginForm';
import Profile from '../User/Profile';

const AppRouter = () => {



    return (
        <Routes>
             <Route path='/' element={<App />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/User' element={<User />} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/Login' element={<LoginForm/>}/>
        
        </Routes>
    );
}

export default AppRouter;
