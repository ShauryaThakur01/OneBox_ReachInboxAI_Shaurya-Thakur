import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const ReplyPage = () => {
  const location = useLocation();
  const notification = location.state?.notification;

  const [to, setTo] = useState('');
  const [from, setFrom] = useState('tim@yourdomain.com'); // Update with Tim's email
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (notification) {
      setTo(notification.toEmail || '');
      setFrom(notification.fromEmail || 'tim@yourdomain.com');
      setSubject(`Re: ${notification.subject || ''}`);
      setBody(`\n\n---\n${notification.body || ''}`);
    }
  }, [notification]);

  const handleSendClick = () => {
    // Implement send functionality here
    console.log('Send email:', { to, from, subject, body });
    showPopupMessage('Sent');
  };

  const handleSaveDraftClick = () => {
    // Implement save draft functionality here
    console.log('Save draft:', { to, from, subject, body });
    showPopupMessage('Saved');
  };

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Sidebar />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-gray-800 text-white rounded p-4">
          <h2 className="text-2xl mb-4">Reply</h2>
          <div className="mb-2">
            <label className="block text-gray-400">To</label>
            <input 
              type="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-900 text-white"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-400">From</label>
            <input 
              type="email"
              value={from}
              readOnly
              className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-900 text-white"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-400">Subject</label>
            <input 
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-900 text-white"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Message</label>
            <textarea 
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-2 py-1 border border-gray-600 rounded bg-gray-900 text-white"
              rows="10"
            />
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={handleSendClick}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
              Send
            </button>
            <button 
              onClick={handleSaveDraftClick}
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded"
            >
              Save Draft
            </button>
          </div>
        </div>
        {showPopup && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-2 bg-green-500 text-white rounded mt-4">
            {popupMessage}
          </div>
        )}
      </main>
    </div>
  );
};

export default ReplyPage;
