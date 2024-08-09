import React, { useState } from 'react';

const Editor = ({ onSave, onAddVariable }) => {
  const [content, setContent] = useState('');

  return (
    <div className="editor">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button onClick={() => onSave(content)} className="p-2 bg-green-500 text-white rounded mt-2">SAVE</button>
      <button onClick={onAddVariable} className="p-2 bg-blue-500 text-white rounded mt-2">Variables</button>
    </div>
  );
};

export default Editor;
