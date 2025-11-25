import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users } from 'lucide-react'

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in team environments',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I'm a passionate full-stack developer with a love for creating
              innovative web applications. With expertise in modern JavaScript
              frameworks and a keen eye for design, I bring ideas to life
              through clean, efficient code.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-3" />
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

