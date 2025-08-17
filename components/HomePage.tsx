import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { images } from '../src/assets/images';

type Page = 'home' | 'academic' | 'personal' | 'about' | 'contact' | 'project';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="h-screen w-full overflow-hidden no-scroll">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full w-full">
        {/* Academic Projects Section */}
        <button 
          onClick={() => onNavigate('academic')}
          className="relative group overflow-hidden bg-gray-100 hover:bg-gray-200 transition-colors duration-300 w-full h-full"
        >
          <div className="absolute inset-0 w-full h-full">
            <ImageWithFallback
              src={images.academicHero}
              alt="Academic Projects"
              className="w-full h-full object-cover portfolio-hover-scale"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
          </div>
          
          <div className="relative z-10 flex items-end justify-center w-full h-full pb-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl portfolio-heading text-white tracking-wider relative z-10 drop-shadow-lg">
              ACADEMIC
            </h1>
          </div>
        </button>

        {/* Personal Projects Section */}
        <button 
          onClick={() => onNavigate('personal')}
          className="relative group overflow-hidden bg-gray-800 hover:bg-gray-900 transition-colors duration-300 w-full h-full"
        >
          <div className="absolute inset-0 w-full h-full">
            <ImageWithFallback
              src={images.personalHero}
              alt="Personal Projects"
              className="w-full h-full object-cover portfolio-hover-scale"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
          </div>
          
          <div className="relative z-10 flex items-end justify-center w-full h-full pb-20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl portfolio-heading text-white tracking-wider relative z-10 drop-shadow-lg">
              PERSONAL
            </h1>
          </div>
        </button>
      </div>
    </div>
  );
}