import React from 'react';
import { Link } from 'react-router-dom';
import User from '../SignUp/User';

const NavBar: React.FC = () => {
  return (
    <div>
      {/* Conditionally render User component on short devices */}
      <div className="sm:hidden bg-gray-400 flex justify-end p-4">
        <User />
      </div>

      {/* Conditionally render ul on devices other than short devices */}
      <ul className="hidden sm:flex h-20 bg-gray-700 text-white justify-center items-center space-x-4">
        {/* Your navigation items go here */}
        <li className="hover:text-gray-300"><Link to="/">Home</Link></li>
        <li className="hover:text-gray-300"><Link to="/about">About</Link></li>
        <li className="hover:text-gray-300"><Link to="/contact">Contact</Link></li>
        {/* Add a link to the Categories page */}
        <li className="hover:text-gray-300"><Link to="/categories">Categories</Link></li>
        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
};

export default NavBar;
