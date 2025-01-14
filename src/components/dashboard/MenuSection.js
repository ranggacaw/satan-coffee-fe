import React from 'react';
import menuItems from '../../data/dataMenu';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebaseConfig';

const MenuSection = () => {
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const user = auth.currentUser;

    if (!user) {
      // If no user is logged in, redirect to login
      alert('You must be logged in to add items to the cart!');
      navigate('/login');
      return;
    }

    // Perform the Add to Cart action (e.g., update Firestore, local state, or backend)
    console.log('Item added to cart:', item);
    alert(`${item.name} has been added to your cart!`);
  }

  return (
    <div className="bg-black text-white py-10 px-4">
      <h1 className='text-5xl font-semibold text-center py-6 mb-10 text-gray-300'><span className='text-yellow-600'>Our</span> Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-transparent border border-gray-800 rounded-lg shadow-md py-10 flex flex-col items-center text-center hover:bg-white hover:text-gray-900 transition duration-600 ease-in-out"
          >
            <p className="text-center object-contain mb-6 text-[3rem]">{item.icon}</p>
            <h3 className="text-lg font-medium mb-2">{item.name}</h3>
            <p className="text-lg font-medium mb-4">{item.price}</p>
            
            <button onClick={handleAddToCart} className="inline-block rounded-md border border-transparent px-8 py-3 text-center bg-yellow-900 text-gray-300 font-semibold hover:bg-yellow-950">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;

