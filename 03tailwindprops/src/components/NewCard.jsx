import React from "react";

function NewCard({price,canceledPrice ,imageSource }){
 const localPrice = parseInt(price)
 const localPriceNumber = localPrice.toLocaleString()
  return(
 <div className="bg-white w-2xs rounded-xl shadow-md overflow-hidden border-blue-50 border  shadow-zinc-400 ">
  <div className="relative">
    <img
      src={imageSource}
      alt="Elegant Furniture"
      className="w-full h-64 object-cover"
    />
    <div className="absolute top-4 left-4 bg-indigo-600 text-white text-sm font-semibold rounded-full px-3 py-1">
      New Arrival
    </div>
  </div>
  <div className="px-6 py-4">
    <h3 className="text-xl font-semibold text-gray-800 mb-2 tracking-tight">Artisan Crafted Lounge Chair</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">
      Experience unparalleled comfort and timeless design with our latest lounge chair. Handcrafted with premium materials.
    </p>
    <div class="flex items-center justify-between">
      <div>
        <span className="text-gray-700 font-bold text-lg">₹{localPriceNumber}</span>
        <span className="text-gray-500 line-through ml-2">₹{canceledPrice}</span>
      </div>
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  </div>
  <div className="bg-gray-100 px-6 py-3 text-sm text-gray-500 flex justify-end items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
      <path fillRule="evenodd" d="M12 2.25c-5.304 0-9.75 4.446-9.75 9.75s4.446 9.75 9.75 9.75 9.75-4.446 9.75-9.75S17.304 2.25 12 2.25zM8.547 14.27a.75.75 0 001.06 1.06l3-3a.75.75 0 00-1.06-1.06l-3 3zm6.906-3.02a.75.75 0 00-1.06-1.06l-3 3a.75.75 0 001.06 1.06l3-3z" clipRule="evenodd" />
    </svg>
    Free Shipping
  </div>
</div>
)}

export default NewCard