import React from "react";
import profileImg from "../assets/profile.jpeg"; // make sure the path is correct

const Home = () => {
  return (
    <section className="relative w-full bg-white py-20 flex flex-col md:flex-row justify-between items-center overflow-hidden">
      {/* Floating Bubbles (behind everything) */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="bubble bg-green-400 top-10 left-20"></div>
        <div className="bubble bg-blue-400 top-1/2 left-1/3"></div>
        <div className="bubble bg-pink-400 top-1/4 left-2/3"></div>
        <div className="bubble bg-yellow-400 top-3/4 left-1/4"></div>
        <div className="bubble bg-purple-400 top-1/3 left-1/2"></div>
      </div>

      {/* Left Text Section */}
      <div className="max-w-xl px-6 md:pl-24 text-center md:text-left md:mr-60">
        <div className="mb-4 flex justify-center md:justify-start">
          <span className="border border-green-500 text-green-500 px-4 py-1 rounded-full text-sm font-medium">
            Welcome
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          I have <span className="text-green-500">Creative Front-End</span>{" "}
          <br /> Development Experience
        </h1>

        <p className="text-gray-600 mt-4">
          I’m <strong>Shahbaz</strong>, a passionate Front-End Developer with 1
          year of experience creating responsive and modern web interfaces using{" "}
          <strong>React.js</strong>, <strong>Bootstrap</strong>, and{" "}
          <strong>Tailwind CSS</strong>.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-green-500 text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 hover:scale-105 transform transition duration-300">
            Contact Me
          </button>
          <a
            href="#portfolio"
            className="flex items-center justify-center text-gray-800 font-medium hover:text-green-500 transition duration-300"
          >
            View Portfolio{" "}
            <span className="ml-1 text-2xl font-bold hover:translate-x-1 transform duration-300">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-12 md:mt-0 md:mr-60">
        <div className="bg-green-500 w-72 h-80 md:w-80 md:h-96 rounded-md"></div>
        <img
          src={profileImg}
          alt="Shahbaz"
          className="absolute top-5 left-5 w-72 h-80 md:w-80 md:h-96 object-cover rounded-md border-4 border-white shadow-lg hover:scale-105 transform transition duration-300"
        />
      </div>

      {/* Social Links */}
      <div className="hidden md:flex flex-col items-center absolute right-6 top-1/3 space-y-4">
        <span className="text-gray-700 text-sm font-medium rotate-90 mb-8 tracking-wide">
          Follow me on:
        </span>

        <a
          href="https://www.instagram.com/shahbaz.rao05"
          target="_blank"
          rel="noreferrer"
          className="text-pink-500 hover:text-pink-600 transform hover:scale-125 transition duration-300"
        >
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a
          href="https://www.tiktok.com/@shahbaz.rao05?_t=ZS-90uBbZBQZLo&_r=1"
          target="_blank"
          rel="noreferrer"
          className="text-black hover:text-gray-700 transform hover:scale-125 transition duration-300"
        >
          <i className="fab fa-tiktok text-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-700 transform hover:scale-125 transition duration-300"
        >
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-800 hover:text-black transform hover:scale-125 transition duration-300"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
