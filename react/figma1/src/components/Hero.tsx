import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown } from 'lucide-react';
import heroImage from 'figma:asset/1ec90c943be3e6bbe45132752feb9ed22b1334cf.png';

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen flex items-center bg-gradient-to-r from-cyan-400 to-cyan-300 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-end pr-12">
        <ImageWithFallback 
          src={heroImage}
          alt="Person with VR headset"
          className="h-[80%] w-auto object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-md">
          <h1 className="mb-4">Paradigm<br />Shift</h1>
          <p className="text-gray-800 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button 
            onClick={scrollToContent}
            className="bg-white text-cyan-400 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            Explore
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-gray-700" />
      </button>
    </div>
  );
}
