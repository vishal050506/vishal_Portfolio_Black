import React from "react";

const skills = [
  "UI Design",
  "UX Design",
  "Product Design",
  "Responsive Design",
  "Interaction Design",
  "UX Research",
  "Wireframing",
  "Branding",
  "ReactJS",
  "React Native",
  "Tailwind CSS",
  "Bootstrap",
  "TypeScript",
  "Figma",
  "Adobe Photoshop",
  "Canva",
  "NodeJS",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Git & GitHub",
  "VS Code",
  "XCode / Android Studio",
];

const SkillsExperience = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-black text-white">
      <h2 className="text-4xl font-bold mb-12">TechStack</h2>

      <div className="bg-[#0E1320] rounded-2xl px-10 py-8 w-fit flex flex-wrap justify-center gap-4 shadow-inner">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-black text-gray-300 text-sm px-5 py-2 rounded-md font-medium transform transition-transform duration-300 hover:scale-110"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsExperience;
