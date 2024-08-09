import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiEndpoint = '/api/notifications';

    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchData();
  }, []);

  const handleDraftClick = (notification) => {
    navigate('/reply', { state: { notification } });
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl">Notifications</h2>
          <p className="text-gray-500 dark:text-gray-400">Here are your notifications.</p>
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <div key={notification.id} className="bg-gray-800 text-white p-4 rounded shadow-md w-full max-w-2xl mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">{notification.fromName}</h3>
                  <span className="text-sm">{new Date(notification.sentAt).toLocaleString()}</span>
                </div>
                <div className="text-sm">
                  <p>{notification.subject}</p>
                  <p>from: {notification.fromEmail}</p>
                  <p>to: {notification.toEmail}</p>
                  {notification.cc && <p>cc: {notification.cc}</p>}
                  {notification.bcc && <p>bcc: {notification.bcc}</p>}
                  <p dangerouslySetInnerHTML={{ __html: notification.body }}></p>
                </div>
                <button 
                  onClick={() => handleDraftClick(notification)}
                  className="mt-2 px-4 py-2 bg-gray-500 text-white rounded"
                >
                  Draft
                </button>
              </div>
            ))
          ) : (
            <p>No notifications available.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default NotificationPage;
