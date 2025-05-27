// src/pages/Support.jsx
import React, { useState } from 'react';

const Support = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send support message logic
    alert('Message sent!');
  };

  return (
    <div className="bg-white pb-7">
      <div className="max-w-md bg-white mt-[16%] md:mt-[10%] rounded shadow-lg py-7  mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Contact Support</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
};

export default Support;
