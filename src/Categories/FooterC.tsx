import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [isSubscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setValidEmail] = useState(true);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (isValid) {
      setSubscribed(true);
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  return (
    <footer className="mt-8 bg-gradient-to-r from-customcolor to-gray-900 p-4 rounded md:p-8 text-white text-center md:rounded-lg">
      <div className="flex flex-col md:flex-row justify-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl md:text-xl font-bold mb-2">Contact Us</h3>
          <address className='text-gray-300'>
            Email: <a href={`mailto:${email}`} className="hover:underline">{email}</a><br />
            Phone: 0318-6112144
          </address>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg md:text-xl font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-2xl justify-center">
            <a href="https://www.facebook.com" className="text-blue-300 hover:text-blue-500 transform transition-transform hover:scale-110">
              <FaFacebook />
            </a>
            <a href="https://www.twitter.com" className="text-blue-300 hover:text-blue-500 transform transition-transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="text-blue-300 hover:text-blue-500 transform transition-transform hover:scale-110">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg md:text-xl font-bold mb-2">Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-white text-black p-2 rounded-l focus:outline-none ${isValidEmail ? '' : 'border-red-500'}`}
            />
            <button
              type="submit"
              className="bg-gray-700 text-white p-2 rounded-r hover:bg-gray-500 focus:outline-none transform transition-transform hover:scale-110 rounded"
            >
              Subscribe
            </button>
          </form>
          {!isValidEmail && (
            <p className="text-red-500 mt-2 ">Please enter a valid email address.</p>
          )}
          {isSubscribed && (
            <p className="text-white font-semibold mt-2 focus:outline-none transform transition-transform hover:scale-110 rounded">Your Gmail account is now attached to this app!</p>
          )}
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-2">Address</h3>
          <p className='text-gray-300 focus:outline-none transform transition-transform hover:scale-110 rounded'>Quaid e Azam town, Haroon Abad</p>
        </div>
      </div>
      <p className="mt-4 text-sm md:text-base text-gray-300 animate-pulse">
        &copy; {new Date().getFullYear()} Kabeer's Jewels. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
