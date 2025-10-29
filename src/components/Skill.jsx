import React from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

const Skill = () => {
  const skills = [
    {
      name: 'HTML5',
      level: '100%',
      color: 'from-orange-500 to-orange-600',
      icon: <FaHtml5 className="text-orange-500" />
    },
    {
      name: 'CSS3',
      level: '95%',
      color: 'from-blue-500 to-blue-600',
      icon: <FaCss3Alt className="text-blue-500" />
    },
    {
      name: 'JavaScript',
      level: '90%',
      color: 'from-yellow-400 to-yellow-500',
      icon: <FaJs className="text-yellow-400" />
    },
    {
      name: 'React',
      level: '85%',
      color: 'from-cyan-400 to-cyan-500',
      icon: <FaReact className="text-cyan-400" />
    },
    {
      name: 'Tailwind CSS',
      level: '90%',
      color: 'from-teal-400 to-teal-500',
      icon: <SiTailwindcss className="text-teal-400" />
    },
    {
      name: 'Bootstrap',
      level: '85%',
      color: 'from-purple-500 to-purple-600',
      icon: <FaBootstrap className="text-purple-500" />
    },
    {
      name: 'Git',
      level: '80%',
      color: 'from-red-500 to-red-600',
      icon: <FaGitAlt className="text-red-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {skill.level}
                  </span>
                </div>
              </div>

              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Always Learning
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Continuously expanding my skill set and staying up-to-date with the latest web technologies.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Skill