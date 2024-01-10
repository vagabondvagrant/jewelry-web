import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const GoToTopBottomIcons: React.FC = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-center space-y-4">
      <div
        className="bg-gray-800 p-2 rounded-full cursor-pointer"
        onClick={scrollToTop}
      >
        <FiArrowUp className="text-white" />
      </div>
      <div
        className="bg-gray-800 p-2 rounded-full cursor-pointer"
        onClick={scrollToBottom}
      >
        <FiArrowDown className="text-white" />
      </div>
    </div>
  );
};

export default GoToTopBottomIcons;
