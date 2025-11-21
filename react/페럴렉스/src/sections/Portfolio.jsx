import { Element } from 'react-scroll'
import { useParallax } from 'react-scroll-parallax'
import SectionTitle from '../components/SectionTitle'

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'React와 Node.js를 활용한 쇼핑몰 플랫폼',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Task Management App',
      description: '실시간 협업을 위한 프로젝트 관리 도구',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600',
      tags: ['Vue.js', 'Firebase', 'TypeScript'],
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: '실시간 날씨 정보를 제공하는 대시보드',
      image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600',
      tags: ['React', 'API', 'Chart.js'],
    },
    {
      id: 4,
      title: 'Social Media App',
      description: '소셜 네트워킹을 위한 모바일 앱',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600',
      tags: ['React Native', 'GraphQL', 'AWS'],
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: '마크다운 지원 블로그 플랫폼',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600',
      tags: ['Next.js', 'MDX', 'Vercel'],
    },
    {
      id: 6,
      title: 'Analytics Dashboard',
      description: '데이터 시각화 대시보드',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      tags: ['React', 'D3.js', 'Python'],
    },
  ]

  const { ref } = useParallax({ speed: 5 })

  return (
    <Element name="portfolio">
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>Portfolio</SectionTitle>
            <p className="text-gray-600 text-lg">
              제가 작업한 프로젝트들을 소개합니다
            </p>
          </div>
          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  )
}

export default Portfolio

