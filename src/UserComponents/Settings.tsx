import React, { useState } from "react";
import NavBar from './NavBar';

const SettingsComponent: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<boolean>(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <> 
      <NavBar />
      <div className="max-w-md mx-auto p-6 bg-white dark:bg-darkBackground border border-color1 dark:border-darkColor2 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-text dark:text-darkText mb-6">Settings</h2>
        
        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-color1 dark:text-color5 font-montserrat font-bold">Dark Mode</span>
          <button
            onClick={toggleDarkMode}
            className={`w-12 h-6 flex items-center rounded-full p-1  ${
              darkMode ? "bg-buttons" : "bg-color2"
            }`}
          >
            <div
              className={`bg-color4 dark:bg-darkColor1 w-4 h-4 rounded-full shadow-md transform ${
                darkMode ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* Notifications Toggle */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-color1 dark:text-color5 font-montserrat font-bold">Enable Notifications</span>
          <button
            onClick={toggleNotifications}
            className={`w-12 h-6 flex items-center rounded-full p-1 ${
              notifications ? "bg-green-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`bg-color4 dark:bg-darkColor1 w-4 h-4 rounded-full shadow-md transform ${
                notifications ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>
        </div>

        {/* Additional Settings */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-color1 dark:text-color5 font-montserrat font-bold">Show Email Alerts</span>
          <button
            onClick={() => console.log("Email Alerts Toggled")}
            className="bg-color1 dark:bg-darkColor5 text-white  dark:text-darkText py-2 px-4 rounded-lg hover:bg-color3 hover:text-black  dark:hover:bg-darkColor3 text-lg font-bold"
          >
            Toggle
          </button>
        </div>

        {/* Save Button */}
        <button className="w-full bg-buttons dark:bg-darkButtons text-white py-2 px-4 rounded-lg hover:bg-buttonsHover dark:hover:bg-darkButtonsHover">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default SettingsComponent;
