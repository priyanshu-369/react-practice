import React from "react";

function TagBox({ textMessage }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 max-w-md mx-auto shadow-sm mt-2">
      <p className="text-gray-800 text-base flex-1">{textMessage}</p>
      <button className="ml-4 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
        Clear
      </button>
    </div>
  );
}

export default TagBox;
