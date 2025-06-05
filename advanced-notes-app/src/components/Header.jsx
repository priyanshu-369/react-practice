import React from 'react';

function Header({ toggleView, showArchived }) {
  return (
    <header className="flex justify-between items-center pb-5 border-b border-gray-200 mb-5">
      <h1 className="text-3xl font-bold text-gray-800">My Smart Notes</h1>
      <button
        onClick={toggleView}
        className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer text-base
                   hover:bg-blue-700 transition-colors duration-200 ease-in-out"
      >
        {showArchived ? 'Show Active Notes' : 'Show Archived Notes'}
      </button>
    </header>
  );
}

export default Header;