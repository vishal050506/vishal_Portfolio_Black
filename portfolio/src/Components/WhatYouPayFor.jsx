import React from "react";
import {assets} from "../assets/assets"; // Adjust the import path as necessary
const WhatYouPayFor = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-4 bg-black text-white">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        What exactly are you paying for?
      </h2>

      {/* Video container */}
      <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg">
        <video
          src={assets.code} // ✅ Replace with your actual path
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default WhatYouPayFor;
