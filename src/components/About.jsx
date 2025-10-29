import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTiktok, FaInstagram } from "react-icons/fa";
import resumePDF from "../assets/Shahbaz Tofeeq.pdf";

const About = () => {
  const handleResumeClick = () => {
    window.open(resumePDF, "_blank");
  };
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/",
      color: "hover:text-blue-600",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/shahbaz746",
      color: "hover:text-gray-800",
      label: "GitHub",
    },
    {
      icon: <FaTiktok />,
      url: "https://www.tiktok.com/@shahbaz.rao05",
      color: "hover:text-pink-600",
      label: "TikTok",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/shahabaz.rao05",
      color: "hover:text-purple-600",
      label: "Instagram",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden"
        >
          <div className="md:flex">
            {/* Left Section - Profile Info */}
            <div className="md:w-1/3 bg-blue-600 p-8 text-white">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <img
                  src="/src/assets/profile.jpeg"
                  alt="Shahbaz Tofeeq"
                  className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
                />
                <h2 className="text-2xl font-bold mb-2">Shahbaz Tofeeq</h2>
                <p className="text-blue-200 mb-6">Frontend Developer</p>

                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl text-white ${link.color} transition-transform duration-300`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Section - About Content */}
            <div className="md:w-2/3 p-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4 dark:text-white">
                  About Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I am a passionate Frontend Developer with a strong focus on
                  creating responsive and user-friendly web applications.
                  Currently working at ERSTech, I specialize in React and modern
                  web technologies. With 1 year of hands-on experience, I've
                  developed a keen eye for detail and a deep understanding of
                  user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 dark:text-white">
                      Skills
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>✓ React.js</li>
                      <li>✓ JavaScript (ES6+)</li>
                      <li>✓ HTML5 & CSS3</li>
                      <li>✓ Tailwind CSS</li>
                      <li>✓ Responsive Design</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-3 dark:text-white">
                      Experience
                    </h4>
                    <div className="space-y-4 text-gray-600 dark:text-gray-300">
                      <div>
                        <h5 className="font-medium">
                          Frontend Developer at ERSTech
                        </h5>
                        <p className="text-sm">2024 - Present</p>
                        <p className="text-sm">
                          Working on modern web applications using React and
                          related technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={handleResumeClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Download CV
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
