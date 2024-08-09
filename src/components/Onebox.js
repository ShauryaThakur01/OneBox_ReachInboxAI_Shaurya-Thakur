import React, { useState, useEffect } from 'react';
import { fetchOneboxList, deleteThread } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Onebox = () => {
  const [threads, setThreads] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getThreads = async () => {
      const response = await fetchOneboxList();
      setThreads(response.data);
    };

    getThreads();
  }, []);

  const handleDelete = async (threadId) => {
    await deleteThread(threadId);
    setThreads(threads.filter(thread => thread.id !== threadId));
  };

  const handleKeyDown = (event, threadId) => {
    if (event.key === 'D') {
      handleDelete(threadId);
    } else if (event.key === 'R') {
      navigate(`/reply/${threadId}`);
    }
  };

  return (
    <div className="p-4">
      {threads.map(thread => (
        <div
          key={thread.id}
          onKeyDown={(e) => handleKeyDown(e, thread.id)}
          tabIndex="0"
          className="border-b p-2"
        >
          {thread.subject}
        </div>
      ))}
    </div>
  );
};

export default Onebox;
