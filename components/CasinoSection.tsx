'use client';

import { useEffect, useRef } from 'react';
import { Box, Heading, Flex, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CasinoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lightRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slot machine reels spin animation
      slotRefs.current.forEach((slot, i) => {
        if (slot) {
          gsap.to(slot, {
            y: '+=200%',
            repeat: -1,
            duration: 1 + i * 0.3,
            ease: 'power2.inOut'
          });
        }
      });

      // Neon lights flashing
      lightRefs.current.forEach((light, i) => {
        if (light) {
          gsap.to(light, {
            opacity: 0.3,
            repeat: -1,
            yoyo: true,
            duration: 0.5 + i * 0.1,
            ease: 'sine.inOut'
          });
        }
      });

      // Scroll-triggered zoom for entire section
      gsap.fromTo(
        sectionRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      as="section"
      position="relative"
      height="120vh"
      bg="gray.900"
      overflow="hidden"
      py={20}
    >
      <Heading
        textAlign="center"
        color="yellow.400"
        fontSize={{ base: '3xl', md: '5xl' }}
        mb={16}
      >
        🎰 Futuristic Casino 🎰
      </Heading>

      {/* Slots Row */}
      <Flex justify="center" gap={8} mb={12}>
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            ref={(el) => (slotRefs.current[i] = el)}
            width="80px"
            height="120px"
            bg="gray.800"
            borderRadius="md"
            overflow="hidden"
            position="relative"
            boxShadow="0 0 20px #f9d71c, 0 0 40px #f9d71c"
          >
            <Box position="absolute" top="0">
              {['🍒', '💎', '7️⃣', '🍀', '🎲'].map((emoji, j) => (
                <Text
                  key={j}
                  fontSize="3xl"
                  textAlign="center"
                  color="white"
                  lineHeight="120px"
                >
                  {emoji}
                </Text>
              ))}
            </Box>
          </Box>
        ))}
      </Flex>

      {/* Neon lights border */}
      <Flex justify="center" gap={4}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Box
            key={i}
            ref={(el) => (lightRefs.current[i] = el)}
            width="10px"
            height="10px"
            bg="pink.400"
            borderRadius="full"
            boxShadow="0 0 8px #ff0080, 0 0 16px #ff0080"
          />
        ))}
      </Flex>

      {/* Footer Text */}
      <Text textAlign="center" mt={12} color="whiteAlpha.700" fontSize="lg">
        Spin the reels and feel the neon vibes!
      </Text>
    </Box>
  );
}