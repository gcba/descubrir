'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Container, Heading, Grid, Text, Avatar, AvatarImage, Stack, Flex } from '@chakra-ui/react';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'María González',
    role: 'CEO, TechStart',
    content: 'La mejor decisión que hemos tomado. Su plataforma nos ha permitido escalar nuestro negocio de manera increíble.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Director de Tecnología, InnovateCo',
    content: 'Impresionante nivel de servicio y soporte. La integración fue perfecta y el equipo siempre estuvo disponible para ayudarnos.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Ana Martínez',
    role: 'Fundadora, Digital Solutions',
    content: 'Resultados excepcionales desde el primer día. La velocidad y confiabilidad de la plataforma superaron todas nuestras expectativas.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function TestimonialsSample() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8,
        scrollTrigger: { trigger: titleRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
      });

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        gsap.fromTo(card, { scale: 0.8, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 0.6, delay: index * 0.2, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none reverse' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box as="section" ref={sectionRef} py={20} bg="gray.50" _dark={{ bg: 'gray.900' }}>
      <Container maxW="container.lg">
        <Heading
          ref={titleRef}
          as="h2"
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight="bold"
          textAlign="center"
          color="gray.900"
          _dark={{ color: 'white' }}
          mb={16}
          opacity={0}
        >
          Lo Que Dicen Nuestros Clientes
        </Heading>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
          {testimonials.map((t, i) => (
            <Box key={i} ref={(el) => (cardsRef.current[i] = el)} opacity={0}>
              <Stack
                p={6}
                borderWidth={2}
                borderRadius="lg"
                shadow="md"
                _hover={{ shadow: 'xl', borderColor: 'blue.500' }}
                transition="all 0.3s"
              >
                <Quote size={32} color="#3182ce" />
                <Text color="gray.700" _dark={{ color: 'gray.300' }} fontSize="md">
                  {t.content}
                </Text>
                <Flex align="center" gap={4} mt={4}>
                  <Avatar.Root size="md">
                    <Avatar.Image src={t.avatar} />
                    <Avatar.Fallback>{t.name.charAt(0)}</Avatar.Fallback>
                  </Avatar.Root>
                  <Box>
                    <Text fontWeight="bold" color="gray.900" _dark={{ color: 'white' }}>
                      {t.name}
                    </Text>
                    <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.400' }}>
                      {t.role}
                    </Text>
                  </Box>
                </Flex>
              </Stack>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}