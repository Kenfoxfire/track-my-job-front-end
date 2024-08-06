
import Sidebar from '../User/NavBar';
import Navbar from '../User/SideBar';



function User() {
  return (
    <>
    <div className="flex ">
   
      <Sidebar />
      
      <div className="flex-1 flex flex-col ">
      
        <Navbar />
        
      </div>
  
    </div>
    
   
 
    </>
    
  );
}

export default User;
