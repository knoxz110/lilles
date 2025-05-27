// src/pages/Profile.jsx
import React, { use } from 'react';
import Users  from '../Components/UtilityUsers';

const UserPage = () => {
 const loggedInEmail = sessionStorage.getItem('loggedInUserEmail');
 const loggedInUser = Users.find(user => user.email === loggedInEmail);



  return (
    <div className="bg-white pb-7">
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-lg mt-[10%]">
        <h2 className="text-2xl text-center font-bold mb-6">User Profile</h2>
        
        <img
            src={loggedInUser?.photo || "https://i.pravatar.cc/100"}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
            />
        <div className="mb-4">
            <strong>Name:</strong> {loggedInUser?.name}
        </div>
        
        <div className="mb-4">
            <strong>Email:</strong> {loggedInUser.email}
        </div>
        
        <div className="mb-4">
            <strong>Phone:</strong> {loggedInUser?.Phone}
        </div>
        
        <div className="mb-4">
            <strong>Address:</strong> {loggedInUser?.Address}
        </div>
        
        <div className="mb-4">
            <strong>State:</strong> {loggedInUser?.State}
        </div>
        
        <div className="mb-4">
            <strong>Country:</strong> {loggedInUser?.Country}
        </div>
        </div>
    </div>
  );
};

export default UserPage;
