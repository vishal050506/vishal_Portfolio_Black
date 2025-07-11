import React from "react";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  // const handleType = (count) => {
  //   // access word count number
  //   console.log(count);
  // };

  // const handleDone = () => {
  //   console.log("Done after 5 loops!");
  // };
  return (
    <div className="text-center flex flex-col gap-4 md:gap-0 mt-45 px-4">
      <h1 className=" text-[36px] sm:text-4xl md:text-[72px] font-bold leading-tight tracking-tight mb-4">
        <span className="text-gray-300 overflow-y-hidden bg-transparent block my-0">
          Big ideas
        </span>
        <span className="text-gray-300 bg-transparent overflow-y-hidden block my-0">
          Deserve Big Time
        </span>
        <span className="text-blue-500 inline-block min-h-[1.2em] overflow-y-hidden min-w-[100px] my-0">
          <Typewriter
            words={[
              "Crafting Code",
              "Writing Logic",
              "Debugging Dreams",
              "Optimizing UX",
              "Creating Impact",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <p className="text-[1.3rem] md:text-xl text-gray-500 mb-0 md:mb-8 max-w-[280px] sm:max-w-lg md:max-w-2xl mx-auto">
        Transforming bold ideas into scalable web and mobile apps—crafted with
        precision and built to perform.
      </p>

      <div className="w-full flex justify-center mt-4">
        <div className="tag-box">
          <div className="tag">
            <a href="#contact">Let's talk</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
