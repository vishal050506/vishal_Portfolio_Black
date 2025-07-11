import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";
import logo from "../assets/logo.png"; // Ensure this path is correct

const SocialHeader = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#0f0f0f] text-white px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
      {/* Left Section */}
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold">Vishal Verma</h1>
          <p className="text-gray-400 text-sm">Software Developer</p>
        </div>
      </div>

      {/* Right Section - Social Icons */}
      <div className="flex flex-wrap justify-center md:justify-end gap-3">
        <a
          href="https://www.linkedin.com/in/vishal-verma-152553250/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-white transition"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href="https://github.com/vishal050506"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-white transition"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://leetcode.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-white transition"
        >
          <SiLeetcode size={18} />
        </a>
        <a
          href="mailto:vishal050506@gmail.com"
          className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:border-white transition"
        >
          <SiGmail size={18} />
        </a>
      </div>
    </div>
  );
};

export default SocialHeader;
