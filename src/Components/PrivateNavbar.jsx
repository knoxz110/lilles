import { useState, useEffect } from 'react';
import { Menu, ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from '../assets/logo.png';




  

const PrivateNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      setTotalItems(count);
    };

    updateCartCount();

    window.addEventListener('storage', updateCartCount); // Optional: to catch external tab updates
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/hero" className="flex items-center text-[#00302E]">
            <img className="w-10" src={logo} alt="logo" />
            <h2 className="text-2xl pl-1.5">Lilles</h2>
          </Link>

          <div className="flex items-center gap-7">
  
            <div className=" flex items-center gap-7">
             <Search className="hidden md:flex w-5 h-5 cursor-pointer" />
             <Link
                to="/Cart"
                className="relative  text-[#00302E] hover:text-[#002527] transition"
              >
                <ShoppingCart className="w-5 h-5 cursor-pointer" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
               </Link>
              
            </div>

           
            <Menu
              onClick={() => setIsOpen(true)}
              className="w-6 h-6 cursor-pointer text-[#00302E]"
            />
             <Link
                to="/reservation"
                className="bg-[#00302E] hidden md:flex text-white py-1 px-4 rounded-full hover:bg-[#002527] transition"
              >
                Book Now
              </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar (mobile and desktop) */}
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    
    </>
  );
};

export default PrivateNavbar;
