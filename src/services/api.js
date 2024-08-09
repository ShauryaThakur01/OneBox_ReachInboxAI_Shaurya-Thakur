import axios from 'axios';

const API_BASE_URL = 'YOUR_API_BASE_URL';

export const fetchOneboxList = async () => {
  return await axios.get(`${API_BASE_URL}/onebox/list`);
};

export const fetchThread = async (threadId) => {
  return await axios.get(`${API_BASE_URL}/onebox/${threadId}`);
};

export const deleteThread = async (threadId) => {
  return await axios.delete(`${API_BASE_URL}/onebox/${threadId}`);
};

export const sendReply = async (threadId, replyData) => {
  return await axios.post(`${API_BASE_URL}/reply/${threadId}`, replyData);
};

export const saveDraft = async (threadId, replyData) => {
  // Make an API call to save the draft
  // Replace the URL and payload with your actual API details
  const response = await fetch(`http://localhost:5000/drafts/${threadId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(replyData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to save draft');
  }
  
  return await response.json();
};

