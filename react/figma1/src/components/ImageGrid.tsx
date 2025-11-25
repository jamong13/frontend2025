import { ImageWithFallback } from './figma/ImageWithFallback';

interface Image {
  url: string;
  alt: string;
}

interface ImageGridProps {
  images: Image[];
  layout: 'horizontal' | 'vertical';
}

export function ImageGrid({ images, layout }: ImageGridProps) {
  if (layout === 'horizontal') {
    return (
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Vertical layout with mixed sizes
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`overflow-hidden rounded-lg ${
              index === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'
            }`}
          >
            <ImageWithFallback
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
