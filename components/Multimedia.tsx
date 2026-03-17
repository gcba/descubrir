'use client';

import { useEffect, useRef } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MultimediaHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video background zoom effect
      gsap.fromTo(
        videoRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power3.out' }
      );

      // Heading flying in from the left
      gsap.from(headingRef.current, {
        x: -300,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'elastic.out(1, 0.5)',
      });

      // Text sliding up from below
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'back.out(1.7)',
      });

      // Button pop-in with bounce effect
      gsap.from(buttonRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        delay: 1.5,
        ease: 'bounce.out',
      });

      // ScrollTrigger: subtle parallax effect for the video
      gsap.to(videoRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      as="section"
      ref={sectionRef}
      position="relative"
      w="full"
      h={{ base: '60vh', md: '80vh' }}
      overflow="hidden"
    >
      {/* Video background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        zIndex={0}
        overflow="hidden"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          w: '100%',
          h: '100%',
          bg: 'blackAlpha.600', // overlay for better text visibility
        }}
      >
        <iframe
          ref={videoRef}
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
          title="Hero video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ objectFit: 'cover' }}
        />
      </Box>

      {/* Content over the video */}
      <Box
        position="relative"
        zIndex={1}
        textAlign="center"
        color="white"
        top="50%"
        transform="translateY(-50%)"
        px={4}
      >
        <Heading
          ref={headingRef}
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight="extrabold"
          mb={4}
        >
          Welcome to the Future!
        </Heading>
        <Text
          ref={textRef}
          fontSize={{ base: 'md', md: 'xl' }}
          mb={6}
        >
          Where animation meets technology and visual craziness.
        </Text>
        <Button
          ref={buttonRef}
          colorScheme="pink"
          size="lg"
        >
          Explore Now!
        </Button>
      </Box>
    </Box>
  );
}