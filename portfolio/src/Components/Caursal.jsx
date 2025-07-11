import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { assets } from "../assets/assets"; // Adjust the import path as necessary
function Carousel() {
  const [animate, setAnimate] = useState(false);

  const logos = assets.logos;
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <AppContainer>
      <MarqueeWrapper>
        <Marquee>
          <MarqueeGroup>
            {logos.map((el, index) => (
              <ImageGroup
                key={index}
                className={animate ? `animate-logo delay-${index}` : ""}
              >
                <Image src={el} alt={`company logo ${index}`} loading="lazy"/>
              </ImageGroup>
            ))}
            {logos.map((el, index) => (
              <ImageGroup
                key={`dup-${index}`}
                className={animate ? `animate-logo delay-${index}` : ""}
              >
                <Image src={el} alt={`company logo ${index}`} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </MarqueeWrapper>
    </AppContainer>
  );
}

export default Carousel;
const dropIn = keyframes`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const scrollX = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const AppContainer = styled.div`

  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  .animate-logo {
    animation: ${dropIn} 0.6s ease-out forwards;
    opacity: 0;
  }

  ${Array.from({ length: 12 }).map(
    (_, i) => css`
      .delay-${i} {
        animation-delay: ${0.5 + i * 0.1}s;
      }
    `
  )}
`;

const MarqueeWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  overflow: hidden;
`;

const Marquee = styled.div`
  display: flex;
  overflow: hidden;
  user-select: none;
  margin: 0;
  padding: 0;

  mask-image: linear-gradient(
    to right,
    transparent,
    black 5%,
    black 95%,
    transparent
  );

  @media (max-width: 768px) {
    mask-image: linear-gradient(
      to right,
      transparent,
      black 2%,
      black 98%,
      transparent
    );
  }
`;

const MarqueeGroup = styled.div`
  display: flex;
  min-width: fit-content;
  animation: ${scrollX} 20s linear infinite;

  @media (max-width: 768px) {
    animation: ${scrollX} 15s linear infinite;
  }
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 335px;
  height: 335px;
  padding: 0.5rem;

 
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border-radius: 0.75rem;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 4px 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 8px 24px;
    z-index: 10;
  }
`;

