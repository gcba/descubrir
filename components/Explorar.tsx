"use client";
import * as Icons from "lucide-react";

import { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Grid, Link, Monitor, Play, Server } from "lucide-react";
import { CookingPot, Music, Bike, Theater, Utensils, } from "lucide-react";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "CookingPot":
      return <CookingPot color="white" size={40} />;
    case "Bike":
      return <Bike color="white" size={40} />;
    default:
      return <Play color="white" size={40} />;
  }
};
gsap.registerPlugin(ScrollTrigger);

export default function Futuristic() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Floating / rotation animation
        gsap.to(card, {
          y: "+=20",
          rotationY: 360,
          rotationX: 15,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Scroll-triggered fade-in
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box mb={10} className="card-container-editorial">
      <Container maxW="container.lg">
        {/* TÍTULO */}
        <Heading
          as="h2"
          size="lg"
          mb={6}
          color="white"
          fontFamily="'Nunito', sans-serif"
          fontSize="48px"
        >
          Explorá la Ciudad{" "}
        </Heading>

        {/* Contenedor para alinear las tarjetas y el enlace */}
        <Box
          width="100%"
          maxW="100vw"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          overflowX={{ base: "auto", md: "hidden" }}
          flexWrap={{ base: "nowrap", md: "wrap" }}
          px={{ base: "calc((100vw - 348px) / 2)", md: "0px" }}
        >
          {/* GRID */}
          <Box
            display="flex"
            gap={6}
            overflowX={{ base: "auto", md: "hidden" }}
            flexWrap={{ base: "nowrap", md: "wrap" }}
            px="8px"
          >
            {[
              {
                title: "Gastronomía",
                img: "/explorar/Arte-y-cultura.svg",
                icon: "CookingPot",
              },
              {
                title: "Arte y cultura",
                img: "/explorar/Deportes.svg",
                icon: "Bike",
              },
              {
                title: "Deporte",
                img: "/explorar/Descubre-la-ciudad.svg",
                icon: "Bike",
              },
              {
                title: "Ferias y Exposiciones",
                img: "/explorar/Arte-y-Entretenimiento.svg",
                icon: "Theater",
              },
              {
                title: "Entretenimiento",
                img: "/explorar/Ferias-y-expo.svg",
                icon: "Utensils",
              },
              {
                title: "Descubrir la Ciudad",
                img: "/explorar/Gastronomía.svg",
                icon: "CookingPot",
              },
            ].map((evento, index) => (
              <Box key={index} w="348px" maxH="200px" h="200px" flexShrink={0}>
                <Stack w="100%" h="100%" borderRadius="16px" overflow="hidden">
                  <Box
                    w="100%"
                    h="100%"
                    backgroundImage={`url(${evento.img})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    position="relative"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                  >
                    {getIcon(evento.icon)}
                    <Text
                      as="span"
                      color="white"
                      textAlign="center"
                      fontWeight="bold"
                      mt={2}
                    >
                      {evento.title}
                    </Text>
                  </Box>
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>
        {/* Contenedor para alinear las tarjetas y el enlace */}
      </Container>
    </Box>
  );
}
