import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OneboxPage from "./pages/OneboxPage";
import NotificationPage from "./pages/NotificationPage"; // Add this import
import ReplyPage from './pages/ReplyPage';
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <AuthProvider>
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-800 text-white fixed top-2 right-2"
          >
            Toggle Dark Mode
          </button>
          <Router>
            <Routes>
              <Route path="/reply" element={<ReplyPage />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/onebox" element={<OneboxPage />} />
              <Route path="/" element={<LoginPage />} />
            </Routes>
          </Router>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
