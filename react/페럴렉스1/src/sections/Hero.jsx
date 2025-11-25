import { useEffect, useState } from 'react'
import { Element } from 'react-scroll'
import { useParallax } from 'react-scroll-parallax'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = '안녕하세요, 개발자입니다.'
  const { ref } = useParallax({ speed: -30 })

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <Element name="hero">
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div
          ref={ref}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mb-4 sm:mb-6">
            <span className="inline-flex items-center flex-wrap justify-center">
              <span className="whitespace-nowrap">{displayText}</span>
              <span className="inline-block w-0.5 h-8 sm:h-10 md:h-12 lg:h-16 bg-orange-500 ml-2 animate-pulse"></span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 px-4">
            창의적인 웹 개발자
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 active:bg-orange-700 transition-colors duration-300 font-medium text-base sm:text-lg touch-manipulation"
            >
              포트폴리오 보기
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3 bg-transparent border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white active:bg-gray-900 transition-colors duration-300 font-medium text-base sm:text-lg touch-manipulation"
            >
              연락하기
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
    </Element>
  )
}

export default Hero

