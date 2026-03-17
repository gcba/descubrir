'use client';

import { useRef, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ObeliscoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const obeliscoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!obeliscoRef.current) return;

      // Scroll: move up and rotate
      gsap.to(obeliscoRef.current, {
        y: -300,
        rotateY: 360,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',  // start when section enters viewport
          end: 'bottom top',    // end when section leaves viewport
          scrub: 1,
        },
      });

      // Glow effect
      gsap.to(obeliscoRef.current, {
        boxShadow: '0 0 60px #0ff, 0 0 120px #0ff',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      as="section"
      height="120vh"
      bg="gray.900"
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      overflow="hidden"
      position="relative"
      py={20}
    >
      <Box
        ref={obeliscoRef}
        width="60px"
        height="300px"
        bg="white"
        borderRadius="md"
        boxShadow="0 0 20px #0ff, 0 0 40px #0ff"
      />
      <Text
        position="absolute"
        bottom="10"
        color="whiteAlpha.700"
        fontSize="lg"
        textAlign="center"
      >
        Futuristic Obelisk 🌌
      </Text>
    </Box>
  );
}