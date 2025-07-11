import React from "react";
import { ArrowRight } from "lucide-react"; // optional icon
import memoji from "../assets/memoji.png"; // replace with your image path

const Quote = () => {
  return (
    <section className="bg-black py-8 px-4 flex justify-center">
      <div className="w-full max-w-6xl rounded-[48px] border border-[#2c2c2c] bg-[#141414] p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
        {/* Left: Image */}
        <img
          src={memoji}
          alt="Memoji"
          className="w-50 h-50 object-contain rounded-full"
        />

        {/* Right: Content */}
        <div className="text-center md:text-left max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Think different,
            <span className="ml-2 font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
              be different
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I don’t just write code—I engineer solutions that are meaningful,
            scalable, and user-focused. With every project, I blend logic with
            creativity to build seamless digital experiences that perform
            reliably and look great. Whether it’s optimizing performance,
            integrating complex APIs, or designing intuitive interfaces, I
            ensure every line of code contributes to a product that not only
            works—but truly delivers value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
