import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import recipeImg from '../assets/recipe.png'
import newsImg from '../assets/news.png'
import ecommersImg from '../assets/ecommers.png'

const Projects = () => {
  const projects = [
    {
      title: 'Recipe Finder',
      description: 'A web application that helps users discover and explore various recipes. Built with React and modern web technologies.',
      image: recipeImg,
      technologies: ['React', 'Tailwind CSS', 'API Integration'],
      liveLink: 'https://hungry-hub-teal.vercel.app/',
      category: 'Web Application'
    },
    {
      title: 'News Portal',
      description: 'A comprehensive news platform providing latest updates and information across various categories.',
      image: newsImg,
      technologies: ['React', 'Node.js', 'REST API'],
      liveLink: 'https://www.thenews.com.pk/',
      category: 'Web Development'
    },
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution with intuitive user interface and seamless shopping experience.',
      image: ecommersImg,
      technologies: ['React', 'Redux', 'Tailwind CSS'],
      liveLink: 'https://dribbble.com/search/ecommerce',
      category: 'E-commerce'
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
            My Projects
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Showcasing my recent work and developments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>

              <div className="p-6">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in working together?
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects