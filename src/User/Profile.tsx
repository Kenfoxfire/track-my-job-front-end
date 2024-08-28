


const Profile = () => {
  return (

    <div className="bg-white border rounded-lg shadow-lg max-w-4xl mx-auto">
        
      <div className="relative">
        <img
          src="https://via.placeholder.com/800x200"
          alt="Cover"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute left-4 bottom-0 transform translate-y-1/2">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Obed Baltodano</h2>
            <p className="text-gray-600">Software Engineer </p>
            <p className="text-gray-500">San Francisco Bay Area | 500+ connections</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Connect
            </button>
            <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400">
              Message
            </button>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            Experienced software engineer with a passion for developing innovative programs that
            expedite the efficiency and effectiveness of organizational success.
          </p>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800">Experience</h3>
            <ul className="mt-2">
              <li className="text-gray-700">Junior Software Engineer at Tech Company</li>
              <li className="text-gray-700">Software Engineer at Another Company</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Education</h3>
            <ul className="mt-2">
              <li className="text-gray-700">Web Development Postgraduate from Fidelitas University</li>
            </ul>
          </div>
        </div>
       
      </div>
      
    </div>
 
         
  );
};

export default Profile;
