import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-8 bg-customcolor6 p-4 rounded md:p-8 text-white text-center md:rounded-lg">
      <div className="flex flex-col md:flex-row justify-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg md:text-xl font-bold mb-2">Contact Us</h3>
          <p className='text-gray-300'>Email: Kab6168@gmail.com</p>
          <p className='text-gray-300'>Phone: 0318-6112144</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg md:text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-300 hover:text-blue-500">
              Facebook
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-500">
              Twitter
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-500">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-2">Address</h3>
          <p className='text-gray-300'>123 Main St, Cityville, Country</p>
        </div>
      </div>
      <p className="mt-4 text-sm md:text-base text-gray-300">&copy; 2023 Kabeer's jewels. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
