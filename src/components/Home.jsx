import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTiktok, FaInstagram, FaDownload } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import profileImg from '../assets/profile.jpeg'
import resumePDF from '../assets/Shahbaz Tofeeq.pdf'

const Home = () => {
  const navigate = useNavigate()

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/",
      color: "hover:text-blue-600"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/shahbaz746",
      color: "hover:text-gray-800"
    },
    {
      icon: <FaTiktok />,
      url: "https://www.tiktok.com/@shahbaz.rao05",
      color: "hover:text-pink-600"
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/shahabaz.rao05",
      color: "hover:text-purple-600"
    }
  ]

  const handleViewWork = () => {
    const portfolioSection = document.getElementById('portfolio')
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/portfolio')
    }
  }

  const handleDownloadCV = () => {
    window.open(resumePDF, '_blank')
  }

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-black text-white px-4 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Shahbaz Tofeeq
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Frontend Developer at ERSTech
            </motion.h2>

            <motion.p
              className="text-lg text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Passionate frontend developer with 1 year of hands-on experience in creating responsive 
              and user-friendly web applications. Currently crafting innovative solutions at ERSTech, 
              specializing in modern web interfaces using React and related technologies.
            </motion.p>

            <motion.div 
              className="flex space-x-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl ${link.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                onClick={handleViewWork}
                className="px-8 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
              <motion.button
                onClick={handleDownloadCV}
                className="px-8 py-3 bg-transparent border-2 border-blue-600 rounded-full font-semibold hover:bg-blue-600/10 transition-colors duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center items-center"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-600/20 absolute top-4 left-4 blur-xl" />
              <img 
                src={profileImg} 
                alt="Shahbaz Tofeeq" 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-600 relative z-10 shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home