import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    requirements: '',
    budget: '',
    timeline: ''
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: 'shahbazrao445@gmail.com',
      link: 'mailto:shahbazrao445@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      icon: <FaWhatsapp />,
      text: '+92 309 1798762',
      link: 'https://wa.me/923091798762',
      color: 'hover:text-green-500'
    },
    {
      icon: <FaLinkedin />,
      text: 'LinkedIn',
      link: 'https://www.linkedin.com/in/shahbaz-tofeeq-2a18b9303/',
      color: 'hover:text-blue-500'
    },
    {
      icon: <FaGithub />,
      text: 'GitHub',
      link: 'https://github.com/shahbaz746',
      color: 'hover:text-gray-500'
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const message = `
*New Project Inquiry!* 📝

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Budget:* ${formData.budget}
*Timeline:* ${formData.timeline}

*Requirements:*
${formData.requirements}
      `
      const whatsappUrl = `https://wa.me/923091798762?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
      
      setStatus('Opening WhatsApp...')
      setFormData({
        name: '',
        email: '',
        subject: '',
        requirements: '',
        budget: '',
        timeline: ''
      })
    } catch (error) {
      console.error('Error:', error)
      setStatus('Failed to open WhatsApp. Please try again.')
    }

    setLoading(false)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Get in Touch</h1>
          
          {/* Contact Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg ${info.color} transition-all duration-300 hover:-translate-y-1`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-2xl mr-3">{info.icon}</span>
                <span className="text-gray-800 dark:text-gray-200">{info.text}</span>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Expected budget range"
                />
              </div>
              <div>
                <label className="block text-gray-700 dark:text-gray-200 mb-2">Timeline</label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Expected timeline"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 dark:text-gray-200 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 dark:text-gray-200 mb-2">Project Requirements</label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                ></textarea>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400"
            >
              {loading ? 'Sending...' : 'Send Message via WhatsApp'}
            </motion.button>

            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 text-center ${
                  status.includes('Opening') ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact