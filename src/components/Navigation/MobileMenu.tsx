import React, { useEffect } from 'react';
import { useKeyPress } from '../../hooks/useKeyPress';
import MenuButton from './MenuButton';
import MenuItem from './MenuItem';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onToggle }) => {
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

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

  return (
    <div className="lg:hidden">
      <MenuButton isOpen={isOpen} onClick={onToggle} />
      
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
          onClick={onToggle}
        />
      )}

      {/* Menu panel */}
      <nav
        id="mobile-menu"
        className={`fixed top-[64px] right-0 bottom-0 w-[280px] bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Mobile navigation"
      >
        <ul className="py-4 px-2 space-y-1">
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              href={item.href}
              label={item.label}
              onClick={onToggle}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;