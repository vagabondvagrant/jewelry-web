import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp, FaTimes, FaCopy } from 'react-icons/fa';

const WhatsappContact: React.FC = () => {
  const phoneNumber = '03414433662'; // Hardcoded phone number

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 16, left: 16 });
  const [isCopied, setIsCopied] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (popupRef.current && isPopupVisible) {
        const rect = popupRef.current.getBoundingClientRect();
        const newPosition = {
          top: Math.min(window.innerHeight - rect.height - 16, 16),
          left: Math.min(window.innerWidth - rect.width - 16, 16),
        };
        setPopupPosition(newPosition);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isPopupVisible]);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPopupVisible(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const openWhatsapp = () => {
    setIsPopupVisible(!isPopupVisible);
    const newPosition = {
      top: Math.min(window.innerHeight - 200, 16),
      left: Math.min(window.innerWidth - 200, 16),
    };
    setPopupPosition(newPosition);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setIsCopied(true);

    // Reset the copied state after 3 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 left-6">
      <div
        className={`bg-green-500 text-black py-2 px-4 rounded-full cursor-pointer text-2xl shadow-lg hover:bg-green-700 ${
          isPopupVisible ? '' : 'animate-spin'
        }`}
        onClick={openWhatsapp}
      >
        <FaWhatsapp />
      </div>
      {isPopupVisible && (
        <div
          ref={popupRef}
          className={`bg-white p-4 rounded-lg shadow-md animate-fade-in`}
          style={{ top: popupPosition.top, left: popupPosition.left }}
        >
          <p className="mb-2 text-lg font-semibold">Contact developer:</p>
          <div className="flex items-center">
            <FaWhatsapp className="mr-2 text-3xl rounded-full" />
            <a
              className="bg-gray-900 text-white rounded-full p-2 hover:opacity-70"
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {phoneNumber}
            </a>
          </div>
          <div className="flex mt-3">
            <span
              className="cursor-pointer mr-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={copyToClipboard}
              title="Copy to Clipboard"
            >
              <FaCopy />
            </span>
            <span
              className="cursor-pointer p-2 bg-gray-200 rounded-full hover:bg-gray-300"
              onClick={closePopup}
            >
              <FaTimes />
            </span>
          </div>
        </div>
      )}
      {isCopied && (
        <div className="fixed bottom-12 left-6 text-white bg-green-500 p-1 px-4 rounded-full mt-1 hover:opacity-70">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

export default WhatsappContact;
