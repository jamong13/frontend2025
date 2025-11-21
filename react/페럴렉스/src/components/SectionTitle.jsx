import { useParallax } from 'react-scroll-parallax'

const SectionTitle = ({ children, className = '' }) => {
  const { ref } = useParallax({ speed: 10 })

  return (
    <h2
      ref={ref}
      className={`text-4xl md:text-5xl font-bold text-gray-800 mb-8 ${className}`}
    >
      {children}
    </h2>
  )
}

export default SectionTitle

