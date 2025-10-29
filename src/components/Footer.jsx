import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaTiktok, FaInstagram, FaEnvelope, FaCode, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin className="text-[#0077b5]" />,
      url: "https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/",
      label: "LinkedIn",
      hoverColor: "hover:text-[#0077b5]"
    },
    {
      icon: <FaGithub className="text-gray-200" />,
      url: "https://github.com/shahbaz746",
      label: "GitHub",
      hoverColor: "hover:text-gray-200"
    },
    {
      icon: <FaTiktok className="text-[#ff0050]" />,
      url: "https://www.tiktok.com/@shahbaz.rao05",
      label: "TikTok",
      hoverColor: "hover:text-[#ff0050]"
    },
    {
      icon: <FaInstagram className="text-[#e4405f]" />,
      url: "https://www.instagram.com/shahabaz.rao05",
      label: "Instagram",
      hoverColor: "hover:text-[#e4405f]"
    },
    {
      icon: <FaEnvelope className="text-[#ea4335]" />,
      url: "mailto:shahbazrao445@gmail.com",
      label: "Email",
      hoverColor: "hover:text-[#ea4335]"
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 col-span-1 lg:col-span-2"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              &lt;SHAHBAZ/&gt;
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Passionate frontend developer crafting beautiful and responsive web experiences. 
              Transforming ideas into elegant, user-friendly solutions with modern technologies.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <FaCode className="text-blue-500" />
              <span>React.js • Tailwind CSS • JavaScript</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h4>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#home" className="hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Home</span>
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#about" className="hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>About</span>
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#projects" className="hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Projects</span>
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <a href="#contact" className="hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Contact</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white relative inline-block">
              Connect
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className={`text-2xl ${link.hoverColor} transition-all duration-300 bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800`}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-sm"
        >
          <p className="flex items-center justify-center space-x-2">
            <span>Made with</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>by Shahbaz Tofeeq © {new Date().getFullYear()}</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer