import React from "react";
import NavBar from "./NavBar";
import perfil from "../assets/obed-animated.jpg";

const Profile: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center max-h-screen">
        <div className="bg-white dark:bg-darkBackground border border-color1 dark:border-darkColor1 rounded-lg shadow-lg max-w-4xl mx-auto overflow-hidden">
          <div className="relative">
            <img
              src="https://selfmadewebdesigner.com/wp-content/uploads/2020/07/how-to-advance-your-career-as-a-frontend-web-developer.jpg"
              alt="Cover"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="absolute left-4 bottom-0 transform translate-y-1/2">
              <img
                src={perfil}
                className="w-24 h-24 rounded-full border-4 border-color4 dark:border-darkColor2"
              />
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-montserrat font-bold text-black dark:text-darkText p-10">Obed Baltodano</h2>
                <p className="text-color2 font-montserrat font-bold dark:text-color5">Software Engineer</p>
                <p className="text-color2 font-montserrat font-bold  dark:text-color5">San Jose, Costa Rica | 200+ connections</p>
              </div>
              <div className="mt-4 sm:mt-0 sm:flex-row space-y-2 sm:space-y-2 sm:space-x-2">
                <button className="bg-buttons dark:bg-darkButtons text-white py-2 px-4 rounded-lg hover:bg-buttonsHover dark:hover:bg-darkButtonsHover">
                  Connect
                </button>
                <button className="bg-buttons dark:bg-darkButtons text-white dark:text-darkText py-2 px-4 rounded-lg hover:bg-buttonsHover dark:hover:bg-darkButtonsHover">
                  Message
                </button>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-color1 dark:text-darkText font-montserrat font-bold">
                Experienced software engineer with a passion for developing innovative programs that
                expedite the efficiency and effectiveness of organizational success.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-color1 dark:text-darkText font-montserrat font-bold">Experience</h3>
                <ul className="mt-2 list-disc list-inside text-color1 dark:text-darkText font-montserrat ">
                  <li>Junior Software Engineer at Tech Company</li>
                  <li>Software Engineer at Another Company</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-color1 dark:text-darkText">Education</h3>
                <ul className="mt-2 list-disc list-inside text-color1 dark:text-darkText">
                  <li>Web Development Postgraduate from Fidelitas University</li>
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
