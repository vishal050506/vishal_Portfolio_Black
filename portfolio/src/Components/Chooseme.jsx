// src/components/Chooseme.jsx
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const stats = [
  {
    end: 15,
    suffix: "+",
    label: "Real-world projects shipped in the last 2 years",
  },
  {
    end: 2,
    suffix: "+",
    label: "Years of crafting clean and scalable code",
  },
  {
    end: 8,
    suffix: "",
    label: "Weeks taken to build production-ready MVPs",
  },
  {
    end: 5,
    suffix: "+",
    label: "Teams collaborated with across diverse tech stacks",
  },
];


const Chooseme = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    // Start counting when component mounts (on page load)
    setStartCounting(true);
  }, []);

  return (
    <div id="choose" className="bg-black text-white text-center py-16">
      <h2 className="text-4xl font-bold mb-12">Why Choose Me?</h2>
      <div className="bg-[#0E1320] rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {stats.map((stat, index) => (
          <div key={index} className=" p-6 shadow-md">
            <h3 className="text-7xl font-bold text-white mb-2">
              {startCounting ? (
                <CountUp end={stat.end} duration={5.5} suffix={stat.suffix} />
              ) : (
                "0"
              )}
            </h3>
            <p className="text-gray-300 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chooseme;
