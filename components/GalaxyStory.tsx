'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function GalaxyStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const spaceshipRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stars slowly rotate
      gsap.to(starsRef.current, {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: 'linear'
      });

      // Planet floats and rotates
      gsap.to(planetRef.current, {
        rotation: 720,
        y: 50,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Neon light rays pulsing
      gsap.to(trailsRef.current, {
        scale: 1.2,
        opacity: 0.6,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Spaceship orbit around planet with scroll
      gsap.to(spaceshipRef.current, {
        rotation: 360,
        transformOrigin: '50% 50%',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      as="section"
      position="relative"
      height="150vh"
      bg="black"
      overflow="hidden"
    >
      {/* Stars background */}
      <Box
        ref={starsRef}
        position="absolute"
        width="200%"
        height="200%"
        bg="radial-gradient(circle, white 1px, transparent 2px)"
        backgroundSize="5px 5px"
        top="-50%"
        left="-50%"
      />

      {/* Planet */}
      <Box
        ref={planetRef}
        position="absolute"
        width="200px"
        height="200px"
        borderRadius="full"
        bg="linear-gradient(135deg, #4facfe, #00f2fe)"
        top="30%"
        left="50%"
        transform="translateX(-50%)"
        boxShadow="0 0 40px #00f2fe, 0 0 80px #4facfe"
      />

      {/* Neon trails */}
      <Box
        ref={trailsRef}
        position="absolute"
        width="300px"
        height="300px"
        borderRadius="full"
        border="2px solid #0ff"
        top="30%"
        left="50%"
        transform="translateX(-50%)"
        filter="blur(8px)"
      />

      {/* Spaceship */}
      <Box
        ref={spaceshipRef}
        position="absolute"
        width="40px"
        height="40px"
        bg="red"
        clipPath="polygon(50% 0%, 100% 100%, 0% 100%)"
        top="20%"
        left="50%"
        transform="translateX(-50%)"
      />
    </Box>
  );
}