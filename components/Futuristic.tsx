'use client';

import { useEffect, useRef } from 'react';
import { Box, Container, Heading, Flex, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Cpu, Monitor, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const techCards = [
  { icon: Cpu, title: 'Quantum Processing', description: 'Next-gen computational power.' },
  { icon: Monitor, title: 'Holographic Display', description: 'Visualize data like never before.' },
  { icon: Server, title: 'Cloud AI', description: 'AI everywhere, instant insights.' },
];

export default function Futuristic() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Floating / rotation animation
        gsap.to(card, {
          y: '+=20',
          rotationY: 360,
          rotationX: 15,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });

        // Scroll-triggered fade-in
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      as="section"
      ref={sectionRef}
      py={20}
      bg="blackAlpha.900"
      color="white"
      id="futuristic"
    >
      <Container maxW="container.lg">
        <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center" mb={12}>
          Futuristic Tech
        </Heading>

        <Flex
          justify="space-around"
          wrap="wrap"
          gap={8}
          perspective="1200px" // gives depth for rotation
        >
          {techCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Box
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                w={{ base: 'full', md: '250px' }}
                p={6}
                borderWidth={2}
                borderColor="cyan.400"
                borderRadius="xl"
                shadow="xl"
                textAlign="center"
                transformStyle="preserve-3d"
              >
                <Icon size={48} color="#00FFFF" />
                <Heading fontSize="xl" mt={4} mb={2}>
                  {card.title}
                </Heading>
                <Text fontSize="sm">{card.description}</Text>
              </Box>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}