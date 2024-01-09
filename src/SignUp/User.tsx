import React, { useState } from 'react';
import { RiAccountCircleFill, RiLogoutCircleRLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User: React.FC = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleIconClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    new Promise((resolve) => setTimeout(resolve, 2000))
      .then(() => {
        toast.success('Logout successful');

        window.location.href = '/';
      })
      .catch((error) => {
        console.error('Logout error:', error);
        toast.error('Logout failed. Please try again.');
      });
  };

  return (
    <div className="flex items-center">
      <div className="cursor-pointer relative" onClick={handleIconClick}>
        <RiAccountCircleFill size={30} />

        {isUserMenuOpen && (
          <div className="absolute right-0 top-9 bg-gray-900 text-white p-2 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <p className='hover:bg-gray-700 opacity-90'>Dissentious Blud</p>
              <RiAccountCircleFill size={25} className="mr-2" />
            </div>
            <div className="flex items-center cursor-pointer" onClick={handleLogout}>
              <p className="mr-2 hover:bg-gray-700 opacity-90">Logout</p>
              <RiLogoutCircleRLine size={20} />
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default User;
