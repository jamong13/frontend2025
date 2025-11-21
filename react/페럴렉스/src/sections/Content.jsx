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
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>Skills</SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ParallaxImage
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
              alt="Skills"
              speed={-20}
              className="h-96 shadow-xl"
            />
            <div ref={textRef.ref} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                기술 스택
              </h3>
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  추가 기술
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Vue.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
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

