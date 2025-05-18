import React from 'react';
import { Menu, X } from 'lucide-react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-3 hover:bg-gray-800/50 rounded-lg transition-colors"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      {isOpen ? (
        <X className="w-6 h-6 text-white" aria-hidden="true" />
      ) : (
        <Menu className="w-6 h-6 text-white" aria-hidden="true" />
      )}
    </button>
  );
};

export default MenuButton;