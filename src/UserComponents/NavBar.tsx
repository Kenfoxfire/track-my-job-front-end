
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-color1 p-4  dark:bg-darkColor2 ">
      <ul className="flex justify-around">
        
        <li className="transition-transform duration-500 ease-in-out transform hover:scale-125 font-montserrat font-bold ">
        <Link to="/TableComponent" className="text-white ">
           Dashboard
          </Link>
        </li>
       
        <li className="transition-transform duration-500 ease-in-out transform hover:scale-125 font-montserrat font-bold">
           <Link to="/Profile" className="text-white ">
            Profile
          </Link>
        </li>
        <li className="transition-transform duration-500 ease-in-out transform hover:scale-125 font-montserrat font-bold" >
          <Link to="/Settings" className="text-white">
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;