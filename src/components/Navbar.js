import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Logo */}
      <div className="flex items-center flex-1">
        {/* <img src="logo.png" alt="Logo" className="h-10" /> */}
        <span className="ml-2 text-2xl font-semibold pirata-one-regular">Satan Coffee</span>
      </div>

      {/* Links */}
      <ul className="flex-1 hidden md:flex justify-center space-x-6">
        <li><a href="#" className="hover:text-yellow-500">Home</a></li>
        <li><a href="#" className="hover:text-yellow-500">About</a></li>
        <li><a href="#" className="hover:text-yellow-500">Menu</a></li>
        <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
        <li><a href="/login" className="hover:text-yellow-500">Login</a></li>
      </ul>

      {/* Icons */}
      <div className="flex items-center justify-end flex-1 space-x-4">
        <button className="hover:text-yellow-500">
          <FaSearch />
        </button>
        <button className="hover:text-yellow-500">
          <FaShoppingCart />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
