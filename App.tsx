import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import ProjectList from './components/ProjectList';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';
import { images } from './src/assets/images';

type Page = 'home' | 'academic' | 'personal' | 'about' | 'contact' | 'project';

interface Project {
  id: string;
  title: string;
  image: string;
  description: string;
  category: 'academic' | 'personal';
}

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Modern Ashtray',
    image: images.projects.academic.architecturalResearch,
    description: 'ASKFATET - A sophisticated ashtray design that combines premium Carrara marble with polished brass accents. This contemporary piece explores the balance between luxury materials and functional design, creating an elegant smoking accessory that doubles as a sculptural object.',
    category: 'academic'
  },
  {
    id: '2',
    title: 'Light in the Dark',
    image: images.projects.academic.interiorSpaceStudies,
    description: 'LUNNE-LAMPAN: A crisis-ready lamp designed for everyday use. With 24-hour battery life, solar charging, and dual lighting modes, this sustainable design addresses the growing need for reliable lighting during power outages while remaining elegant enough for daily use.',
    category: 'academic'
  },
  {
    id: '3',
    title: 'Memphis Clock',
    image: images.projects.academic.creativeWorkspaceDesign,
    description: 'Inspired by the Memphis design movement, this timepiece combines bold geometric forms with functional precision. The project explores how postmodern design principles can be applied to contemporary product development.',
    category: 'academic'
  },
  {
    id: '4',
    title: 'The Toothbrush',
    image: images.projects.academic.productInnovationLab,
    description: 'A utility-focused personal hygiene tool designed for maximum portability and universal compatibility. This compact, lightweight design features sustainable materials and includes a portable case, making it the perfect travel companion for electric toothbrush users.',
    category: 'academic'
  },
  {
    id: '5',
    title: 'Event Organization',
    image: images.projects.personal.personalBrandIdentity,
    description: 'A comprehensive approach to creating memorable experiences through strategic planning and creative execution. This project showcases my ability to coordinate complex events while maintaining attention to detail and creative vision.',
    category: 'personal'
  },
  {
    id: '6',
    title: 'Custom Guitar',
    image: images.projects.personal.minimalistLiving,
    description: 'A handcrafted musical instrument that combines traditional lutherie techniques with contemporary design aesthetics. This personal project demonstrates my passion for both music and craftsmanship.',
    category: 'personal'
  },
  {
    id: '7',
    title: '2Friends Band',
    image: images.projects.personal.digitalCraftStudio,
    description: 'Creative collaboration in music production and band management. This project highlights my experience in the music industry, from creative direction to performance coordination.',
    category: 'personal'
  },
  {
    id: '8',
    title: 'Musikum Company',
    image: images.projects.personal.experimentalMaterials,
    description: 'A music booking platform co-founded with Vladimir Radulescu to connect talented artists and bands with event organizers. Musikum solves the common problem of finding quality performers by providing a streamlined service that helps everyone from individuals to organizations discover the perfect act for their events without compromise.',
    category: 'personal'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setSelectedProject(null);
  };

  const viewProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'academic':
        return (
          <ProjectList 
            title="Academic Projects"
            projects={mockProjects.filter(p => p.category === 'academic')}
            onProjectClick={viewProject}
          />
        );
      case 'personal':
        return (
          <ProjectList 
            title="Personal Projects"
            projects={mockProjects.filter(p => p.category === 'personal')}
            onProjectClick={viewProject}
          />
        );
      case 'project':
        return selectedProject ? (
          <ProjectDetail 
            project={selectedProject}
            onBack={() => navigateTo(selectedProject.category)}
          />
        ) : null;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-white text-black">
      {currentPage !== 'home' && (
        <Navigation currentPage={currentPage} onNavigate={navigateTo} />
      )}
      {renderCurrentPage()}
    </div>
  );
}