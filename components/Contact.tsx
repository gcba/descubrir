'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Container, Heading, Flex, Text, Input, Textarea, Button, Stack } from '@chakra-ui/react';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSample() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: { trigger: titleRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      });

      gsap.fromTo(formRef.current, { y: 100, opacity: 0 }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: formRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box as="section" ref={sectionRef} py={20} bg="white" _dark={{ bg: 'gray.900' }}>
      <Container maxW="container.lg">
        <Heading ref={titleRef} as="h2" fontSize={{ base: '4xl', md: '5xl' }} fontWeight="bold" textAlign="center" color="gray.900" _dark={{ color: 'white' }} mb={16} opacity={0}>
          Contáctanos
        </Heading>

        <Box ref={formRef} maxW="2xl" mx="auto" opacity={0}>
          <Stack p={6} borderWidth={2} borderRadius="lg" shadow="xl">
            <Heading as="h3" fontSize="2xl" textAlign="center" color="gray.900" _dark={{ color: 'white' }}>Envíanos un Mensaje</Heading>

            <Stack>
              <Stack>
                <Flex align="center" gap={2}><User size={16} /><Text fontSize="sm" fontWeight="medium">Nombre</Text></Flex>
                <Input placeholder="Tu nombre completo" />
              </Stack>

              <Stack>
                <Flex align="center" gap={2}><Mail size={16} /><Text fontSize="sm" fontWeight="medium">Email</Text></Flex>
                <Input placeholder="tu@email.com" />
              </Stack>

              <Stack>
                <Flex align="center" gap={2}><MessageSquare size={16} /><Text fontSize="sm" fontWeight="medium">Mensaje</Text></Flex>
                <Textarea placeholder="Escribe tu mensaje aquí..." minH="150px" />
              </Stack>

              <Button colorScheme="blue" w="full">
                <Flex align="center" justify="center" gap={2}>
                  Enviar Mensaje <Send size={16} />
                </Flex>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}