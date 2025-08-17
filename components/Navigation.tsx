import React from 'react';

type Page = 'home' | 'academic' | 'personal' | 'about' | 'contact' | 'project';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onBack?: () => void;
  canGoBack?: boolean;
}

export default function Navigation({ currentPage, onNavigate, onBack, canGoBack }: NavigationProps) {
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
          <div className="flex items-center space-x-4">
            {canGoBack && onBack && (
              <button 
                onClick={onBack}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onBack();
                  }
                }}
                className="back-arrow-button group flex items-center justify-center hover:opacity-70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 rounded-lg p-2"
                aria-label="Go back to previous page"
                title="Go back"
              >
                <svg 
                  viewBox="0 0 120 32" 
                  className="w-28 h-8 text-black" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3"
                >
                  <path d="M110 16H10M18 8l-8 8 8 8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
            <button 
              onClick={() => onNavigate('home')}
              className="text-4xl portfolio-heading hover:opacity-70 transition-opacity text-[36px] uppercase"
            >
              James Lu
            </button>
          </div>
          
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