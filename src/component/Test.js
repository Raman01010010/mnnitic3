import { useState } from 'react';

const Test = ({ content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border border-gray-300 p-4">
      <div className={`overflow-hidden transition-height ${expanded ? 'h-auto' : 'h-20'}`}>
        <p className="text-gray-600">{content}</p>
      </div>
      <button
        className="text-indigo-600 mt-2 font-medium focus:outline-none"
        onClick={toggleExpanded}
      >
        {expanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default Test;
