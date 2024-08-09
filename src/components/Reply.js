import React, { useState } from 'react';
import Editor from './Editor';
import { sendReply, saveDraft } from '../services/api';

const Reply = ({ threadId }) => {
  const [replyData, setReplyData] = useState({ from: '', to: '', subject: '', body: '' });
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSendReply = async () => {
    await sendReply(threadId, replyData);
    showPopupMessage('Sent');
  };

  const handleSaveDraft = async () => {
    await saveDraft(threadId, replyData);
    showPopupMessage('Saved');
  };

  const handleSave = (content) => {
    setReplyData({ ...replyData, body: content });
  };

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="From"
        value={replyData.from}
        onChange={(e) => setReplyData({ ...replyData, from: e.target.value })}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="To"
        value={replyData.to}
        onChange={(e) => setReplyData({ ...replyData, to: e.target.value })}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Subject"
        value={replyData.subject}
        onChange={(e) => setReplyData({ ...replyData, subject: e.target.value })}
        className="w-full mb-4 p-2 border border-gray-300 rounded"
      />
      <Editor onSave={handleSave} onAddVariable={() => {}} />
      <div className="flex space-x-4 mt-4">
        <button onClick={handleSendReply} className="p-2 bg-blue-500 text-white rounded">Send</button>
        <button onClick={handleSaveDraft} className="p-2 bg-gray-500 text-white rounded">Save Draft</button>
      </div>
      {showPopup && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-2 bg-green-500 text-white rounded mt-4">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Reply;
