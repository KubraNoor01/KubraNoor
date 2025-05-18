import React from 'react';

interface MenuItemProps {
  href: string;
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, label, onClick }) => {
  return (
    <li className="transform transition-transform duration-200 hover:translate-x-2">
      <a
        href={href}
        className="block py-3 px-4 text-lg text-white hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
};

export default MenuItem;