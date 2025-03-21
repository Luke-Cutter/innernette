import React, { useState } from 'react';
import { SignalHigh, Search } from 'lucide-react';
import GoHomeButton from '../../components/common/GoHomeButton';
import { useNavigate } from 'react-router-dom';

const CategoryLayout = ({ 
  logoSrc,
  bannerSrc,
  pageTitle,
  sections
}) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleSections, setVisibleSections] = useState(
    new Set(sections.map(section => section.type))
  );

  const toggleSection = (sectionType) => {
    setVisibleSections(prev => {
      const newSections = new Set(prev);
      if (newSections.has(sectionType)) {
        newSections.delete(sectionType);
      } else {
        newSections.add(sectionType);
      }
      return newSections;
    });
  };

  const filteredContent = sections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(section => 
    activeFilter === 'all' || section.type === activeFilter
  );

  return (
    <div>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-4">
                <img 
                  src={logoSrc}
                  alt={`${pageTitle} Logo`}
                  className="w-24 h-24 object-contain"
                />
              </button>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    activeFilter === 'all' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  All
                </button>
                {sections.map(section => (
                  <button 
                    key={section.type}
                    onClick={() => setActiveFilter(section.type)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      activeFilter === section.type ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search shows..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <GoHomeButton />
            </div>
          </div>
        </div>
      </div>

      {/* Banner Container */}
      <div className="flex justify-center w-full p-4">
        <div className="relative w-[850px]">
          <img 
            src={bannerSrc}
            alt={`${pageTitle} Banner`}
            className="w-full h-[150px] object-contain rounded-lg border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow">
        {filteredContent.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <button 
              onClick={() => toggleSection(section.type)}
              className="flex items-center gap-3 mb-6 w-full group bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-purple-200"
            >
              <div className="flex items-center gap-3 flex-grow">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg shadow-sm">
                  {React.cloneElement(section.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                  {section.title}
                </h2>
              </div>
              <div className={`text-lg text-purple-500 transition-transform ${visibleSections.has(section.type) ? 'rotate-90' : ''}`}>
                ▶
              </div>
            </button>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${visibleSections.has(section.type) ? 'block' : 'hidden'}`}>
              {section.items.map((item, itemIndex) => (
                <button
                  onClick={() => navigate(item.link)}
                  key={itemIndex}
                  className="group bg-white/90 backdrop-blur-md rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-200"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      {item.time || item.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="mt-2 flex justify-center flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 text-xs shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {pageTitle} - You Are Always Offline on the Innernette™
            </div>
            <div className="flex items-center gap-2">
              <SignalHigh className="w-4 h-4 text-indigo-400 animate-pulse" />
              <SignalHigh className="w-4 h-4 text-indigo-400 animate-pulse delay-100" />
              <SignalHigh className="w-4 h-4 text-indigo-400 animate-pulse delay-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryLayout;