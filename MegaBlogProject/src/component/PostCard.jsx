import React from 'react';
import appwriteService from "../appwrite/configuration.js";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  const imageUrl = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : 'https://placehold.co/400x300/e2e8f0/64748b?text=No+Image';

  return (
    <Link to={`/post/${$id}`} className="block h-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 h-full flex flex-col border border-gray-200">
        <div className="relative w-full pb-[75%] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e2e8f0/64748b?text=Image+Load+Error'; }}
          />
        </div>
        <div className="p-4 flex-grow flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 leading-tight line-clamp-2">
            {title}
          </h2>
          <div className="mt-4">
            <span className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
              Read More
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
