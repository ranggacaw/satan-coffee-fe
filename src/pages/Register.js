import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebaseConfig'
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../utils/firebaseConfig';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const passwordVisibillity = () => {
    setShowPassword((prevState) => !prevState); // untuk setting false dan true visibillity
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      // auth bawaan dari firebase , bisa localhost:3001/auth/register atau localhost:3001/register
      // await axios.post('http://localhost:3001/auth/register', { email, password }); 
      const userCredentials = await createUserWithEmailAndPassword( auth, email, password );
      const user = userCredentials.user;

      // update user profile , nambah nama
      await updateProfile(user, {
        displayName: name,
      })

      await setDoc(doc(db, 'users', user.uid), {
        name,
        email
      })

      alert('Registration successful!');
      navigate('/login');

    } catch (error) {
      console.error(error);
      alert(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-sm bg-[#131313] rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-300 mb-6">Register</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={passwordVisibillity}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-300 focus:outline-none"
            >
              {showPassword ? (
                <IoEyeOutline />
              ) : (
                <IoEyeOffOutline />
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          Register
        </button>
        <p className="text-sm text-center text-gray-300 mt-4">
          Already registered?{" "}
          <a
            href="/login"
            className="text-yellow-500 hover:underline"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
  
  
}

export default Register;