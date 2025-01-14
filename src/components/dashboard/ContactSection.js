import React from 'react'

const ContactSection = () => {
  return (
    <div className="py-10 px-4">
      <h1 className='text-5xl font-semibold text-center py-16 text-gray-300'><span className='text-yellow-600'>Contact</span> Us</h1>
      <form className="max-w-5xl mx-auto bg-[#131313] shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="comments" className="block text-gray-300 text-sm mb-2">
            Comments
          </label>
          <textarea
            id="comments"
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Your coffee is really good. gewlaaaa..."
          ></textarea>
        </div>
        <div className="text-center">
          <a href="#" className="inline-block rounded-md border border-transparent px-8 py-3 text-center bg-yellow-900 text-gray-300 font-semibold hover:bg-yellow-950 transition duration-300">Contact Us</a>
        </div>
      </form>
    </div>
  );
}

export default ContactSection;