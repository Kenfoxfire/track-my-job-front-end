import MainContent from "../User/MainContent";

const Navbar = () => {
  return (
    <div className="w-full bg-color2 text-white p-4">
      <h1 className="text-2xl font-bold">My Dashboard</h1>
      <MainContent/>
    </div>
  );
};

export default Navbar;
