import React, { useState, useEffect } from 'react';
import data from '../data/data.json'
const Test = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const calculateCountdown = () => {
      const currentDate = new Date();
      const targetDate = new Date(currentDate.getFullYear(),data.time.month-1, data.time.day); // December is month 11 (0-indexed)
      const timeDifference = targetDate - currentDate;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setCountdown(`${days} days, ${hours} hours, ${minutes} min, ${seconds} sec remaining`);
      } else {
        setCountdown('Event is On Going');
      }
    };

    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col pt-2 items-center">
    
      <div className="bg-gradient-to-r w-full from-pink-400 to-purple-500 rounded p-4 shadow-lg">
        <p className="text-white w-full h-4  sm:text-xl text-xs ">{countdown}</p>
      </div>
    </div>
  );
};

export default Test;
