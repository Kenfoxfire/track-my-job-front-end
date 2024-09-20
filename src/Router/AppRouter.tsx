import { Routes, Route } from 'react-router-dom';
import Register from '../RegisterForm/Register';
import App from '../App';
import { LoginForm } from '../LoginForm/LoginForm';
import Profile from '../UserComponents/Profile';
import TableComponent from '../UserComponents/TableComponent';
import SettingsComponent from '../UserComponents/Settings';





const AppRouter = () => {



    return (
        <Routes>
             <Route path='/' element={<App />} />
            <Route path='/Login' element={<LoginForm/>}/>
            <Route path='/Register' element={<Register />} />
            <Route path='/TableComponent' element={<TableComponent/>} />
            <Route path="/Profile" element={<Profile />} />
            <Route path='/Settings' element={<SettingsComponent/>}  />
            
        </Routes>
    );
}

export default AppRouter;
