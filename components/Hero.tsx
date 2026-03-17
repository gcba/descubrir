'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Box, Heading, Text, Container, Button, Flex } from '@chakra-ui/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          subtitleRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          buttonRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6 },
          '-=0.3'
        );
    });

    return () => ctx.revert();
  }, []);

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, gray.50, gray.100)"
      _dark={{ bgGradient: 'linear(to-br, gray.900, gray.800)' }}
    >
      <Container maxW="container.lg" py={20} textAlign="center">
        <Heading
          ref={titleRef}
          as="h1"
          fontSize={{ base: '5xl', md: '7xl' }}
          fontWeight="bold"
          color="gray.900"
          _dark={{ color: 'white' }}
          mb={6}
          opacity={0}
        >
          Bienvenido al Futuro
          <Box as="span" display="block" color="blue.600" _dark={{ color: 'blue.400' }} mt={2}>
            de la Innovación
          </Box>
        </Heading>

        <Text
          ref={subtitleRef}
          fontSize={{ base: 'xl', md: '2xl' }}
          color="gray.600"
          _dark={{ color: 'gray.300' }}
          mb={8}
          maxW="3xl"
          mx="auto"
          opacity={0}
        >
          Transformamos ideas en realidad digital. Descubre cómo nuestra tecnología de
          vanguardia puede llevar tu negocio al siguiente nivel.
        </Text>

        <Box ref={buttonRef} opacity={0}>
          <Button
            size="lg"
            px={8}
            py={6}
            colorScheme="blue"
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onClick={scrollToContact}
          >
            Comenzar Ahora
            <ArrowRight style={{ marginLeft: '0.5rem', height: 20, width: 20 }} />
          </Button>
        </Box>
      </Container>

      <Flex
        position="absolute"
        bottom={10}
        left="50%"
        transform="translateX(-50%)"
        justify="center"
        align="center"
        animation="bounce 2s infinite"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          color="gray.400"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </Flex>
    </Box>
  );
}