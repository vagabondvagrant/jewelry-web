import React from 'react';
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
        <li className="hover:text-gray-300">Home</li>
        <li className="hover:text-gray-300">About</li>
        <li className="hover:text-gray-300">Contact</li>
        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
};

export default NavBar;
