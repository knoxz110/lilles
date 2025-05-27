// components/Navbar.jsx
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import img1 from '../assets/logo.png';
import { Link } from 'react-router-dom';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#00302E] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/">
             <div className=" justify-between items-center flex text-white">
            <img className='w-10' src={img1} alt="logo" />
            <h2 className='pt-3.5 text-2xl pl-0.5'>Lilles</h2>  
            </div>

        </Link>
       
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-16 text-white">
          <Link to="/" className="hover:text-[#ffd700] p-2 px-5 ">Home</Link>
          <Link to="/login" className="hover:text-[#ffd700] p-2 px-5 hover:border-b-blue-50 ">Login</Link>
          <Link to="/signup" className=" border text-[#00302E] bg-[#ffd700] border-[#f7d308] pt-1.5 px-5 rounded hover:bg-[#00302E] hover:text-[#ffd700]">Signup</Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white pt-3 ">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center bg-[#00302E]  px-4 pb-10 space-y-7">
          <Link to="/" className="block rounded text-white hover:text-[#ffd700]  hover:bg-[#0000003d] p-2.5 ">Home</Link>
          <Link to="/login" className="block rounded text-white hover:text-[#ffd700] hover:bg-[#0000003d] p-2.5 ">Login</Link>
          <Link to="/signup" className="block border text-[#ffd700] border-[#FFD700] p-2 rounded hover:bg-[#00000028] hover:border-[#ffd700] ">Signup</Link>
        </div>
      )}
    </nav>
  );
}
