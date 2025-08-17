import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { images } from '../src/assets/images';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Contact() {
  return (
    <div className="h-screen pt-28 bg-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 pt-28">
        <ImageWithFallback
          src={images.contactBackground}
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-4xl portfolio-heading mb-6 text-white">
            Get In Touch
          </h1>
          
          <div className="w-16 h-0.5 bg-white mb-8 mx-auto" />
          
          <p className="leading-relaxed mb-12 text-lg text-white">
            I'm always interested in discussing new projects, creative ideas, 
            or opportunities to collaborate. Feel free to reach out.
          </p>

          <div className="space-y-6">
            <a 
              href="mailto:james.matthew.lu@gmail.com" 
              className="flex items-center justify-center space-x-4 text-xl text-white hover:opacity-70 transition-opacity group"
            >
              <Mail className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">james.matthew.lu@gmail.com</span>
            </a>
            
            <a 
              href="https://instagram.com/jameslu" 
              className="flex items-center justify-center space-x-4 text-xl text-white hover:opacity-70 transition-opacity group"
            >
              <Instagram className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">@jameslu</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}