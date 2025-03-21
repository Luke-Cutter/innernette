import React, { useEffect, useRef } from 'react';
import ProcessSteps from '../shared/ProcessSteps';
import ProductFeatures from '../shared/ProductFeatures';
import WarningNotice from '../shared/WarningNotice';
import { Link } from 'react-router-dom';

const TechSupportLayout = ({
  pageTitle,
  tagline,
  errorCode,
  helpTopics,
  solutions,
  relatedIssues,
  warnings,
  children
}) => {
  const helpTopicsRef = useRef(null);
  const relatedIssuesRef = useRef(null);

  useEffect(() => {
    if (helpTopicsRef.current && relatedIssuesRef.current) {
      const helpTopicsHeight = helpTopicsRef.current.offsetHeight;
      relatedIssuesRef.current.style.height = `${helpTopicsHeight}px`;
    }
  }, [helpTopics]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-100 via-orange-50 to-amber-100 border-b-4 border-amber-600">
        {/* Tech pattern background */}
        <div className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M30 30h10v10H30zM20 20h10v10H20z' stroke='%23D97706' stroke-width='1' opacity='0.2'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
        />

        {/* Navigation Bar */}
        <div className="relative border-b-2 border-amber-600 bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              <div className="text-2xl font-mono text-amber-700">
                CINCO™ TECH HELP
              </div>
              {errorCode && (
                <div className="text-sm font-mono text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200 animate-pulse">
                  Error Code: {errorCode}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Title Content */}
        <div className="relative pt-12 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-white/80 p-8 rounded-lg shadow-lg border-2 border-amber-600">
              <h1 className="text-4xl font-bold text-amber-800 mb-4 font-mono">
                {pageTitle}
              </h1>
              {tagline && (
                <p className="text-xl text-amber-700 font-mono">
                  {tagline}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Help Topics */}
            {helpTopics && helpTopics.length > 0 && (
              <div 
                ref={helpTopicsRef}
                className="bg-white rounded-lg p-8 shadow-lg border-2 border-amber-600"
              >
                <h2 className="text-3xl font-mono font-bold text-amber-800 mb-8 text-center">
                  Help Topics
                </h2>
                <ProcessSteps steps={helpTopics} />
              </div>
            )}
            {children}
          </div>

          {/* Right Column - Related Issues & Warnings */}
          <div className="space-y-8">
            {/* Related Issues */}
            {relatedIssues && relatedIssues.length > 0 && (
              <div 
                ref={relatedIssuesRef}
                className="bg-white rounded-lg p-6 shadow-lg border-2 border-amber-600 flex flex-col"
              >
                <h3 className="text-xl font-mono font-bold text-amber-800 mb-4 sticky top-0 bg-white pb-2">
                  Related Issues
                </h3>
                <div className="overflow-y-auto flex-1">
                  <ul className="space-y-4 mr-2">
                    {relatedIssues.map((issue, index) => (
                      <li 
                        key={index}
                        className="p-4 bg-amber-50 rounded border border-amber-200 hover:bg-amber-100 transition-colors"
                      >
                        <Link 
                          to={issue.link} 
                          className="text-amber-900 font-mono hover:text-amber-700 block"
                        >
                          {issue.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Warnings */}
      {warnings && warnings.length > 0 && (
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <WarningNotice warnings={warnings} />
        </div>
      )}

      {/* Solutions */}
      {solutions && solutions.length > 0 && (
        <div className="max-w-7xl mx-auto px-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-amber-600">
            <h2 className="text-3xl font-mono font-bold text-amber-800 mb-8 text-center">
              Solutions
            </h2>
            <ProductFeatures features={solutions} />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t-4 border-amber-600 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-amber-800 font-mono">
              © 2008 CINCO™ TECH HELP
            </div>
            <div className="text-sm text-amber-800 font-mono">
              For Your Technology
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechSupportLayout;