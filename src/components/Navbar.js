import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebaseConfig';

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully!');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Failed to log out');
    }
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-6 bg-black text-white">
      {/* Logo */}
      <div className="flex items-center flex-1">
        {/* <img src="logo.png" alt="Logo" className="h-10" /> */}
        <span className="ml-2 text-3xl font-semibold pirata-one-regular">Satan Coffee</span>
      </div>

      {/* Links */}
      <ul className="flex-1 hidden md:flex justify-center space-x-6">
        <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
        <li><a href="#" className="hover:text-yellow-500">About</a></li>
        <li><a href="#" className="hover:text-yellow-500">Menu</a></li>
        <li><a href="#" className="hover:text-yellow-500">Contact</a></li>
        <li>
          {user ? (
            <button
              onClick={handleLogout}
              className="hover:text-yellow-500"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="hover:text-yellow-500"
            >
              Login
            </Link>
          )}
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center justify-end flex-1 space-x-4">
        <button className="hover:text-yellow-500 text-2xl">
          <FaShoppingCart />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
