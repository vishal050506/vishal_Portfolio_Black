import React from "react";
import { ArrowUpRight } from "lucide-react";
import { assets } from "../assets/assets";
// import playIcon from "../assets/play-icon.svg"; // Add your play icon SVG
// import videoThumbnail from "../assets/thumbnail.jpg"; // Replace with your image

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full bg-black bg-grid-white/[0.06] py-20 px-4 md:px-12 text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT TEXT SECTION */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            More about <em className="italic text-gray-500">myself</em>
          </h2>
          <p className="text-lg text-gray-400">
            I'm <strong>Vishal Verma</strong>, a Full Stack Developer skilled in
            the MERN stack (MongoDB, Express.js, React, Node.js) for building
            scalable web apps. I specialize in creating responsive UIs with
            React and efficient backend APIs with Node and Express. I also use
            React Native to develop cross-platform mobile apps. My work spans
            e-commerce platforms, chatbots, and IoT-based apps. I'm passionate
            about clean code and solving real-world problems.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <div className="tag-box" style={{ width: "12rem" }}>
              <div className="tag gap-2">
                {" "}
                <a href="#projects">Explore Projects</a>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO PREVIEW */}
        <div className="flex-1 w-full">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-700 shadow-xl group">
            <img
              src={assets.prog}
              alt="Preview"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
