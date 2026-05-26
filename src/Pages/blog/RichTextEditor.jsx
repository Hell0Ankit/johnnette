import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const RichTextEditor = () => {
  const [content, setContent] = useState('');

  const handleLogContent = () => {
    console.log("Copy this HTML to PostData.jsx:", content);
    alert("HTML printed to Console (F12)");
  };

  return (
    <div className="p-8 bg-white border rounded-lg">
      <h2 className="mb-4 font-bold">Write Your Blog Description</h2>
      
      <ReactQuill 
        theme="snow" 
        value={content} 
        onChange={setContent} 
        className="h-64 mb-12"
      />

      <button 
        onClick={handleLogContent}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded font-bold"
      >
        Generate HTML for PostData
      </button>
    </div>
  );
};

export default RichTextEditor;