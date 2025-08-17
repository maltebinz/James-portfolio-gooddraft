import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';
import { projectGalleries } from '../src/assets/images';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  category: 'academic' | 'personal';
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="min-h-screen pt-28 bg-white">
      <div className="flex flex-col">
        {/* Back Button */}
        <div className="px-6 py-4 flex-shrink-0">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to {project.category} projects</span>
          </button>
        </div>

        {/* Project Content */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Text Content - Left Side */}
            <div className="flex flex-col justify-start">
              <h1 className="text-3xl md:text-4xl portfolio-heading mb-4">
                {project.title}
              </h1>
              
              <div className="w-16 h-0.5 bg-black mb-6" />
              
              <div className="space-y-4">
                <p className="leading-relaxed">
                  {project.description}
                </p>
                
                {project.title === 'Light in the Dark' && (
                  <div className="pt-6">
                    <h3 className="font-medium mb-3">LUNNE-LAMPAN Features</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• <span className="font-medium text-black">24h battery life</span> per charge</p>
                      <p>• <span className="font-medium text-black">Swedish Powerfoile</span> solar cells</p>
                      <p>• <span className="font-medium text-black">USB-C charging</span> - one cable for everything</p>
                      <p>• <span className="font-medium text-black">Touch controls</span> for light temperature</p>
                      <p>• <span className="font-medium text-black">Dual lighting modes</span> - fill light and spotlight up to 90°</p>
                      <p>• <span className="font-medium text-black">Sustainable materials</span> - aluminum & UV-resistant polycarbonate</p>
                      <p>• <span className="font-medium text-black">Design for Disassembly</span> - circular design principles</p>
                    </div>
                  </div>
                )}

                {project.title === 'Modern Ashtray' && (
                  <div className="pt-6">
                    <h3 className="font-medium mb-3">ASKFATET Design Features</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• <span className="font-medium text-black">Carrara marble base</span> with natural veining patterns</p>
                      <p>• <span className="font-medium text-black">Polished brass accents</span> for refined contrast</p>
                      <p>• <span className="font-medium text-black">Geometric precision</span> in form and proportions</p>
                      <p>• <span className="font-medium text-black">Integrated ash collection</span> with easy maintenance</p>
                      <p>• <span className="font-medium text-black">Sculptural presence</span> when not in use</p>
                      <p>• <span className="font-medium text-black">Premium material dialogue</span> between stone and metal</p>
                      <p>• <span className="font-medium text-black">Tactile interaction</span> emphasizing material qualities</p>
                    </div>
                  </div>
                )}

                {project.title === 'Memphis Clock' && (
                  <div className="pt-6">
                    <h3 className="font-medium mb-3">Memphis Design Elements</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• <span className="font-medium text-black">Bold geometric forms</span> inspired by Memphis movement</p>
                      <p>• <span className="font-medium text-black">Postmodern aesthetics</span> with contemporary functionality</p>
                      <p>• <span className="font-medium text-black">Functional precision</span> in timekeeping mechanism</p>
                      <p>• <span className="font-medium text-black">Color theory application</span> in product design</p>
                      <p>• <span className="font-medium text-black">Design history research</span> translated to modern product</p>
                      <p>• <span className="font-medium text-black">Form experimentation</span> within functional constraints</p>
                    </div>
                  </div>
                )}

                {project.title === 'The Toothbrush' && (
                  <div className="pt-6">
                    <h3 className="font-medium mb-3">Utility & Portability Features</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• <span className="font-medium text-black">Universal compatibility</span> with electric toothbrush heads</p>
                      <p>• <span className="font-medium text-black">Lightweight construction</span> for effortless portability</p>
                      <p>• <span className="font-medium text-black">Compact travel case</span> included for protection and hygiene</p>
                      <p>• <span className="font-medium text-black">Sustainable materials</span> throughout construction</p>
                      <p>• <span className="font-medium text-black">Minimalist design</span> prioritizing essential functionality</p>
                      <p>• <span className="font-medium text-black">Travel-optimized size</span> fitting standard luggage constraints</p>
                      <p>• <span className="font-medium text-black">Easy maintenance</span> for long-term reliability</p>
                    </div>
                  </div>
                )}

                {project.title === 'Musikum Company' && (
                  <div className="pt-6">
                    <h3 className="font-medium mb-3">Platform Features</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• <span className="font-medium text-black">Artist-event matching</span> connecting performers with organizers</p>
                      <p>• <span className="font-medium text-black">Quality assurance</span> ensuring professional service delivery</p>
                      <p>• <span className="font-medium text-black">Streamlined booking</span> simplifying the discovery process</p>
                      <p>• <span className="font-medium text-black">Talent showcase</span> providing artists visibility and opportunities</p>
                      <p>• <span className="font-medium text-black">Customer satisfaction</span> prioritizing exceptional service experience</p>
                      <p>• <span className="font-medium text-black">Scalable solution</span> serving individuals to large organizations</p>
                      <p>• <span className="font-medium text-black">Co-founded venture</span> with Vladimir Radulescu</p>
                    </div>
                  </div>
                )}
                
                <div className="pt-6">
                  <h3 className="font-medium mb-3">Project Details</h3>
                  <div className="space-y-1 text-gray-600">
                    <p><span className="font-medium text-black">Category:</span> {project.category === 'academic' ? 'Academic Research' : 'Personal Work'}</p>
                    <p><span className="font-medium text-black">Type:</span> {
                      project.title === 'Light in the Dark' ? 'Product Design & Crisis Preparedness' :
                      project.title === 'Modern Ashtray' ? 'Contemporary Product Design' :
                      project.title === 'Memphis Clock' ? 'Postmodern Design Study' :
                      project.title === 'The Toothbrush' ? 'Ergonomic Product Innovation' :
                      project.title === 'Musikum Company' ? 'Music Platform & Business Development' :
                      'Design Research'
                    }</p>
                    <p><span className="font-medium text-black">Year:</span> 2024</p>
                    {project.title === 'Light in the Dark' && (
                      <p><span className="font-medium text-black">Focus:</span> Sustainable lighting design for everyday and emergency use</p>
                    )}
                    {project.title === 'Modern Ashtray' && (
                      <>
                        <p><span className="font-medium text-black">Focus:</span> Luxury material exploration through functional sculpture</p>
                        <p><span className="font-medium text-black">Materials:</span> Carrara marble, polished brass</p>
                      </>
                    )}
                    {project.title === 'Memphis Clock' && (
                      <p><span className="font-medium text-black">Focus:</span> Applying postmodern design theory to functional timepieces</p>
                    )}
                    {project.title === 'The Toothbrush' && (
                      <>
                        <p><span className="font-medium text-black">Focus:</span> Utility-driven design for universal compatibility and portability</p>
                        <p><span className="font-medium text-black">Key Features:</span> Lightweight, compact case, sustainable materials</p>
                      </>
                    )}
                    {project.title === 'Musikum Company' && (
                      <>
                        <p><span className="font-medium text-black">Focus:</span> Bridging the gap between talented artists and event organizers</p>
                        <p><span className="font-medium text-black">Co-Founder:</span> James Lu & Vladimir Radulescu</p>
                        <p><span className="font-medium text-black">Mission:</span> Simplifying music booking without compromise</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery - Right Side */}
            <div className="flex flex-col h-full">
              <h3 className="font-medium mb-6 text-lg flex-shrink-0">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-4 overflow-y-auto max-h-[80vh] pr-4 gallery-scroll" style={{scrollBehavior: 'smooth'}}>
                {/* Main Image */}
                <div className="col-span-2">
                  <div className="aspect-square w-full">
                    <ImageWithFallback
                      src={project.image}
                      alt={`${project.title} - Main`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
                
                {/* Dynamic Gallery Images */}
                {projectGalleries[project.category]?.[project.title]?.gallery?.length > 0 ? (
                  projectGalleries[project.category][project.title].gallery.map((imageSrc, index) => (
                    <div key={index} className="aspect-square w-full">
                      <ImageWithFallback
                        src={imageSrc}
                        alt={`${project.title} - Gallery ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))
                ) : project.title === 'Musikum Company' ? (
                  <>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">Musikum Test 1</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">Musikum Test 2</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 text-sm font-medium">Musikum Test 3</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Debug: {project.title}</span>
                      </div>
                    </div>
                ) : (
                  <>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Detail 1</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Detail 2</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Process</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Context</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Materials</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Finished</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Extra 1</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Extra 2</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Extra 3</span>
                      </div>
                    </div>
                    <div className="aspect-square w-full">
                      <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 text-sm">Extra 4</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}