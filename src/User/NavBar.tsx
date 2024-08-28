import MainContent from "../User/MainContent";

const Navbar = () => {
  return (
    <div className="w-full bg-color2 text-white p-4">
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      
      <div className="p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <img className="w-16 h-16 rounded-full border-2 border-gray-300" src="https://bestarion.com/wp-content/uploads/2021/03/Web-Developer.jpg" alt="Profile Picture"/>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Obed Baltodano</h2>
            <p className="text-gray-600">@obed-dev</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-sm">
            Software Engineer. Passionate about coding, coffee, and good design.
          </p>
        </div>
        <div className="mt-4 flex">
          <button className="text-white bg-blue-500 hover:bg-blue-600 font-semibold py-2 px-4 rounded mr-2">
            Follow
          </button>
          <button className="text-blue-500 border border-blue-500 hover:bg-blue-50 font-semibold py-2 px-4 rounded">
            Message
          </button>
        </div>
      </div>
    </div>
      <h1 className="text-2xl font-bold">My Dashboard</h1>
      <MainContent/>
    </div>
  );
};

export default Navbar;
