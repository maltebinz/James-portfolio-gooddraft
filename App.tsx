import { useState } from 'react';
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
    image: images.projects.academic.modernAshtray,
    description: 'ASKFATET represents a fundamental exploration of material dialogue in contemporary product design, where premium Carrara marble meets precision-engineered brass components. This sophisticated ashtray transcends its utilitarian function to become a sculptural meditation on luxury, craftsmanship, and the poetry of everyday objects. The design philosophy centers on material honesty—celebrating the inherent beauty of natural stone with its unique veining patterns while contrasting it with the geometric precision of machined metal elements. Each piece is carefully proportioned to achieve visual balance, with the substantial marble base providing both physical stability and conceptual grounding for the refined brass accents. The manufacturing process involves selective quarrying of premium Carrara marble, ensuring each piece showcases the stone\'s distinctive character, followed by precision machining of brass components to exacting tolerances. The result is a functional art piece that elevates the ritual of smoking from mundane necessity to contemplative ceremony. Beyond its primary function, ASKFATET serves as a statement about sustainable luxury—using materials that age gracefully and can be maintained indefinitely, opposing the disposable culture of contemporary consumer goods. The design invites tactile interaction, encouraging users to appreciate the weight and texture of quality materials while considering the broader implications of thoughtful, durable design in an increasingly ephemeral world.',
    category: 'academic'
  },
  {
    id: '2',
    title: 'Light in the Dark',
    image: images.projects.academic.lightInTheDark,
    description: 'LUNNE-LAMPAN emerges from extensive research into crisis preparedness and sustainable energy solutions, addressing the critical need for reliable lighting in an era of increasing climate uncertainty and infrastructure vulnerability. This innovative lamp design seamlessly integrates advanced solar technology with elegant Scandinavian design principles, creating a product that serves both everyday illumination needs and emergency preparedness requirements. The core innovation lies in the integration of Swedish Powerfoile solar cells, representing cutting-edge photovoltaic technology that maintains efficiency even in low-light conditions typical of Nordic climates. The 24-hour battery life ensures continuous operation through extended power outages, while the dual lighting system provides both ambient fill lighting for general use and focused spotlight capability up to 90 degrees for task-specific applications. The USB-C charging system reflects contemporary connectivity standards, eliminating the need for proprietary cables and ensuring long-term serviceability. Material selection prioritizes sustainability and durability, with an aluminum housing providing lightweight strength and UV-resistant polycarbonate components ensuring longevity under various environmental conditions. The design philosophy embraces circular design principles, implementing a design-for-disassembly approach that facilitates repair, component replacement, and end-of-life material recovery. Touch-sensitive controls allow intuitive adjustment of light temperature and intensity, adapting to different usage scenarios from reading to ambient lighting. Beyond technical specifications, LUNNE-LAMPAN represents a proactive approach to resilient design—creating products that anticipate and prepare for uncertain futures while maintaining aesthetic integrity and user experience quality that encourages daily use.',
    category: 'academic'
  },
  {
    id: '3',
    title: 'Memphis Clock',
    image: images.projects.academic.memphisClock,
    description: 'The Memphis Clock project represents a comprehensive study of postmodern design theory translated into contemporary product development, specifically examining how the radical aesthetic principles of the Memphis Group can inform modern timepiece design. This academic exploration delves deep into the historical context of the Memphis movement, founded by Ettore Sottsass in 1981, and its revolutionary approach to rejecting modernist orthodoxy in favor of playful, colorful, and deliberately anti-functional aesthetics. The design process began with extensive historical research, analyzing seminal Memphis pieces like the Carlton bookshelf and Tahiti lamp to understand the movement\'s core principles: bold geometric forms, unexpected color combinations, pattern mixing, and the deliberate subversion of traditional functional expectations. Translating these principles to horological design presented unique challenges—how to maintain the essential function of accurate timekeeping while embracing Memphis\' deliberately disorienting aesthetic approach. The resulting timepiece features bold geometric forms that challenge conventional clock face design, incorporating angular elements and unexpected proportions that create visual tension while maintaining legibility. Color theory application draws directly from Memphis palettes, utilizing high-contrast combinations that energize rather than soothe, reflecting the movement\'s rejection of minimalist restraint. The project methodology involved creating multiple design iterations, each exploring different aspects of Memphis philosophy—from Sottsass\' architectural sensibilities to George Sowden\'s pattern experiments. Material experimentation focused on laminated plastics and bold surface treatments characteristic of Memphis furniture, adapted for the precision requirements of timepiece manufacturing. This academic exercise ultimately demonstrates how historical design movements can inform contemporary product development, providing both aesthetic inspiration and theoretical framework for challenging established design conventions.',
    category: 'academic'
  },
  {
    id: '4',
    title: 'The Toothbrush',
    image: images.projects.academic.theToothbrush,
    description: 'The Toothbrush project addresses a fundamental gap in personal hygiene product design—the lack of truly portable, sustainable alternatives to bulky electric toothbrush systems. This comprehensive design exploration began with extensive user research, revealing consistent frustrations among frequent travelers who struggle with the size, weight, and fragility of conventional electric toothbrushes. The design challenge centered on creating universal compatibility across different electric toothbrush head standards while maintaining the compact form factor essential for travel applications. The solution employs innovative mechanical engineering to create a universal attachment system that accommodates major brush head formats without compromising performance or reliability. Material selection prioritizes sustainability without sacrificing durability, utilizing bio-based polymers and recycled aluminum components that can withstand repeated use and transport stress. The lightweight construction achieved through strategic material distribution and structural optimization results in a device weighing significantly less than conventional alternatives while maintaining necessary rigidity and motor performance. The integrated travel case represents a holistic approach to portable design, providing protection during transport while doubling as a charging dock and storage system for replacement heads and cleaning accessories. Ergonomic considerations ensure comfortable use despite the compact form factor, with carefully researched grip dimensions and weight distribution that accommodate various hand sizes and usage preferences. The project extends beyond individual product design to consider broader implications of travel hygiene—how portable, sustainable design can encourage better oral health practices while reducing the environmental impact of disposable travel alternatives. Manufacturing methodology emphasizes design for assembly efficiency and repair accessibility, ensuring the product can be maintained and serviced rather than replaced, reflecting broader sustainability commitments that extend beyond material selection to product lifecycle management.',
    category: 'academic'
  },
  {
    id: '5',
    title: 'Event Organization',
    image: images.projects.personal.eventOrganization,
    description: 'Event Organization represents a multifaceted exploration of experiential design, project management, and creative coordination that transforms abstract concepts into tangible, memorable experiences. This comprehensive approach to event planning goes far beyond traditional coordination, incorporating strategic thinking, creative vision, and meticulous execution to create experiences that resonate with participants long after the event concludes. The methodology begins with extensive stakeholder analysis and experience mapping, understanding not just what clients want to achieve, but how participants will experience and remember the event. This human-centered approach informs every decision, from initial concept development through post-event analysis and improvement. The creative process involves developing unique experiential narratives that guide participants through carefully orchestrated emotional journeys, using environmental design, lighting, sound, and interactive elements to create immersive experiences that engage multiple senses. Logistical coordination requires sophisticated project management skills, coordinating multiple vendors, timelines, and contingency plans while maintaining the creative vision under real-world constraints. Budget management balances creative ambitions with practical limitations, requiring constant negotiation and creative problem-solving to achieve maximum impact within financial parameters. Risk assessment and contingency planning address everything from weather considerations to technical failures, ensuring seamless execution regardless of unexpected challenges. The portfolio includes diverse event types—from intimate brand activations to large-scale community celebrations—each requiring different approaches to audience engagement, space utilization, and resource management. Sustainability considerations increasingly influence event design decisions, incorporating waste reduction strategies, local sourcing, and environmentally conscious material choices that align with contemporary values without compromising experience quality. Post-event analysis and documentation capture lessons learned and success metrics, building a knowledge base that informs future projects and demonstrates continuous improvement in both creative and operational capabilities.',
    category: 'personal'
  },
  {
    id: '6',
    title: 'Custom Guitar',
    image: images.projects.personal.customGuitar,
    description: 'The Custom Guitar project represents a deeply personal exploration of traditional craftsmanship, acoustic engineering, and contemporary design synthesis, combining centuries-old lutherie techniques with modern aesthetic sensibilities and performance requirements. This comprehensive undertaking began with extensive research into guitar construction history, studying the methodologies of renowned luthiers from Torres and Martin to contemporary innovators like Linda Manzer and John Monteleone. The design process required balancing acoustic performance requirements with visual and tactile aesthetics, understanding how wood selection, body proportions, and bracing patterns affect both sound production and structural integrity. Material selection involved careful consideration of tonal characteristics, sustainability, and visual appeal, sourcing premium tonewoods from responsible suppliers while exploring alternative materials that could provide unique acoustic properties. The construction process demanded mastery of traditional hand tools alongside selective use of modern precision equipment, learning techniques like steam bending, precision inlay work, and French polishing that require years to master. Acoustic engineering considerations included extensive research into soundhole design, internal bracing patterns, and string tension management, understanding how these elements interact to create the instrument\'s unique voice. The finishing process involved multiple stages of surface preparation, staining, and protective coating application, achieving a finish that enhances both visual appeal and wood resonance while providing long-term protection. Hardware selection required balancing functional performance with aesthetic coherence, choosing tuning machines, bridges, and electronic components that complement the overall design vision while providing reliable performance. The project extended beyond individual craftsmanship to explore broader themes of maker culture, the value of handmade objects in a mass-produced world, and the personal satisfaction derived from creating functional art through patient, skilled labor. Documentation throughout the process captured both technical learning and personal growth, creating a portfolio that demonstrates problem-solving abilities, attention to detail, and commitment to excellence that extends far beyond the musical instrument itself.',
    category: 'personal'
  },
  {
    id: '7',
    title: '2Friends Band',
    image: images.projects.personal.twoFriendsBand,
    description: '2Friends represents a collaborative creative venture that has evolved from a local musical experiment into a recognized force in the Swedish indie rock scene, demonstrating the power of authentic artistic expression and persistent creative dedication. Formed in Hässleholm in 2021, the five-member ensemble—Arvid Einarsson, James Lu, Edvin Jansson, Arvid Pernrup, and Dylan Johansson—has developed a distinctive sound that combines infectious energy with sophisticated musical arrangements, creating an experience that compels physical response from audiences. The band\'s artistic development reflects a commitment to musical authenticity over commercial calculation, prioritizing emotional connection and live performance energy that has become our signature characteristic. Our songwriting process involves collaborative composition sessions where individual musical ideas evolve through group interpretation, creating arrangements that showcase each member\'s strengths while maintaining cohesive artistic vision. The recording process has evolved from early home studio experiments to professional studio sessions, learning to capture live energy in recorded formats while exploring production techniques that enhance rather than mask our raw performance aesthetic. Live performance represents the core of our artistic identity, developing stage presence and audience interaction skills that have earned recognition throughout the Swedish festival circuit. Major festival appearances at Torsjö Live and Musik vid Immeln have provided opportunities to share stages with established artists like ODZ, Daniel Adams-Ray, Molly Hammar, and Dotter, learning from experienced performers while establishing our own reputation for energetic, engaging live shows. Our growing popularity among Lund university students reflects successful grassroots marketing and authentic connection with our core demographic, building sustainable fan engagement through consistent quality and genuine artistic expression. The upcoming debut album represents a culmination of our artistic development to date, featuring refined songwriting and production values while maintaining the spontaneous energy that defines our live performances. The planned summer tour, including a return to Immeln, demonstrates our commitment to live performance as both artistic expression and business development, building the sustainable career foundation necessary for long-term creative freedom.',
    category: 'personal'
  },
  {
    id: '8',
    title: 'Musikum Company',
    image: images.projects.personal.musikumCompany,
    description: 'Musikum Company represents an entrepreneurial venture that addresses fundamental inefficiencies in the music booking industry, combining technological innovation with deep understanding of both artist and event organizer needs to create a platform that genuinely serves both sides of the marketplace. Co-founded with Vladimir Radulescu, the company emerged from firsthand experience of the frustrations and limitations of traditional music booking processes, where finding quality performers often involves lengthy negotiations, unclear pricing, and uncertain reliability. The platform development required extensive market research, understanding pain points experienced by event organizers ranging from individual party planners to large corporate event coordinators, while simultaneously addressing artist concerns about fair compensation, professional treatment, and performance opportunity discovery. The technological architecture balances sophisticated matching algorithms with intuitive user interface design, ensuring that complex backend systems for quality assurance, payment processing, and communication management remain invisible to users who simply want to book great music for their events. Quality assurance systems represent a core differentiator, implementing vetting processes that ensure professional service delivery while supporting emerging artists who meet performance standards but lack extensive booking history. The business model emphasizes sustainable revenue streams that support platform development while providing fair compensation to artists and reasonable pricing for event organizers, avoiding the extractive practices common in many marketplace platforms. Customer satisfaction metrics drive continuous platform improvement, incorporating feedback from both artists and event organizers to refine matching algorithms, streamline booking processes, and enhance communication tools. Scalability considerations ensure the platform can serve everyone from intimate private parties to large organizational events, with pricing and service models that adapt to different event types and budget levels. The company vision extends beyond simple booking facilitation to creating a comprehensive ecosystem that supports artist career development, provides event organizers with confidence and convenience, and contributes to vibrant local music scenes by making quality live music more accessible and sustainable for all participants.',
    category: 'personal'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [navigationHistory, setNavigationHistory] = useState<Page[]>(['home']);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setSelectedProject(null);
    // Update navigation history (avoid duplicates if going to the same page)
    setNavigationHistory(prev => {
      const lastPage = prev[prev.length - 1];
      if (lastPage === page) {
        return prev; // Don't add duplicate
      }
      return [...prev, page];
    });
  };

  const viewProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project');
    // Add project page to history
    setNavigationHistory(prev => [...prev, 'project']);
  };

  const goBack = () => {
    if (currentPage === 'project' && selectedProject) {
      // From project detail, go back to the project category
      const targetPage = selectedProject.category;
      setCurrentPage(targetPage);
      setSelectedProject(null);
      // Update history to reflect this navigation
      setNavigationHistory(prev => {
        const newHistory = [...prev];
        newHistory.pop(); // Remove 'project'
        return newHistory;
      });
    } else if (navigationHistory.length > 1) {
      // For other pages, use history-based navigation
      const newHistory = [...navigationHistory];
      newHistory.pop(); // Remove current page
      const previousPage = newHistory[newHistory.length - 1];
      
      setNavigationHistory(newHistory);
      setSelectedProject(null);
      setCurrentPage(previousPage);
    } else {
      // Fallback: go to home
      setCurrentPage('home');
      setSelectedProject(null);
      setNavigationHistory(['home']);
    }
  };

  const getBackButtonInfo = () => {
    // Show back button on all pages except home
    const canGoBack = currentPage !== 'home';
    return { canGoBack, onBack: goBack };
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

  const { canGoBack, onBack } = getBackButtonInfo();

  return (
    <div className="bg-white text-black min-h-screen">
      {currentPage !== 'home' && (
        <Navigation 
          currentPage={currentPage} 
          onNavigate={navigateTo}
          canGoBack={canGoBack}
          onBack={onBack}
        />
      )}
      {renderCurrentPage()}
    </div>
  );
}