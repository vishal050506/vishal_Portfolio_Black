import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black">
      {/* Main navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between py-4 font-medium">
        {/* Logo with scroll to top */}
        <NavLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={assets.logo}
            className="w-20 scale-200 transition-transform duration-300 cursor-pointer ml-8"
            loading="lazy"
            alt="Logo"
          />
        </NavLink>

        {/* Desktop menu */}
        <ul className="hidden sm:flex gap-10 text-sm text-white">
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
          >
            <p>HOME</p>
          </NavLink>
          <a
            href="#about"
            className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
          >
            <p>About</p>
          </a>
          <a
            href="#experience"
            className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
          >
            <p>Experience</p>
          </a>
          <a
            href="#projects"
            className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
          >
            <p>Projects</p>
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center gap-1 hover:text-blue-500 transition-colors duration-200 cursor-pointer"
          >
            <p>Contact</p>
          </a>
        </ul>

        {/* Resume + Mobile menu icon */}
        <div className="flex items-center gap-6">
          <div className="tag-box mt-2 ml-4 hidden sm:block">
            <a
              href="https://drive.google.com/file/d/1o-HiKOb7NU3deo1e5rGXM2mFjZJAT3eG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="tag"
            >
              Resume
            </a>
          </div>
          <CiMenuBurger
            size={24}
            onClick={() => setVisible(true)}
            className="cursor-pointer sm:hidden text-white"
          />
        </div>
      </div>

      {/* Sidebar for mobile screen */}
      <div
        className={`fixed top-0 left-0 h-full bg-black z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-white p-4">
          {/* Back button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="Dropdown"
              className="h-4 rotate-180"
              loading="lazy"
            />
            <p>Back</p>
          </div>

          {/* Sidebar links */}
          <div className="flex flex-col items-center pl-6">
            <a
              href="#choose"
              className="py-2 hover:text-blue-500 transition duration-200 cursor-pointer"
              onClick={() => setVisible(false)}
            >
              Why Choose Me?
            </a>
            <NavLink
              to="/"
              className="py-2 hover:text-blue-500 transition duration-200 cursor-pointer"
              onClick={() => {
                setVisible(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </NavLink>

            <a
              href="#about"
              className="py-2 hover:text-blue-500 transition duration-200 cursor-pointer"
              onClick={() => setVisible(false)}
            >
              About
            </a>
            <a
              href="#experience"
              className="py-2 hover:text-blue-500 transition duration-200 cursor-pointer"
              onClick={() => setVisible(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="py-2 hover:text-blue-500 transition duration-200 cursor-pointer"
              onClick={() => setVisible(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="py-2 hover:text-blue-500 transition duration-200 cursor-pointer"
              onClick={() => setVisible(false)}
            >
              Contact
            </a>
            <div className="tag-box py-2">
              <a
                href="https://drive.google.com/file/d/1o-HiKOb7NU3deo1e5rGXM2mFjZJAT3eG/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="tag"
                onClick={() => setVisible(false)}
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
