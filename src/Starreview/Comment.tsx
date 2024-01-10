import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CommentProps {}

const Comment: React.FC<CommentProps> = () => {
  const [comment, setComment] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [comments, setComments] = useState<{ id: string; text: string; likes: number }[]>([]);
  const [likes, setLikes] = useState<number[]>([]);
  const maxCharacters = 150;
  const editTimeframeInSeconds = 60;

  useEffect(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    setTimestamp(`${hours}:${minutes}`);
  }, []);

  const generateRandomUserId = () => {
    return Math.random().toString(36).substring(2, 10); // Generate a random user ID
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newComment = event.target.value;
    if (newComment.length <= maxCharacters) {
      setComment(newComment);
    }
  };

  const handleSubmit = () => {
    if (comment.trim() !== '') {
      const userId = generateRandomUserId();

      setComments((prevComments) => [...prevComments, { id: userId, text: comment, likes: 0 }]);
      setLikes((prevLikes) => [...prevLikes, 0]);

      setComment('');
      toast.success('Comment submitted successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error('Please enter a valid comment!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleEdit = () => {
    setIsEditable(true);
    setTimeout(() => {
      setIsEditable(false);
    }, editTimeframeInSeconds * 1000);
  };

  const handleDelete = (index: number) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
    const updatedLikes = [...likes];
    updatedLikes.splice(index, 1);
    setLikes(updatedLikes);
    toast.info('Comment deleted successfully!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleLike = (index: number) => {
    const updatedLikes = [...likes];
    updatedLikes[index]++;
    setLikes(updatedLikes);
  };

  return (
    <div id="comment" className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Discussion Form</h2>
      <div className="flex items-center mb-2">
        <textarea
          className="w-full h-20 p-2 border rounded-md"
          placeholder="Type your comment here..."
          value={comment}
          onChange={handleCommentChange}
          disabled={isEditable}
        ></textarea>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-gray-500">{`${comment.length}/${maxCharacters} characters`}</div>
        {isEditable ? (
          <div className="flex">
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded-full mr-2 hover:bg-gray-700"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700"
              onClick={() => setIsEditable(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex">
            <button
              className={`bg-customcolor hover:opacity-70 rounded-full p-2 text-white ${
                comment.length > maxCharacters || isEditable
                  ? 'cursor-not-allowed opacity-50'
                  : 'hover:opacity-70'
              }`}
              onClick={handleSubmit}
              disabled={comment.length > maxCharacters || isEditable}
            >
              Submit
            </button>
            <button
              className="bg-customcolor hover:opacity-70 rounded-full ml-2 p-2 text-white"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        )}
      </div>
      <div className="text-white mt-2 font-semibold bg-cyan-800 rounded-full p-2 text-center hover:opacity-70">
        Submitted at {timestamp}
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Submitted Comments:</h3>
        {comments.map((commentObj, index) => (
          <div key={index} className="flex items-center justify-between">
            <p className="bg-gray-900 text-white rounded-full hover:opacity-70 p-2">
              {commentObj.text}
              <span className="ml-2 text-gray-500">Likes: {likes[index]}</span>
              <span className="ml-2 text-gray-500">User ID: {commentObj.id}</span>
            </p>
            <div className="flex items-center">
              <button
                className="text-white font-semibold border-pink-600 bg-red-900 rounded-full p-2 hover:bg-red-700 mr-2"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button
                className="bg-blue-700 rounded-full text-white p-2 hover:bg-blue-400 mr-2"
                onClick={() => handleLike(index)}
              >
                &#x1F44D;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;

