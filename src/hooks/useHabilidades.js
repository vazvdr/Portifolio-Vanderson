import { useEffect, useRef, useState } from "react";

import LandingPage from '../assets/LandingPage.png';
import API from '../assets/CreateConsumeAPI.png';
import Fullstack from '../assets/Fullstack.png';
import Mobile from '../assets/Mobile2.png';
import Test from '../assets/Test.png';
import Deploy from '../assets/Deployment.png';

export const useHabilidades = () => {
  const cards = [LandingPage, API, Fullstack, Mobile, Test, Deploy];
  const infiniteCards = [...cards, ...cards];

  const translationKeys = [
    { title: "landing_pages_title", description: "landing_pages_description" },
    { title: "api_title", description: "api_description" },
    { title: "fullstack_title", description: "fullstack_description" },
    { title: "mobile_title", description: "mobile_description" },
    { title: "tests_title", description: "tests_description" },
    { title: "deployment_title", description: "deployment_description" },
  ];

  const speed = 2.5;
  const trackRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const isPaused = useRef(false);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  useEffect(() => {
    let frame;

    const animate = () => {
      if (!isPaused.current) {
        setOffset(prev => {
          const cardWidth = 350;
          const totalWidth = infiniteCards.length * cardWidth;

          let newX = prev - speed;

          if (Math.abs(newX) >= totalWidth / 2) {
            return 0;
          }

          return newX;
        });
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  return {
    infiniteCards,
    translationKeys,
    offset,
    trackRef,
    handleMouseEnter,
    handleMouseLeave,
    cardsLength: cards.length,
  };
};