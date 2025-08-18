// About component
import { ImageWithFallback } from './figma/ImageWithFallback';
import { images } from '../src/assets/images';
import { Download } from 'lucide-react';

export default function About() {
  return (
    <div className="h-screen pt-28 md:pt-28 bg-white">
      <div className="h-full">
        <div className="max-w-6xl mx-auto px-6 h-full">
          <div className="grid lg:grid-cols-2 gap-12 h-full items-center">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl portfolio-heading mb-6">
                About James Lu
              </h1>
              
              <div className="w-16 h-0.5 bg-black mb-6" />
              
              <div className="space-y-4">
                <p className="portfolio-body">
                  James Lu is a 23-year-old Product Design student at Malmö University, graduating in 2026. 
                  Based in Lund, Sweden, he brings a unique blend of creative vision and entrepreneurial 
                  spirit to his design practice.
                </p>
                
                <p className="portfolio-body">
                  As co-founder and CCO of Musikum Artistagentur and member of 2friends_band, James combines 
                  his passion for music with business acumen. His diverse background spans hospitality, 
                  event management, and education, bringing valuable real-world experience to his design work.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-3">Education & Experience</h3>
                <div className="space-y-2 text-gray-600">
                  <p>• <span className="font-medium text-black">Product Design</span> - Malmö University (2022-2026)</p>
                  <p>• <span className="font-medium text-black">Festival Management</span> - 1200+ attendees</p>
                  <p>• <span className="font-medium text-black">Hospitality & Service</span> - Multiple venues</p>
                  <p>• <span className="font-medium text-black">Music Industry</span> - Artist management & performance</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-3">Skills & Languages</h3>
                <div className="grid grid-cols-2 gap-3 text-gray-600">
                  <div>
                    <p>• Product Design</p>
                    <p>• CAD</p>
                    <p>• Brand Design</p>
                    <p>• Graphic Design</p>
                    <p>• Event Coordination</p>
                  </div>
                  <div>
                    <p>• Entrepreneurship</p>
                    <p>• Leadership & Management</p>
                    <p>• Swedish (Native)</p>
                    <p>• English (Professional)</p>
                    <p>• Cantonese (Native)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/James-Lu-Resume.pdf';
                    link.download = 'James-Lu-Resume.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="aspect-[3/4] w-full max-w-md">
                <ImageWithFallback
                  src={images.profile}
                  alt="James Lu"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}