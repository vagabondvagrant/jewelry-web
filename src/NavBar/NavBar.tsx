import React, { useState } from 'react';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import User from '../SignUp/User';

const NavBar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false);
  };

  const scrollToElement = (element: string) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="md:hidden flex justify-between bg-gradient-to-r from-gray-900 to-gray-600 p-4">
        <div className="ml-60">
          <User />
        </div>
        {isMenuOpen ? (
          <FiX className="text-white cursor-pointer" onClick={toggleMenu} />
        ) : (
          <FiMenu className="text-white cursor-pointer" onClick={toggleMenu} />
        )}
      </div>

      <ul
        className={`flex-col fixed top-0 right-0 h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white justify-center items-center space-y-4 p-4 transform transition-transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 1000 }} 
      >
        <li className="hover:text-gray-300 hover:border-b hover:border-gray-300 transition duration-300">
          <Link to="/" onClick={scrollToTop}>
            Home
          </Link>
        </li>
        <li className="hover:text-gray-300 hover:border-b hover:border-gray-300 transition duration-300">
          <Link to="mail" onClick={() => scrollToElement('mail')}>
            Contact Us
          </Link>
        </li>
       
        <li className="hover:text-gray-300 hover:border-b hover:border-gray-300 transition duration-300">
          <Link to="categories" onClick={() => scrollToElement('categories')}>
            Categories
          </Link>
        </li>
        <li className="hover:text-gray-300 hover:border-b hover:border-gray-300 transition duration-300">
          <Link to="jewelry" onClick={() => scrollToElement('jewelry')}>
            Jewelry
          </Link>
        </li>
        <li className="hover:text-gray-300 hover:border-b hover:border-gray-300 transition duration-300">
          <Link to="cart" onClick={() => scrollToElement('cart')}>
            Cart
          </Link>
        </li>
        <li className="hover:text-gray-300 hover:border-b hover:border-gray-300 transition duration-300">
          <Link to="comment" onClick={() => scrollToElement('comment')}>
            Discussion Forum
          </Link>
        </li>
        <li className="hover:text-gray-300 hover:border-b hover:border-gray-300 transition duration-300">
          <Link to="review" onClick={() => scrollToElement('review')}>
            Review
          </Link>
        </li>
        <li className="hover:text-gray-300 hover:border-b hover:border-gray-300 transition duration-300">
          <Link to="poll" onClick={() => scrollToElement('poll')}>
            Jewelry Poll
          </Link>
        </li>
        <li className="hover:text-gray-300 hover:border-b hover:border-gray-300 transition duration-300">
          <Link to="github" onClick={() => scrollToElement('github')}>
            Github
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
