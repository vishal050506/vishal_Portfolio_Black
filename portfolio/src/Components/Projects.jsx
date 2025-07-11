import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { assets } from "../assets/assets";

const projects = [
  {
    title: "AI Career Coach",
    description:
      "Developed a career coach that provides personalized career advice and job recommendations using AI.",
    image: assets.ai,
    link: "https://github.com/vishal050506/AI_Career_Coach/tree/main",
  },
  {
    title: "Battery Management System IOS/Android App",
    description:
      "Developed a cross-platform mobile app for battery management using React Native.",
    image: assets.app,
    link: "https://github.com/vishal050506/BMS-IOS-ANDROID-APP/tree/secondary",
  },
  {
    title: "Traditional Women's Wear E-commerce",
    description:
      "Developed a Mern stack e-commerce platform for traditional Women's wear, featuring a user-friendly interface and secure payment integration also custom fit option.",
    image: assets.trad,
    link: "https://github.com/vishal050506/client-ecomm",
  },
  {
    title: "Code-Editor",
    description:
      "Developed a dynamic online code editor using React, enabling users to write and preview HTML, CSS, and JavaScript code in real-time. Features include live output rendering, downloadable code sections, and a clean, responsive UI for seamless coding experiences.",
    image: assets.codeeditor,
    link: "https://github.com/vishal050506/Codeeditor",
  },
];

const Projects = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Section id="projects">
      <TitleWrapper>
        <p>Latest Projects</p>
        <h2>Bringing Ideas to Life — One Project at a Time</h2>
      </TitleWrapper>

      <CarouselWrapper>
        <Marquee>
          <MarqueeGroup>
            {projects.concat(projects).map((project, index) => (
              <ProjectCard
                key={index}
                className={
                  animate ? `animate-card delay-${index % projects.length}` : ""
                }
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ImageWrapper>
                    <Image src={project.image} alt={project.title} />
                  </ImageWrapper>
                </a>
                <ProjectInfo>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </MarqueeGroup>
        </Marquee>
      </CarouselWrapper>
    </Section>
  );
};

export default Projects;

// Animations
const dropIn = keyframes`
  from { transform: translateY(-40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const scrollX = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

// Styled Components
const Section = styled.section`
  background-color: #000;
  color: white;
  padding: 4rem 1rem;
  text-align: center;
`;

const TitleWrapper = styled.div`
  margin-bottom: 3rem;
  p {
    font-size: 1.4rem;
    color: #60a5fa;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 1400px;
  margin: 0 auto;
`;

const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );
`;

const MarqueeGroup = styled.div`
  display: flex;
  animation: ${scrollX} 25s linear infinite;
`;

const ProjectCard = styled.div`
  background: #1c1c1c;
  border: 1px solid #374151; /* Tailwind's gray-700 */
  border-radius: 1.5rem;
  width: 300px;
  margin: 1rem;
  padding: 1rem;
  text-align: left;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 4px 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  flex-shrink: 0;
  opacity: 0;

  &.animate-card {
    animation: ${dropIn} 0.6s ease-out forwards;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 10px 25px;
    border-color: #6b7280; /* gray-500 on hover */
    z-index: 10;
  }

  ${Array.from({ length: projects.length }).map(
    (_, i) => css`
      &.delay-${i} {
        animation-delay: ${0.5 + i * 0.2}s;
      }
    `
  )}
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${ImageWrapper}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectInfo = styled.div`
  margin-top: 1rem;
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.875rem;
    color: #9ca3af;
  }
`;
