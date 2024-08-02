

const Sidebar = () => {
  return (
    <div className="w-64 h-screen color1 text-white">
      <h1 className="text-2xl font-bold p-4">Dashboard</h1>
      <ul>
        <li className="p-4 hover:bg-buttonsHover">Home</li>
        <li className="p-4 hover:bg-buttonsHover">Profile</li>
        <li className="p-4 hover:bg-buttonsHover">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
