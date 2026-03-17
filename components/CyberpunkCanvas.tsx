'use client';

import { useEffect, useRef } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CyberpunkCanvas() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const numOrbs = 15;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Orb animations
      orbsRef.current.forEach((orb) => {
        if (!orb) return;
        gsap.to(orb, {
          x: `+=${Math.random() * 120 - 60}px`,
          y: `+=${Math.random() * 80 - 40}px`,
          rotation: 360,
          backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
          duration: 2 + Math.random() * 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });

      // Canvas glow lines
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const resize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
          if (!ctx) return;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          // Draw lines connecting orbs
          for (let i = 0; i < orbsRef.current.length; i++) {
            for (let j = i + 1; j < orbsRef.current.length; j++) {
              const a = orbsRef.current[i];
              const b = orbsRef.current[j];
              if (!a || !b) continue;
              const ax = a.offsetLeft + a.offsetWidth / 2;
              const ay = a.offsetTop + a.offsetHeight / 2;
              const bx = b.offsetLeft + b.offsetWidth / 2;
              const by = b.offsetTop + b.offsetHeight / 2;
              const dist = Math.hypot(bx - ax, by - ay);
              if (dist < 250) {
                ctx.strokeStyle = `hsla(${Math.random() * 360}, 100%, 50%, ${1 - dist/250})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(ax, ay);
                ctx.lineTo(bx, by);
                ctx.stroke();
              }
            }
          }
          requestAnimationFrame(draw);
        };
        draw();
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      as="section"
      ref={sectionRef}
      position="relative"
      py={32}
      bg="gray.900"
      overflow="hidden"
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />

      <Container maxW="container.lg" textAlign="center" zIndex={1} position="relative">
        <Heading fontSize={{ base: '4xl', md: '5xl' }} mb={16} color="white">
          Ultra Cyberpunk Canvas
        </Heading>
      </Container>

      {Array.from({ length: numOrbs }).map((_, i) => (
        <Box
          key={i}
          ref={(el) => el && (orbsRef.current[i] = el)}
          position="absolute"
          top={`${Math.random() * 80 + 10}%`}
          left={`${Math.random() * 90 + 5}%`}
          w={`${20 + Math.random() * 40}px`}
          h={`${20 + Math.random() * 40}px`}
          borderRadius="full"
          bg={`hsl(${Math.random() * 360}, 100%, 50%)`}
          opacity={0.8}
          filter="blur(14px)"
        />
      ))}
    </Box>
  );
}