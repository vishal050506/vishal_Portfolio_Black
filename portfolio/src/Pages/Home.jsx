import React from "react";
import Hero from "../Components/Hero";
import Carousel from "../Components/Caursal";
import AboutMe from "../Components/About";
import Chooseme from "../Components/Chooseme";
import Experience from "../Components/Experience";
import WhatYouPayFor from "../Components/WhatYouPayFor";
import SkillsExperience from "../Components/Skills";
import Projects from "../Components/Projects";
import Quote from "../Components/Quote";
import Contact from "../Components/Contact";
import SocialHeader from "../Components/SocialHeader";


const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Carousel />
      <Chooseme />
      <Experience />
      <WhatYouPayFor />
      <SkillsExperience />
      <Projects />
      <Quote />
      <Contact />
      <SocialHeader />
    </div>
  );
};

export default Home;
