import React from 'react';

export const WorkInProgress = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="relative flex flex-col items-center p-8 bg-gray-900 rounded-lg shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-50 rounded-lg -z-10"></div>
        <div className="flex items-center justify-center w-24 h-24 border-4 border-blue-500 rounded-full animate-spin">
          <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v6h4l-6 6-6-6h4V4z" />
          </svg>
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-white">Work in Progress</h2>
        <p className="mt-2 text-lg text-gray-400">We are working hard to bring this feature to you.</p>
      </div>
    </div>
  );
};

