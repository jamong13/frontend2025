import { motion } from 'framer-motion'
import { skills } from '@/lib/constants'

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'MongoDB'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Tools',
      skills: ['Git', 'Framer Motion'],
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-black/30"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className={`w-1 h-6 bg-gradient-to-b ${category.color} rounded-full`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 bg-gradient-to-r ${category.color} bg-opacity-20 border border-opacity-30 rounded-lg text-sm font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 200,
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, -5, 0],
                }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-sm font-medium hover:border-blue-500/50 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

