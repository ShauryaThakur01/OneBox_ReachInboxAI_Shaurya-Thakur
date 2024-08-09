import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    console.log(`Navigating to ${path}`);
    navigate(path);
  };

  return (
    <aside className="w-20 bg-gray-800 text-white flex flex-col items-center py-4">
      <div className="flex flex-col items-center space-y-4">
        <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center" onClick={() => handleNavigation('/onebox')}>
          <span className="material-icons">home</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center" onClick={() => handleNavigation('/profile')}>
          <span className="material-icons">person</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center" onClick={() => handleNavigation('/emails')}>
          <span className="material-icons">email</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center" onClick={() => handleNavigation('/send')}>
          <span className="material-icons">send</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center" onClick={() => handleNavigation('/apps')}>
          <span className="material-icons">apps</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center" onClick={() => handleNavigation('/notifications')}>
          <span className="material-icons">notifications</span>
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center" onClick={() => handleNavigation('/analytics')}>
          <span className="material-icons">bar_chart</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
