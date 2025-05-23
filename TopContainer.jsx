import React, { useState, useEffect } from 'react';

const TopContainer = ({ setClicked, setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('');
  const title = "FOODY ZONE";

  useEffect(() => {
    const timeout = setTimeout(() => setSearchQuery(inputValue), 300);
    return () => clearTimeout(timeout);
  }, [inputValue, setSearchQuery]);

  return (
    <header className="flex flex-col items-center p-6 space-y-6">
      <div className="w-full flex justify-between items-center px-8">
        <h1 className="text-3xl font-bold flex space-x-1">
          {title.split('').map((char, index) => (
            <span
              key={index}
              className={`text-white animate-letter-flash`}
              style={{
                animationDelay: `${index * 0.2}s`,
                animationIterationCount: 'infinite',
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        <input
          type="text"
          placeholder="Search Food"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={`px-4 py-2 bg-black text-white rounded border transition-all duration-300 ${
            inputValue ? 'border-red-900' : 'border-white'
          } focus:outline-none`}
        />
      </div>

      <ul className="flex justify-center gap-4">
        {['All', 'Breakfast', 'Lunch', 'Dinner'].map((item, index) => (
          <li
            onClick={() => setClicked(item)}
            key={index}
            className="px-3 border border-white text-white font-medium rounded transition-all cursor-pointer hover:bg-rose-400 hover:text-white hover:border-white active:bg-red-600 active:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default TopContainer;