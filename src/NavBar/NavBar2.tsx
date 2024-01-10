import React, { useState } from 'react';
import { Link, scroller } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import User from '../SignUp/User';

const NavBarDesktop: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToElement = (element: string) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    setMenuOpen(false);
  };

  const menuItems = [
    { to: '/', text: 'Home' },
    { to: 'mail', text: 'Contact Us' },
    { to: 'categories', text: 'Categories' },
    { to: 'jewelry', text: 'Jewelry' },
    { to: 'cart', text: 'Cart' },
    { to: 'comment', text: 'Discussion Forum' },
    { to: 'review', text: 'Review' },
    { to: 'poll', text: 'Jewelry Poll' },
    { to: 'github', text: 'Github' },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-400 to-gray-600 p-4 md:h-20">
      <div className="md:flex justify-between items-center">
        <div className="md:ml-4">
          <User />
        </div>
        {isMenuOpen ? (
          <FiX className="text-white cursor-pointer text-2xl" onClick={toggleMenu} />
        ) : (
          <FiMenu className="text-white cursor-pointer text-2xl" onClick={toggleMenu} />
        )}
      </div>

      <nav className={`hidden md:flex md:flex-row md:space-x-4 md:items-center md:h-full bg-gradient-to-r from-gray-400 to-gray-600 text-white p-4 transform transition-transform ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {menuItems.map((item) => (
          <NavItem key={item.to} to={item.to} onClick={scrollToElement} label={item.text} />
        ))}
      </nav>
    </header>
  );
};

interface NavItemProps {
  to: string;
  onClick: (element: string) => void;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, onClick, label }) => {
  return (
    <li className="hover:text-gray-300 hover:border-b hover:border-gray-300 transition duration-300">
      <Link
        to={to}
        onClick={() => onClick(to)}
        className="text-lg font-semibold focus:outline-none"
      >
        {label}
      </Link>
    </li>
  );
};

export default NavBarDesktop;
