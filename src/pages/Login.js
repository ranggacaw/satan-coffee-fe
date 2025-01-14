import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const passwordVisibillity = () => {
    setShowPassword((prevState) => !prevState); // untuk setting false dan true visibillity
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // const response = await axios.post('http://localhost:3001/auth/login', {
      //   email,
      //   password,
      // });
      // const { token } = response.data;

      // // Simpan token ke localStorage
      // localStorage.setItem('token', token);

      await signInWithEmailAndPassword (
        auth, email, password
      )

      // Redirect ke dashboard
      navigate('/');
      console.log("success login");
    } catch (error) {
      setError('Invalid email or password');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-[#131313] rounded-lg shadow-md p-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-300 mb-6">Login</h2>
        {error && (
          <p className="text-sm text-red-500 text-center mb-4">{error}</p>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          Login
        </button>
        <p className="text-sm text-center text-gray-300 mt-4">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-yellow-500 hover:underline"
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
  
}

export default Login;