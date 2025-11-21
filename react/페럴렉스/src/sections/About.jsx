import { Element } from 'react-scroll'
import { useParallax } from 'react-scroll-parallax'
import ParallaxImage from '../components/ParallaxImage'
import SectionTitle from '../components/SectionTitle'

const About = () => {
  const textRef = useParallax({ speed: 10 })

  return (
    <Element name="about">
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>About Me</SectionTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div ref={textRef.ref} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                열정적인 개발자
              </h3>
              <p className="text-gray-600 leading-relaxed">
                저는 사용자 경험을 최우선으로 생각하는 프론트엔드 개발자입니다.
                최신 기술 스택을 활용하여 아름답고 기능적인 웹 애플리케이션을
                만드는 것을 좋아합니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                React, Vue.js, TypeScript 등의 기술을 다루며, 항상 새로운 것을
                배우고 성장하는 것을 즐깁니다. 깔끔한 코드와 최적의 성능을
                추구합니다.
              </p>
              <div className="flex space-x-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">50+</div>
                  <div className="text-sm text-gray-600">프로젝트</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">3+</div>
                  <div className="text-sm text-gray-600">년 경력</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">100%</div>
                  <div className="text-sm text-gray-600">만족도</div>
                </div>
              </div>
            </div>
            <ParallaxImage
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
              alt="About"
              speed={-20}
              className="h-96 shadow-xl"
            />
          </div>
        </div>
      </section>
    </Element>
  )
}

export default About

