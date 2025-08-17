import React from 'react';

type Page = 'home' | 'academic' | 'personal' | 'about' | 'contact' | 'project';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'academic' as const, label: 'Academic Projects' },
    { id: 'personal' as const, label: 'Personal Projects' },
    { id: 'about' as const, label: 'About' },
    { id: 'contact' as const, label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onNavigate('home')}
            className="text-4xl portfolio-heading hover:opacity-70 transition-opacity text-[36px] uppercase"
          >
            James Lu
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`portfolio-body hover:opacity-70 transition-opacity ${
                  currentPage === item.id ? 'opacity-70' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`block w-full text-right hover:opacity-70 transition-opacity ${
                    currentPage === item.id ? 'opacity-70' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}