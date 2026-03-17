'use client';

import { useEffect, useRef } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MiniGame() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const alienRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const alien = alienRef.current!;
    const particles = particlesRef.current!;
    
    // Alien follows cursor
    const moveAlien = (e: MouseEvent) => {
      gsap.to(alien, {
        x: e.clientX - alien.offsetWidth / 2,
        y: e.clientY - alien.offsetHeight / 2,
        duration: 0.3,
        ease: 'power3.out',
      });
    };
    
    window.addEventListener('mousemove', moveAlien);

    // Click animation: particles burst
    const handleClick = (e: MouseEvent) => {
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const dot = document.createElement('div');
        dot.style.position = 'absolute';
        dot.style.width = dot.style.height = '8px';
        dot.style.borderRadius = '50%';
        dot.style.backgroundColor = 'cyan';
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        particles.appendChild(dot);

        const angle = Math.random() * Math.PI * 2;
        const radius = 50 + Math.random() * 50;

        gsap.to(dot, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          opacity: 0,
          scale: 0,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => dot.remove(),
        });
      }
    };
    
    window.addEventListener('click', handleClick);

    // Section fade-in on scroll
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      window.removeEventListener('mousemove', moveAlien);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      as="section"
      position="relative"
      minH="100vh"
      bg="black"
      color="white"
      overflow="hidden"
      py={20}
    >
      <Text
        fontSize={{ base: '3xl', md: '5xl' }}
        fontWeight="bold"
        textAlign="center"
        mb={12}
        color="cyan.400"
      >
        Alien Mini-Game 🚀
      </Text>

      {/* Alien that follows the cursor */}
      <Box
        ref={alienRef}
        position="absolute"
        w="40px"
        h="40px"
        borderRadius="50%"
        bg="magenta"
        boxShadow="0 0 15px magenta, 0 0 25px cyan"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="24px"
      >
        👾
      </Box>

      {/* Particles container */}
      <Box
        ref={particlesRef}
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        pointerEvents="none"
      />

      <Text
        fontSize="lg"
        textAlign="center"
        mt={16}
        color="cyan.300"
      >
        Move your mouse and click anywhere for a particle explosion!
      </Text>
    </Box>
  );
}