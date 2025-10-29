import React from 'react'
import { motion } from 'framer-motion'
import recipeImg from '../assets/recipe.png'
import newsImg from '../assets/news.png'
import ecommersImg from '../assets/ecommers.png'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Recipe Finder',
      category: 'Web Application',
      image: recipeImg,
      link: 'https://hungry-hub-teal.vercel.app/',
      technologies: ['React', 'Tailwind CSS', 'API Integration']
    },
    {
      id: 2,
      title: 'News Portal',
      category: 'Web Development',
      image: newsImg,
      link: 'https://www.thenews.com.pk/',
      technologies: ['React', 'Node.js', 'REST API']
    },
    {
      id: 3,
      title: 'E-commerce Platform',
      category: 'E-commerce',
      image: ecommersImg,
      link: 'https://dribbble.com/search/ecommerce',
      technologies: ['React', 'Redux', 'Tailwind CSS']
    }
  ]

  const categories = ['All', 'Web Application', 'Web Development', 'E-commerce']
  const [activeCategory, setActiveCategory] = React.useState('All')
  const [filteredProjects, setFilteredProjects] = React.useState(projects)

  const filterProjects = (category) => {
    setActiveCategory(category)
    if (category === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === category))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Explore my latest projects and creative works
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => filterProjects(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
                  {project.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio