import React from "react";

const Navbar = () => {
  return (
    <nav className="relative w-full bg-white shadow-sm fixed top-0 left-0 z-50 overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bubble bg-green-500 top-10 left-20"></div>
        <div className="bubble bg-blue-500 top-1/2 left-1/3"></div>
        <div className="bubble bg-red-500 top-1/4 left-2/3"></div>
        <div className="bubble bg-gray-400 top-3/4 left-1/4"></div>
        <div className="bubble bg-blue-600 top-1/3 left-1/2"></div>
      </div>

      {/* Navbar Content */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-green-500 text-white font-bold text-xl rounded-md w-8 h-8 flex items-center justify-center">
            S
          </div>
          <span className="text-xl font-semibold text-gray-800">
            Shahbaz<span className="text-green-500">Agency</span>
          </span>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className="hover:text-green-500 cursor-pointer">About</li>
          <li className="hover:text-green-500 cursor-pointer">Skills</li>
          <li className="hover:text-green-500 cursor-pointer">Portfolio</li>
          <li className="hover:text-green-500 cursor-pointer">Testimonial</li>
        </ul>

        {/* Button */}
        <button className="border-2 border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition duration-300">
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
