// ProjectDetail component
import { ImageWithFallback } from './figma/ImageWithFallback';
import { projectGalleries } from '../src/assets/images';
import { ExpandableText } from './ExpandableText';

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

export default function ProjectDetail({ project }: ProjectDetailProps) {
  // Get gallery images for this specific project
  const galleryImages = (projectGalleries as any)[project.category]?.[project.title]?.gallery || [];
  
  
  return (
    <div className="min-h-screen pt-20 md:pt-36 bg-white">
      <div className="flex flex-col">
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
                <ExpandableText 
                  text={project.description}
                  maxLines={4}
                />
                
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
                      <p>• <span className="font-medium text-black">Premium Carrara marble base</span> showcasing unique natural veining patterns</p>
                      <p>• <span className="font-medium text-black">Precision-machined brass accents</span> with mirror-polished finish</p>
                      <p>• <span className="font-medium text-black">Geometric precision</span> emphasizing clean lines and proportional harmony</p>
                      <p>• <span className="font-medium text-black">Integrated ash collection system</span> with concealed removal mechanism</p>
                      <p>• <span className="font-medium text-black">Sculptural presence</span> serving as functional art when not in use</p>
                      <p>• <span className="font-medium text-black">Material dialogue</span> exploring the contrast between stone permanence and metal refinement</p>
                      <p>• <span className="font-medium text-black">Tactile interaction design</span> celebrating the inherent qualities of both materials</p>
                      <p>• <span className="font-medium text-black">Elevated everyday ritual</span> transforming utility into ceremonial experience</p>
                      <p>• <span className="font-medium text-black">Contemporary minimalism</span> with timeless material appeal</p>
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

                {project.title === '2Friends Band' && (
                  <div className="pt-6">
                    <h3 className="font-medium mb-3">Band Highlights</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>• <span className="font-medium text-black">Five-member lineup</span> from Hässleholm, Sweden</p>
                      <p>• <span className="font-medium text-black">Indie rock genre</span> with infectious energy and strong stage presence</p>
                      <p>• <span className="font-medium text-black">Active since 2021</span> with growing popularity among Lund students</p>
                      <p>• <span className="font-medium text-black">Major festival performances</span> at Torsjö Live and Musik vid Immeln</p>
                      <p>• <span className="font-medium text-black">Shared stages</span> with ODZ, Daniel Adams-Ray, Molly Hammar, and Dotter</p>
                      <p>• <span className="font-medium text-black">Idol 2022 connection</span> featuring member Arvid Einarsson</p>
                      <p>• <span className="font-medium text-black">Debut EP released</span> with debut album planned for spring 2025</p>
                      <p>• <span className="font-medium text-black">Summer tour planned</span> including a stop in Immeln</p>
                      <p>• <span className="font-medium text-black">Energetic live shows</span> that make it impossible to sit still</p>
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
                      project.title === '2Friends Band' ? 'Indie Rock Band & Performance' :
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
                        <p><span className="font-medium text-black">Materials:</span> Premium Carrara marble, precision-machined brass</p>
                        <p><span className="font-medium text-black">Concept:</span> Elevating utilitarian objects through material honesty and craftsmanship</p>
                        <p><span className="font-medium text-black">Design Philosophy:</span> Celebrating natural beauty in dialogue with refined manufacturing</p>
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
                    {project.title === '2Friends Band' && (
                      <>
                        <p><span className="font-medium text-black">Focus:</span> Creating infectious indie rock with energetic live performances</p>
                        <p><span className="font-medium text-black">Members:</span> Arvid Einarsson, James Lu, Edvin Jansson, Arvid Pernrup, Dylan Johansson</p>
                        <p><span className="font-medium text-black">Based in:</span> Hässleholm, Sweden</p>
                        <p><span className="font-medium text-black">Active Since:</span> 2021</p>
                        <p><span className="font-medium text-black">Upcoming:</span> Debut album spring 2025, summer tour with Immeln stop</p>
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
                
                {/* Gallery Images */}
                {galleryImages
                  .filter((imageSrc: any) => 
                    imageSrc && 
                    imageSrc !== undefined && 
                    imageSrc !== null && 
                    imageSrc !== '' && 
                    typeof imageSrc === 'string' &&
                    imageSrc.length > 0
                  )
                  .map((imageSrc: string, index: number) => (
                    <div key={index} className="aspect-square w-full">
                      <ImageWithFallback
                        src={imageSrc}
                        alt={`${project.title} - Gallery ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}