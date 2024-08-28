import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className="w-64 h-screen color1 text-white">
      <h1 className="text-2xl font-bold p-4">Dashboard</h1>
      <ul>
          <Link to={'/User'}>
          <li className="p-4 hover:bg-buttonsHover">Home</li>  
            </Link>
         
         <Link to={'/Profile'} > 
         <li className="p-4 hover:bg-buttonsHover">Profile</li>
           </Link>
        
        <li className="p-4 hover:bg-buttonsHover">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
