import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StarReview: React.FC = () => {
  const totalStars = 5;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  const handleReset = () => {
    setRating(0);
    setComment('');
  };

  const getFeedbackMessage = () => {
    const feedbackMessages = [
      'Uh-oh! 😟 This needs improvement.',
      'Hmm, not bad! 😐 Room for improvement.',
      'Nice effort! 🙂 Good but not great.',
      'Well done! 👍 That was good.',
      'Fantastic! 🌟 Excellent job!',
    ];

    return feedbackMessages[rating - 1];
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const getCommentLengthMessage = () => {
    if (comment.length === 0) {
      return 'Add your comments...';
    } else if (comment.length <= 50) {
      return 'Short and sweet! 👍';
    } else if (comment.length <= 100) {
      return 'Great feedback! 🚀';
    } else {
      return 'Wow, that\'s detailed! 📝';
    }
  };

  const handleSubmit = () => {
    setLoading(true);

    // Simulate a delay (you can replace this with your actual submission logic)
    setTimeout(() => {
      // Simulate a successful submission
      toast.success('Feedback submitted successfully!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });

      setLoading(false);
      handleReset();
    }, 2000);
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div id="review" className={`text-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <p className="text-xl font-semibold">How was your experience?</p>
      <div className="flex items-center justify-center space-x-2">
        {[...Array(totalStars)].map((_, index) => (
          <FaStar
            key={index}
            className={`cursor-pointer transform hover:scale-110 transition duration-300 ${
              index < rating ? 'text-blue-500' : 'text-gray-300'
            }`}
            onClick={() => handleStarClick(index + 1)}
            title={`Rate ${index + 1} star`}
          />
        ))}
      </div>
      {showPopup && (
        <div className="mt-2">
          <p className="text-green-500">Thanks for your feedback!</p>
        </div>
      )}
      {rating > 0 && (
        <div className="mt-4">
          <p className="text-lg font-semibold">{getFeedbackMessage()}</p>
          <div
            className="bg-gray-200 h-4 rounded-md"
            style={{ width: `${rating * 20}%`, backgroundColor: '#FFD700' }}
          ></div>
          <p className="text-gray-500">We appreciate your input!</p>
          <textarea
            className={`mt-2 p-2 border rounded-md w-full ${darkMode ? 'bg-gray-700 text-white' : ''}`}
            placeholder={getCommentLengthMessage()}
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          {comment.length > 0 && (
            <div className="mt-2 text-gray-500">
              <p className='text-xl fonte-bold text-bgcustomcolor'>Live Preview:</p>
              <p className="italic">{comment}</p>
            </div>
          )}
        </div>
      )}
      <div className="mt-2">
        {rating > 0 && <p className="text-gray-500">{getCommentLengthMessage()}</p>}
        {rating > 0 && !loading && (
          <button
            className={`bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700 ${darkMode ? 'hover:text-white' : ''}`}
            onClick={handleSubmit}
          >
            Submit Feedback
          </button>
        )}
        {loading && (
          <div className="mt-2">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"></div>
          </div>
        )}
      </div>
      <div className="mt-4">
        {rating > 0 && (
          <button
            className={`bg-gray-200 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-300 ${darkMode ? 'hover:text-white' : ''}`}
            onClick={handleReset}
          >
            Reset Rating
          </button>
        )}
      </div>
      <div className="mt-2">
        <label className="cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox text-blue-500"
            checked={darkMode}
            onChange={handleToggleDarkMode}
          />
          <span className="ml-2">Dark Mode</span>
        </label>
      </div>
      {rating > 0 && (
        <div className="mt-2">
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default StarReview;
