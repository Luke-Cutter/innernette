import React from 'react';

const CategorySections = ({ sections, gradientColors }) => {
  const [visibleSections, setVisibleSections] = React.useState(
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

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-12">
          <button 
            onClick={() => toggleSection(section.type)}
            className="flex items-center gap-3 mb-6 w-full group bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-purple-200"
          >
            <div className="flex items-center gap-3 flex-grow">
              <div className={`bg-gradient-to-r from-${gradientColors.primary}-500 to-${gradientColors.secondary}-500 p-3 rounded-lg shadow-sm`}>
                {React.cloneElement(section.icon, { className: "w-8 h-8 text-white" })}
              </div>
              <h2 className={`text-3xl font-bold bg-gradient-to-r from-${gradientColors.primary}-700 to-${gradientColors.secondary}-600 bg-clip-text text-transparent`}>
                {section.title}
              </h2>
            </div>
            <div className={`text-lg text-${gradientColors.primary}-500 transition-transform ${visibleSections.has(section.type) ? 'rotate-90' : ''}`}>
              ▶
            </div>
          </button>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300 ${visibleSections.has(section.type) ? 'block' : 'hidden'}`}>
            {section.items.map((item, itemIndex) => (
              <a
                key={itemIndex}
                href={item.link}
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
                  {item.tags && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 text-xs shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default CategorySections;