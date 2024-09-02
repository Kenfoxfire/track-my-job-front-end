import NavBar from "./NavBar";



const Profile = () => {
  return (
<>
  <NavBar />
  <div className="flex items-center justify-center max-h-screen">
    <div className="bg-white border justify-center rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
      <div className="relative">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5969/5969113.png"
          alt="Cover"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute left-4 bottom-0 transform translate-y-1/2">
          <img
            src="https://img.freepik.com/vector-premium/perfil-avatar-hombre-icono-redondo_24640-14044.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white"
          />
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800 p-10">Obed Baltodano</h2>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-500">San Jose , Costa Rica | 200+ connections</p>
          </div>
          <div className="mt-4 sm:mt-0 sm:flex-row space-y-2 sm:space-y-2 sm:space-x-2">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Connect
            </button>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400">
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
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800">Experience</h3>
            <ul className="mt-2 list-disc list-inside">
              <li className="text-gray-700">Junior Software Engineer at Tech Company</li>
              <li className="text-gray-700">Software Engineer at Another Company</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Education</h3>
            <ul className="mt-2 list-disc list-inside">
              <li className="text-gray-700">Web Development Postgraduate from Fidelitas University</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default Profile;
