// src/pages/Notifications.jsx
import React, { useState } from 'react';

const Notifications = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleSave = () => {
    // Save notification preferences
    alert('Notification preferences updated!');
  };

  return (
    <div className="bg-white pb-7">
      <div className="max-w-md bg-white mt-[16%] md:mt-[10%] rounded shadow-lg  mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
            />
          </div>
          <div className="flex items-center justify-between">
            <span>SMS Notifications</span>
            <input
              type="checkbox"
              checked={smsNotifications}
              onChange={() => setSmsNotifications(!smsNotifications)}
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
