import React from 'react';

const SearchSection: React.FC = () => {
  return (
    <div className="flex justify-end items-center space-x-2 p-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-64 py-2 px-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      <button className="px-3 py-2 rounded-full bg-teal-700 text-white text-sm font-medium">
        + Add Location
      </button>
    </div>
  );
};

export default SearchSection;