'use client';

import { useEffect, useRef } from 'react';
import { Box, Container, Grid, Flex, Heading, Text } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Your stats data
const stats = [
  { label: 'Users', value: 12345 },
  { label: 'Projects', value: 324 },
  { label: 'Downloads', value: 9876 },
  { label: 'Speed', value: 99 }, // could be %
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, index) => {
        if (el) {
          const target = stats[index].value;

          // Count up animation
          gsap.to({ val: 0 }, {
            val: target,
            duration: 1.5,
            ease: 'power1.out',
            onUpdate: function() {
                if (el) el.textContent = Math.floor(this.targets()[0].val).toLocaleString();
            },
          });

          // Bounce effect
          gsap.fromTo(
            el,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      as="section"
      ref={sectionRef}
      py={20}
      bg="gray.50"
      _dark={{ bg: 'gray.900' }}
      id="stats"
    >
      <Container maxW="container.lg">
        <Heading
          as="h2"
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight="bold"
          textAlign="center"
          color="gray.900"
          _dark={{ color: 'white' }}
          mb={16}
        >
          Our Amazing Stats
        </Heading>

        <Grid templateColumns={{ base: '1fr 1fr', md: 'repeat(4, 1fr)' }} gap={8} textAlign="center">
          {stats.map((stat, index) => (
            <Flex key={index} direction="column" align="center">
              <Box
                ref={(el) => (numberRefs.current[index] = el)}
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="blue.500"
              >
                0
              </Box>
              <Text fontSize="lg" fontWeight="medium" color="gray.700" _dark={{ color: 'gray.300' }}>
                {stat.label}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}