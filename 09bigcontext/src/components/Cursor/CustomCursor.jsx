import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  // State to store the cursor's X and Y coordinates
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Effect to add and remove the mousemove event listener
  useEffect(() => {
    // Event handler to update position on mouse move
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Add the event listener when the component mounts
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    // The custom cursor element
    // fixed: Positions it relative to the viewport.
    // z-50: Ensures it stays on top of other content.
    // pointer-events-none: Crucial! Prevents the custom cursor from interfering with clicks on underlying elements.
    // w-8 h-8: Sets the size of the cursor (e.g., a small circle).
    // rounded-full: Makes it a circle.
    // bg-blue-500/50: Semi-transparent blue background.
    // backdrop-blur-sm: Adds a slight blur to content behind it (for a subtle glassmorphic feel).
    // transition-transform duration-75 ease-out: Smoothly animates the cursor's movement.
    // The `transform` style dynamically positions the cursor.
    // `translate(-50%, -50%)` centers the element on the actual cursor coordinates.
    <div
      className="fixed z-50 pointer-events-none w-5 h-5 rounded-full bg-blue-600/40 shadow-gray-500  shadow-2xl backdrop-blur-xs transition-transform duration-75 ease-out"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -60%)', // Centers the div on the cursor point
      }}
    ></div>
  );
};

export default CustomCursor;