import  { useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const GitHubLink = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div id="github" className="flex justify-end space-x-4 mt-2 ">
      <a href="https://github.com/vagabondvagrant/jewelry-web" target="_blank" rel="noopener noreferrer">
        <FaGithub
          size={60}
          className={`text-gray-600 ${hovered ? 'text-gray-800' : ''} transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        />
      </a>
    </div>
  );
};

export default GitHubLink;
