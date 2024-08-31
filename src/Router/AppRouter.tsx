import { Routes, Route } from 'react-router-dom';
import Register from '../RegisterForm/Register';
import App from '../App';
import { LoginForm } from '../LoginForm/LoginForm';
import UserRoutes from '../Routes/UserRoutes';
import Profile from '../UserComponents/Profile';
import MainContent from '../UserComponents/MainContent';





const AppRouter = () => {



    return (
        <Routes>
             <Route path='/' element={<App />} />
            <Route path='/Login' element={<LoginForm/>}/>
            <Route path='/Register' element={<Register />} />
            <Route path='/UserRoutes/*' element={<UserRoutes />} />
            <Route path='/MainContent' element={<MainContent/>} />
            <Route path="/Profile" element={<Profile />} />
            
            
        
        </Routes>
    );
}

export default AppRouter;
