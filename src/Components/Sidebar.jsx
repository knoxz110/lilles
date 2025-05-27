// 
import { X, Search, UserCircle2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Users from '../Components/UtilityUsers'; // Adjust path if needed

const Sidebar = ({ onClose, isOpen }) => {
  const loggedInEmail = sessionStorage.getItem('loggedInUserEmail');

  // This code get the name of the user logged in through the email used tho log in.
  const loggedInUser = Users.find(user => user.email === loggedInEmail);

  const handleLogout = () => {
    sessionStorage.clear()
    toast.success('Logged out successfully')
    window.location.reload()
    //navigate('/signin')
  }

  return (
    <div className={clsx("fixed inset-0 z-50", !isOpen && "pointer-events-none")}>
      <div
        className={clsx(
          "absolute inset-0 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      <div
        className={clsx(
          "relative ml-auto h-full w-64 bg-white p-6 shadow-xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button onClick={onClose} className="absolute top-4 right-4">
          <X className="w-6 h-6 text-gray-700" />
        </button>

        <div className="flex  mb-4 mt-10">
          <Link
            to="/profile"
            className="flex items-center text-[#00302E] hover:text-[#00302e9d] "
            >
          <UserCircle2Icon className="w-8 h-8  mr-1" />
          <h2 className="text-[14px] font-semibold  truncate max-w-[140px]">
            {loggedInUser?.name || 'Guest'}
          </h2>
          </Link>
          
        </div>

        <div className="flex md:hidden  items-center">
          <Search className="w-5  h-5 mr-2 text-gray-700" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 border border-gray-300 px-2 py-1 rounded focus:outline-none"
          />
        </div>

        <nav className="mt-4 space-y-3">
          <Link to="/hero" className="block text-[#00302E] hover:text-white hover:bg-[#00302E] hover:bg-opacity-10 p-2 rounded transition">
            Home
          </Link>
          <Link to="/menu" className="block text-[#00302E] hover:text-white hover:bg-[#00302E] hover:bg-opacity-10 p-2 rounded transition">
            Menu
          </Link>
          <Link to="/profile" className="block text-[#00302E] hover:text-white hover:bg-[#00302E] hover:bg-opacity-10 p-2 rounded transition">
            Profile
          </Link>
          <Link to="/orders" className="block text-[#00302E] hover:text-white hover:bg-[#00302E] hover:bg-opacity-10 p-2 rounded transition">
            Orders
          </Link>
        </nav>

        <Link
          to="/reservation"
          className="mt-6 block md:hidden w-full bg-[#00302E] text-white py-2 text-center rounded-full hover:bg-[#00302e6c] hover:text-[#00302E] transition"
        >
          Book Now
        </Link>
        <Link
        onClick={handleLogout}
        to="/login"
        className="mt-6 block bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-center rounded-full "
      >
        Logout
      </Link>
      </div>
      
    </div>
  );
};

export default Sidebar;
