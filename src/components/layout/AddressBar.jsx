// src/components/layout/AddressBar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X, RotateCw, Search, Disc3} from 'lucide-react';

const AddressBar = ({ currentPath }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const baseUrl = 'innernette.cinco';
  const displayPath = location.pathname.replace(process.env.PUBLIC_URL, '');
  const currentUrl = `https://${baseUrl}${displayPath}`;

  return (
    <div className="h-8 bg-gradient-to-b from-gray-50 to-gray-100 flex items-center px-2 gap-2 border-b border-gray-300">
      <button 
        onClick={() => navigate(-1)}
        className="hover:bg-gray-200 rounded"
      >
        <ChevronLeft className="w-4 h-4 text-gray-500" />
      </button>
      <button 
        onClick={() => navigate(1)}
        className="hover:bg-gray-200 rounded"
      >
        <ChevronRight className="w-4 h-4 text-gray-500" />
      </button>
      <div className="flex-grow flex items-center bg-white border border-gray-300 rounded h-6 px-2">
      <Disc3 className="w-4 h-4 mr-2" />
        <span className="text-xs">{currentUrl}</span>
        <div className="ml-auto flex gap-1">
          <button 
            onClick={() => window.location.reload()}
            className="w-5 h-5 bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-300 rounded flex items-center justify-center"
          >
            <RotateCw className="w-3 h-3 text-gray-600" />
          </button>
          <button 
            onClick={() => navigate('/home')}
            className="w-5 h-5 bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-300 rounded flex items-center justify-center"
          >
            <X className="w-3 h-3 text-gray-600" />
          </button>
        </div>
      </div>
      <div className="w-48 flex items-center bg-white border border-gray-300 rounded h-6">
        <span className="text-xs mx-2">CINCO Search</span>
        <div className="ml-auto h-full flex items-center px-2 border-l border-gray-200">
          <Search className="w-3 h-3 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default AddressBar;