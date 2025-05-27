import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiUser,
  FiBell,
  FiCreditCard,
  FiMessageCircle,
  FiLogOut,
  FiStar,
  FiPhone,
  FiClock
} from 'react-icons/fi';
import Users from '../Components/UtilityUsers'; // Array of users

const UserProfile = () => {
  const handleLogout = () => {
    sessionStorage.clear()
    toast.success('Logged out successfully')
    window.location.reload()
    //navigate('/signin')
  }
  const loggedInEmail = sessionStorage.getItem('loggedInUserEmail');
  const loggedInUser = Users.find(user => user.email === loggedInEmail);

  return (
   <div className="w-full bg-white pb-7" >
     <div className="max-w-md mx-auto mt-[16%] md:mt-[10%]  p-4 bg-white rounded-lg shadow-lg min-h-screen">
      <div className="flex flex-col items-center text-center">
        <img
          src={loggedInUser?.photo || "https://i.pravatar.cc/100"}
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-bold">{loggedInUser?.name || 'Guest'}</h2>
        <p className="text-gray-500">{loggedInEmail || 'user@email.com'}</p>
        <Link
          to="/user-profile"
          className="text-blue-500 hover:underline mt-1"
        >
          View Profile
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        <Link to="/edit-profile" className="flex items-center justify-between p-3 bg-gray-100 rounded">
          <span className="flex items-center gap-2"><FiUser /> Manage account</span>
        </Link>
        <Link to="/cardDetails" className="flex items-center justify-between p-3 bg-gray-100 rounded">
          <span className="flex items-center gap-2"><FiCreditCard /> Card Details</span>
        </Link>
        <Link to="/notifications" className="flex items-center justify-between p-3 bg-gray-100 rounded">
          <span className="flex items-center gap-2"><FiBell /> Notifications</span>
        </Link>
        <Link to="/order-History" className="flex items-center justify-between p-3 bg-gray-100 rounded">
          <span className="flex items-center gap-2"><FiClock /> Order History</span>
        </Link>
        <Link to="/support" className="flex items-center justify-between p-3 bg-gray-100 rounded">
          <span className="flex items-center gap-2"><FiPhone /> Contact Support</span>
        </Link>
        <Link to="/review" className="flex items-center justify-between p-3 bg-gray-100 rounded">
          <span className="flex items-center gap-2"><FiStar /> Write a Review</span>
        </Link>
        <Link   onClick={handleLogout}
        className="flex items-center justify-between p-3 bg-red-100 text-red-600 rounded"
        to="/login"
        >
          <span className="flex items-center gap-2"><FiLogOut /> Sign out</span>
        </Link>
      </div>
    </div>
   </div>
  );
};

export default UserProfile;
