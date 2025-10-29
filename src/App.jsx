import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const location = useLocation()

  return (
    <div className="relative">
      <Navbar />
      
      {/* Progress bar that moves as you scroll */}
      <motion.div
        className="fixed top-16 left-0 right-0 h-1 bg-blue-600 origin-[0%] z-50"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
              {/* Home Section */}
              <motion.section 
                id="home" 
                className="snap-start min-h-screen pt-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Home />
              </motion.section>

              {/* About Section */}
              <motion.section 
                id="about" 
                className="snap-start min-h-screen pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <About />
              </motion.section>

              {/* Skills Section */}
              <motion.section 
                id="skills" 
                className="snap-start min-h-screen pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Skill />
              </motion.section>

              {/* Projects Section */}
              <motion.section 
                id="projects" 
                className="snap-start min-h-screen pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Projects />
              </motion.section>

              {/* Portfolio Section */}
              <motion.section 
                id="portfolio" 
                className="snap-start min-h-screen pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Portfolio />
              </motion.section>

              {/* Contact Section */}
              <motion.section 
                id="contact" 
                className="snap-start min-h-screen pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Contact />
                <Footer />
              </motion.section>
            </div>
          } />

          {/* Individual routes for direct access */}
          <Route path="/about" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-16"
            >
              <About />
              <Footer />
            </motion.div>
          } />
          <Route path="/skills" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-16"
            >
              <Skill />
              <Footer />
            </motion.div>
          } />
          <Route path="/projects" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-16"
            >
              <Projects />
              <Footer />
            </motion.div>
          } />
          <Route path="/portfolio" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-16"
            >
              <Portfolio />
              <Footer />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-16"
            >
              <Contact />
              <Footer />
            </motion.div>
          } />
        </Routes>
      </motion.div>
    </div>
  )
}

export default App