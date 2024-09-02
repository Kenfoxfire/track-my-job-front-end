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
<div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Settings</h2>
      
      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
        <button
          onClick={toggleDarkMode}
          className={`w-12 h-6 flex items-center rounded-full p-1 ${
            darkMode ? "bg-blue-600" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
              darkMode ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>

      {/* Notifications Toggle */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700 dark:text-gray-300">Enable Notifications</span>
        <button
          onClick={toggleNotifications}
          className={`w-12 h-6 flex items-center rounded-full p-1 ${
            notifications ? "bg-green-600" : "bg-gray-300"
          }`}
        >
          <div
            className={`bg-white w-4 h-4 rounded-full shadow-md transform ${
              notifications ? "translate-x-6" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>

      {/* Additional Settings */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-700 dark:text-gray-300">Show Email Alerts</span>
        <button
          onClick={() => console.log("Email Alerts Toggled")}
          className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          Toggle
        </button>
      </div>

      {/* Save Button */}
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Save Changes
      </button>
    </div>


</>

  );
};

export default SettingsComponent;
