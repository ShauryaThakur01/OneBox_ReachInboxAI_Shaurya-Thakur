import React from "react";
import { useNavigate } from "react-router-dom";
// import Sidebar from "../components/Sidebar";

const OneboxPage = () => {
  const navigate = useNavigate();

  const handleNotificationsClick = () => {
    navigate("/notifications");
  };
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <aside className="w-20 bg-gray-800 text-white flex flex-col items-center py-4">
        <div className="flex flex-col items-center space-y-4">
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="material-icons">home</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="material-icons">person</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="material-icons">email</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="material-icons">send</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="material-icons">apps</span>
          </button>
          <button 
            className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
            onClick={handleNotificationsClick}
          >
            <span className="material-icons">notifications</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="material-icons">bar_chart</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src="envelope-icon-url"
            alt="Envelope"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-2xl">
            It's the beginning of a legendary sales pipeline
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            When you have inbound E-mails you'll see them here
          </p>
        </div>
      </main>
      <aside className="w-20 bg-gray-800 text-white flex flex-col items-center py-4">
        <div className="flex items-center space-x-4">
          <span className="material-icons">brightness_4</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="mt-8">
          <span>Tim's Workspace</span>
        </div>
      </aside>
    </div>
  );
};

export default OneboxPage;
