import React, { useState } from 'react';

const JewelryPoll: React.FC = () => {
  const [votes, setVotes] = useState<number[]>([0, 0, 0, 0, 0]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const options = ['Diamonds', 'Gold', 'Silver', 'Gemstones', 'Pearls'];
  const optionColors = ['#F6AD55', '#68D391', '#63B3ED', '#A78BFA', '#FBD38D'];

  const handleVote = (index: number) => {
    if (selectedOption === null) {
      const newVotes = [...votes];
      newVotes[index]++;
      setVotes(newVotes);
      setSelectedOption(index);
    }
  };

  const resetPoll = () => {
    setVotes([0, 0, 0, 0, 0]);
    setSelectedOption(null);
  };

  const totalVotes = votes.reduce((acc, vote) => acc + vote, 0);

  return (
    <div id="poll" className="poll-container max-w-lg mx-auto mt-8 p-6 rounded-md shadow-md text-white" style={{ background: 'linear-gradient(to right, #434343, #434343, #434343, #434343, #434343, #434343, #434343, #434343, #434343, #434343)' }}>
      <h2 className="text-3xl font-bold mb-4 text-center">🌟 Jewelry Preference Poll 🌟</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-xl font-semibold mb-4 text-center">Which type of jewelry do you prefer?</p>
          <div className="space-y-4">
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center justify-between px-4 py-2 border rounded-md cursor-pointer transition duration-300 transform ${
                  selectedOption === index ? 'bg-blue-700 text-white' : 'hover:scale-105 hover:bg-opacity-80'
                }`}
                onClick={() => handleVote(index)}
                style={{ backgroundColor: optionColors[index] }}
              >
                <div className="flex items-center">
                  <div className="relative w-32 h-4 bg-gray-300 rounded-full">
                    <div
                      className={`absolute top-0 left-0 h-full bg-blue-500 rounded-full ${
                        selectedOption === index ? 'w-full' : 'w-0'
                      } transition duration-300`}
                    ></div>
                  </div>
                  <span className="text-lg ml-2">{option}</span>
                </div>
                <div className="vote-count bg-purple-500 rounded-full p-2 animate-pulse">{votes[index]}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xl font-semibold mb-4 text-center">Poll Information</p>
          {selectedOption !== null ? (
            <div>
              <p className="text-lg mb-2">Your vote for {options[selectedOption]} has been recorded. Thanks for participating!</p>
              <button
                className="bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-900"
                onClick={resetPoll}
              >
                Reset Poll
              </button>
            </div>
          ) : (
            <p className="text-lg mb-2">Please select an option to vote.</p>
          )}

          <div className="mt-4">
            <p className="text-sm">
              Total Votes: {totalVotes} | {totalVotes > 0 && totalVotes !== 1 ? 'votes' : 'vote'} recorded.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JewelryPoll;
