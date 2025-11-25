import { useParallax } from 'react-scroll-parallax'

const ParallaxImage = ({ src, alt, speed = -20, className = '' }) => {
  const { ref } = useParallax({ speed })

  return (
    <div ref={ref} className={`overflow-hidden rounded-lg ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default ParallaxImage

