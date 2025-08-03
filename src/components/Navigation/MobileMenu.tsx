import React, { useEffect } from 'react';
import { useKeyPress } from '../../hooks/useKeyPress';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  navItems: Array<{ id: string; label: string }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle, activeSection, navItems }) => {
  // Close menu on ESC key press
  useKeyPress('Escape', () => {
    if (isOpen) onToggle();
  });

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    onToggle();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden">
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={onToggle}
      />

      {/* Menu panel */}
      <nav
        className={`fixed top-16 right-0 bottom-0 w-[280px] glass-effect transform transition-all duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-700/50">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <p className="text-sm text-gray-400 mt-1">Choose a section to explore</p>
          </div>

          {/* Menu Items */}
          <ul className="flex-1 py-4 px-2 space-y-2">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(`#${item.id}`)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 group focus-ring ${
                    activeSection === item.id
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </button>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700/50">
            <div className="text-center">
              <p className="text-xs text-gray-500">© 2024 Kubra Noor</p>
              <p className="text-xs text-gray-500 mt-1">Frontend Developer</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;