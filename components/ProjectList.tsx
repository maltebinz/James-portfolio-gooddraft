// ProjectList component
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  category: 'academic' | 'personal';
}

interface ProjectListProps {
  title: string;
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function ProjectList({ projects, onProjectClick }: ProjectListProps) {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[calc(100vh-3rem)] md:h-[calc(100vh-5rem)] mt-12 md:mt-20">
        {projects.slice(0, 4).map((project) => (
          <button
            key={project.id}
            onClick={() => onProjectClick(project)}
            className="relative group overflow-hidden hover:opacity-90 transition-opacity duration-300"
          >
            <div className="absolute inset-0">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover portfolio-hover-scale"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>
            
            <div className="relative z-10 flex items-end justify-start h-full p-8">
              <div className="text-left relative z-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl portfolio-heading text-white mb-2 drop-shadow-lg">
                  {project.title}
                </h2>
                <div className="w-12 h-0.5 bg-white opacity-70" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}