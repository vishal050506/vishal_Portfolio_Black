import React from "react";
import { FaCircle } from "react-icons/fa";
import { assets } from "../assets/assets"; // Adjust the import path as necessary
import { FaLocationArrow } from "react-icons/fa6";
const experiences = [
  {
    title: "Software Developer",
    company: "Trontek Electronics Ltd.",
    date: "Jan 2025 – Jun 2025",
  },
  {
    title: "Frontend Developer Intern",
    company: "CodSoft Technologies",
    date: "Jul 2024 – Aug 2024",
  },
  {
    title: "President of CodeX club",
    company: "Gateway Institute Of Engineering and Technology",
    date: "Jan 2023 – Jan 2025",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-black text-white px-6 md:px-12 py-16"
    >
      <h3 className="text-xl text-blue-400 font-semibold uppercase tracking-wide mb-2">
        Professional Journey
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Building scalable solutions, one line of code at a time.
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left: Image */}

        <div className="flex-1 w-full">
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-700 shadow-xl group">
            <img
              src={assets.vish}
              alt="Karan Chaudhary"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />

            {/* Arrow floating on the image */}
            <FaLocationArrow className="absolute bottom-13 left-30 text-white text-xl z-20 bg-blue-600 p-1 rounded-full shadow-lg" />

            {/* Name badge */}
            <div className="absolute bottom-4 left-10 bg-blue-600 px-6 py-1 rounded-full text-white font-large text-sm shadow-lg z-10 flex items-center gap-1">
              Vishal
            </div>
          </div>
        </div>
        {/* Right: Timeline */}
        <div className="bg-[#111111] rounded-2xl p-6 w-full md:w-1/2 space-y-8 relative">
          {/* Vertical blue line */}
          <div className="absolute top-7 left-[29px] bottom-1 w-px bg-blue-500 z-0" />

          {experiences.map((exp, index) => (
            <div key={index} className="flex items-start gap-4 relative z-10">
              <div className="flex flex-col items-center">
                <FaCircle
                  className={`text-blue-500 text-xs ${
                    index === 0 ? "mt-1" : "mt-0"
                  }`}
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">{exp.title}</h4>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
//
