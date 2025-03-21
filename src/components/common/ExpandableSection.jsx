import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExpandableSection = ({ title, items, icon, bgColor = "bg-white" }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`mb-4 rounded-lg overflow-hidden border-2 ${bgColor}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-3 flex items-center justify-between hover:bg-opacity-80 transition-colors"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-bold">{title}</span>
        </div>
        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
      {isExpanded && (
        <div className="p-3 bg-white bg-opacity-50">
          {items.map((item, index) => (
            <Link 
              key={index} 
              to={item.link}
              className="block p-2 hover:bg-blue-50 rounded cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpandableSection;