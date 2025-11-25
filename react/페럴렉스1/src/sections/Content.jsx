import { Element } from 'react-scroll'
import { useParallax } from 'react-scroll-parallax'
import ParallaxImage from '../components/ParallaxImage'
import SectionTitle from '../components/SectionTitle'

const Content = () => {
  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Node.js', level: 80, color: 'bg-green-500' },
    { name: 'CSS/SCSS', level: 90, color: 'bg-pink-500' },
    { name: 'Git', level: 85, color: 'bg-orange-500' },
  ]

  const textRef = useParallax({ speed: 10 })

  return (
    <Element name="content">
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <SectionTitle>Skills</SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
              alt="Skills"
              speed={-20}
              className="h-64 sm:h-80 md:h-96 shadow-xl order-1 md:order-1"
            />
            <div ref={textRef.ref} className="space-y-4 sm:space-y-6 order-2 md:order-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                기술 스택
              </h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-base text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-sm sm:text-base text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="pt-4 sm:pt-6">
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                  추가 기술
                </h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['Vue.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default Content


